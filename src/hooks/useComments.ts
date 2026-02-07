import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import { CommentDoc } from "../types/index";
export function useComments(listingId: string) {
  const { user, profile } = useAuth();
  const [comments, setComments] = useState<CommentDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!listingId) return;
    const colRef = collection(db, "listings", listingId, "comments");
    const q = query(colRef, orderBy("createdAt", "asc"));

    const unsub = onSnapshot(
      q,
      (snap) => {
        const rows: CommentDoc[] = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
        setComments(rows);
        setLoading(false);
      },
      () => setLoading(false)
    );

    return () => unsub();
  }, [listingId]);

  const createComment = async (text: string, parentId: string | null) => {
    if (!user) throw new Error("NOT_AUTH");
    if (!profile?.username) throw new Error("NO_USERNAME");

    const colRef = collection(db, "listings", listingId, "comments");
    await addDoc(colRef, {
      uid: user.uid,
      username: profile.username,
      text,
      parentId,
      createdAt: serverTimestamp(),
    });
  };

  const threads = useMemo(() => {
    const top = comments.filter((c) => !c.parentId);
    const repliesByParent = new Map<string, CommentDoc[]>();
    comments
      .filter((c) => !!c.parentId)
      .forEach((c) => {
        const k = c.parentId!;
        const arr = repliesByParent.get(k) ?? [];
        arr.push(c);
        repliesByParent.set(k, arr);
      });

    return top.map((t) => ({
      ...t,
      replies: repliesByParent.get(t.id) ?? [],
    }));
  }, [comments]);

  return { loading, comments, threads, createComment };
}
