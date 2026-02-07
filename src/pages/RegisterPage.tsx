import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Milk, ArrowRight, Lock, Mail, User, Check } from "lucide-react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../lib/firebase";

export function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("Las contraseñas no coinciden");
    if (!formData.acceptTerms) return alert("Debes aceptar los términos y condiciones");

    try {
      const cred = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(cred.user, { displayName: formData.name });
      navigate("/onboarding/username", { replace: true });
    } catch {
      alert("No se pudo registrar.");
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
          <h2 className="text-3xl font-bold tracking-tight text-white">Crear Cuenta</h2>
          <p className="mt-2 text-sm text-neutral-400">Únete a nuestra comunidad</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-neutral-300">Nombre Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
                  <User className="w-5 h-5" />
                </div>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full p-3 pl-10 text-white transition-colors border rounded-lg border-white/10 bg-black/50 placeholder-neutral-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="Tu nombre"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-neutral-300">Correo Electrónico</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full p-3 pl-10 text-white transition-colors border rounded-lg border-white/10 bg-black/50 placeholder-neutral-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-neutral-300">Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full p-3 pl-10 text-white transition-colors border rounded-lg border-white/10 bg-black/50 placeholder-neutral-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-neutral-300">Confirmar Contraseña</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-500">
                  <Check className="w-5 h-5" />
                </div>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full p-3 pl-10 text-white transition-colors border rounded-lg border-white/10 bg-black/50 placeholder-neutral-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  name="acceptTerms"
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 rounded border-white/10 bg-black/50"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-neutral-400">
                  Acepto los{" "}
                  <Link to="/terms" target="_blank" className="font-medium text-red-500 hover:text-red-400">
                    términos y condiciones
                  </Link>
                </label>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="relative flex justify-center w-full px-4 py-3 text-sm font-semibold text-white transition-all bg-red-600 rounded-lg shadow-lg group hover:bg-red-500 shadow-red-500/20"
          >
            Registrarse
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <div className="text-sm text-center">
            <span className="text-neutral-400">¿Ya tienes cuenta? </span>
            <Link to="/login" className="font-medium text-red-500 hover:text-red-400">
              Inicia sesión aquí
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
