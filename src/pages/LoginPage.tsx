import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Milk, ArrowRight, Lock, Mail } from "lucide-react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const goAfterLogin = async (uid: string) => {
    // si no tiene username -> onboarding
    const snap = await getDoc(doc(db, "users", uid));
    const data = snap.data() as any;
    if (!data?.username) navigate("/onboarding/username", { replace: true });
    else navigate("/", { replace: true });
  };

  const handleGoogle = async () => {
    setBusy(true);
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      await goAfterLogin(cred.user.uid);
    } catch (e: any) {
      alert("No se pudo iniciar con Google.");
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      // email/password lo usaremos para admin (o usuarios si quieres)
      await goAfterLogin(cred.user.uid);
    } catch {
      alert("Credenciales inválidas.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md space-y-8 bg-[#1F1F1F] p-8 rounded-2xl border border-white/5 shadow-2xl"
      >
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-red-500 rounded-xl bg-red-500/10">
            <Milk className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Accede para una mejor experiencia
          </p>
        </div>

        {/* ✅ Google */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogle}
          disabled={busy}
          className="flex items-center justify-center w-full gap-3 px-4 py-3 text-sm font-semibold text-white border rounded-lg border-white/10 bg-black/40 hover:bg-white/5 disabled:opacity-60"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-white rounded">
            G
          </span>
          Continuar con Google
        </motion.button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10" />
          <div className="text-xs text-neutral-500">o admin con credenciales</div>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-neutral-300">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-3 pl-10 text-white transition-colors border rounded-lg border-white/10 bg-black/50 placeholder-neutral-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="admin@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-neutral-300">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-3 pl-10 text-white transition-colors border rounded-lg border-white/10 bg-black/50 placeholder-neutral-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={busy}
            className="group relative flex w-full justify-center rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#1F1F1F] transition-all shadow-lg shadow-red-500/20 disabled:opacity-60"
          >
            Entrar
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <div className="text-sm text-center">
            <span className="text-neutral-400">¿No tienes cuenta? </span>
            <Link to="/register" className="font-medium text-red-500 hover:text-red-400">
              Regístrate aquí
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
