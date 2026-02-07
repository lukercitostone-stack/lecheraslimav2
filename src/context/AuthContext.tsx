import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User, onAuthStateChanged, getIdTokenResult } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { makeAutoUsername } from "../lib/slug";

type UserProfile = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  username?: string | null;
	suggestedUsername?: string | null;
  role?: "user" | "admin";
  createdAt?: any;
};

type AuthState = {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  refreshTokenClaims: () => Promise<void>;
};

const Ctx = createContext<AuthState | null>(null);

export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}

async function upsertUserProfile(u: User) {
  const ref = doc(db, "users", u.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const autoUsername = makeAutoUsername(u.displayName, u.email);
    await setDoc(ref, {
      uid: u.uid,
      email: u.email ?? null,
      displayName: u.displayName ?? null,
      photoURL: u.photoURL ?? null,
      username: null, // se define en onboarding
      role: "user",
      createdAt: serverTimestamp(),
      // sugerencia: guarda un username sugerido
      suggestedUsername: autoUsername,
    });
  } else {
    // puedes mantener datos frescos
    await updateDoc(ref, {
      email: u.email ?? null,
      displayName: u.displayName ?? null,
      photoURL: u.photoURL ?? null,
    });
  }

  const after = await getDoc(ref);
  return after.data() as UserProfile;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const refreshTokenClaims = async () => {
    if (!auth.currentUser) return;
    // forzar refresh de token para obtener claims nuevos
    await auth.currentUser.getIdToken(true);
    const res = await getIdTokenResult(auth.currentUser);
    const claimAdmin = !!res.claims.admin;
    setIsAdmin(claimAdmin);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setLoading(true);
      setUser(u);

      if (!u) {
        setProfile(null);
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const p = await upsertUserProfile(u);
      setProfile(p);

      // Admin recomendado: custom claim `admin:true`
      const tokenRes = await getIdTokenResult(u);
      const claimAdmin = !!tokenRes.claims.admin;

      // fallback (NO recomendado para seguridad): campo en doc
      const docAdmin = p.role === "admin";

      setIsAdmin(claimAdmin || docAdmin);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const value = useMemo(
    () => ({ user, profile, loading, isAdmin, refreshTokenClaims }),
    [user, profile, loading, isAdmin]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
