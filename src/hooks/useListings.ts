import { useEffect, useMemo, useState, useCallback } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  deleteDoc,
  serverTimestamp,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { Listing, MarketplaceItem } from "../types";
import { useAuth } from "../context/AuthContext";

export function useListings() {
  const { user } = useAuth();
  const [listings, setListings] = useState<Listing[]>([]);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "listings"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const rows: Listing[] = snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        }));
        setListings(rows);
        setLoading(false);
      },
      () => setLoading(false)
    );
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) {
      setLikedIds(new Set());
      return;
    }
    const likesCol = collection(db, "users", user.uid, "likes");
    const unsub = onSnapshot(likesCol, (snap) => {
      const s = new Set<string>();
      snap.docs.forEach((d) => s.add(d.id));
      setLikedIds(s);
    });
    return () => unsub();
  }, [user?.uid]);

  const marketplaceItems: MarketplaceItem[] = useMemo(() => {
    return listings.map((l) => ({
      kind: "listing",
      listing: { ...l, liked: likedIds.has(l.id) },
    }));
  }, [listings, likedIds]);

  const getListing = useCallback(
    (id: string) => listings.find((x) => x.id === id),
    [listings]
  );

  const toggleLike = useCallback(
    async (listingId: string) => {
      if (!user) throw new Error("NOT_AUTH");

      const likeRef = doc(db, "users", user.uid, "likes", listingId);
      const listingRef = doc(db, "listings", listingId);

      const isLiked = likedIds.has(listingId);

      if (isLiked) {
        await deleteDoc(likeRef);
        await updateDoc(listingRef, { likesCount: increment(-1) }).catch(() => {});
      } else {
        await setDoc(likeRef, { createdAt: serverTimestamp() });
        await updateDoc(listingRef, { likesCount: increment(1) }).catch(() => {});
      }
    },
    [user, likedIds]
  );

  return { loading, listings, marketplaceItems, getListing, toggleLike };
}
