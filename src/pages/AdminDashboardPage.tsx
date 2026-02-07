import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import { Listing } from "../types/index";
import { AdminCreateListingForm } from "../components/AdminCreateListingForm";

function money(n: number) {
  return new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(n);
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#1F1F1F] shadow-2xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="px-3 py-1 text-sm rounded-lg text-neutral-300 hover:bg-white/5"
            >
              Cerrar
            </button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function AdminDashboardPage() {
  const { isAdmin } = useAuth();

  const [items, setItems] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  const [qText, setQText] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "listings"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const rows = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Listing[];
        setItems(rows);
        setLoading(false);
      },
      () => setLoading(false)
    );
    return () => unsub();
  }, []);

  const filtered = useMemo(() => {
    const t = qText.trim().toLowerCase();
    if (!t) return items;

    // permite buscar por nombre o número (precio/edad)
    const asNum = Number(t);
    const hasNum = !Number.isNaN(asNum);

    return items.filter((x) => {
      const byName = (x.name ?? "").toLowerCase().includes(t);
      const byNum =
        hasNum && (Number(x.price ?? 0) === asNum || Number(x.age ?? 0) === asNum);
      return byName || byNum;
    });
  }, [items, qText]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#171717] text-white px-4 py-10">
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#1F1F1F] p-6">
          <h1 className="text-2xl font-bold">No autorizado</h1>
          <p className="mt-2 text-neutral-400">Solo administradores.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#171717] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold">Admin</h1>
            <p className="mt-1 text-neutral-400">
              Gestiona listings: buscar, ver y crear.
            </p>
          </div>

          <div className="flex w-full gap-3 sm:w-auto">
            <input
              value={qText}
              onChange={(e) => setQText(e.target.value)}
              placeholder="Buscar por nombre o número (precio/edad)"
              className="w-full sm:w-[360px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
            />
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-3 font-semibold text-white bg-red-600 shrink-0 rounded-xl hover:bg-red-500"
            >
              + Crear listing
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#1F1F1F] overflow-hidden">
          <div className="px-5 py-4 border-b border-white/10">
            <h2 className="font-semibold">Listado</h2>
            <p className="text-sm text-neutral-400">
              {loading ? "Cargando..." : `${filtered.length} resultados`}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-black/30 text-neutral-300">
                <tr>
                  <th className="px-4 py-3 text-left">Nombre</th>
                  <th className="px-4 py-3 text-left">Edad</th>
                  <th className="px-4 py-3 text-left">Precio</th>
                  <th className="px-4 py-3 text-left">Ubicaciones</th>
                  <th className="px-4 py-3 text-left">Likes</th>
                  <th className="px-4 py-3 text-left">Comentarios</th>
                  <th className="px-4 py-3 text-left">Views</th>
                  <th className="px-4 py-3 text-left">ID</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td className="px-4 py-4 text-neutral-400" colSpan={8}>
                      Cargando...
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td className="px-4 py-4 text-neutral-400" colSpan={8}>
                      No hay resultados.
                    </td>
                  </tr>
                ) : (
                  filtered.map((x) => (
                    <tr key={x.id} className="border-t border-white/10">
                      <td className="px-4 py-3 font-medium text-white">{x.name}</td>
                      <td className="px-4 py-3 text-neutral-300">{x.age ?? 0}</td>
                      <td className="px-4 py-3 text-neutral-300">{money(x.price ?? 0)}</td>
                      <td className="px-4 py-3 text-neutral-300">
                        {(x.locations ?? []).slice(0, 2).join(", ")}
                        {(x.locations ?? []).length > 2 ? "…" : ""}
                      </td>
                      <td className="px-4 py-3 text-neutral-300">{x.likesCount ?? 0}</td>
                      <td className="px-4 py-3 text-neutral-300">{x.commentsCount ?? 0}</td>
                      <td className="px-4 py-3 text-neutral-300">{x.views ?? 0}</td>
                      <td className="px-4 py-3 text-neutral-500">{x.id}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} title="Crear nuevo listing">
          <AdminCreateListingForm
            onCreated={() => {
              setOpen(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
