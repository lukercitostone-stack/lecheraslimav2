import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, runTransaction } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import { slugify } from "../lib/slug";

export function UsernamePage() {
  const { user, profile } = useAuth();
  const nav = useNavigate();
  const [value, setValue] = useState<string>(profile?.suggestedUsername ?? "");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string>("");

  const cleaned = useMemo(() => slugify(value), [value]);

  if (!user) return null;

  const save = async () => {
    setErr("");
    const username = cleaned;

    if (username.length < 3) return setErr("Username muy corto (mínimo 3).");
    if (username.length > 20) return setErr("Username muy largo (máximo 20).");

    setSaving(true);
    try {
      const userRef = doc(db, "users", user.uid);
      const unameRef = doc(db, "usernames", username);

      await runTransaction(db, async (tx) => {
        const unameSnap = await tx.get(unameRef);
        if (unameSnap.exists()) throw new Error("TAKEN");

        const userSnap = await tx.get(userRef);
        if (!userSnap.exists()) throw new Error("NO_USERDOC");

        // reservar username
        tx.set(unameRef, { uid: user.uid });

        // asignarlo al user
        tx.update(userRef, { username });
      });

      nav("/");
    } catch (e: any) {
      if (e?.message === "TAKEN") setErr("Ese username ya existe.");
      else setErr("No se pudo guardar. Intenta otra vez.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1F1F1F] p-6">
        <h1 className="text-2xl font-bold text-white">Elige tu username</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Esto se usará para tus likes/comentarios y tu perfil.
        </p>

        <div className="mt-5">
          <label className="block mb-1 text-sm text-neutral-300">Username</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
            placeholder="ej: lechera123"
          />
          <div className="mt-2 text-xs text-neutral-500">
            Se guardará como: <span className="text-neutral-200">{cleaned || "—"}</span>
          </div>
          {err && <div className="mt-3 text-sm text-red-400">{err}</div>}
        </div>

        <button
          disabled={saving}
          onClick={save}
          className="w-full px-4 py-3 mt-6 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 disabled:opacity-60"
        >
          {saving ? "Guardando..." : "Continuar"}
        </button>
      </div>
    </div>
  );
}
