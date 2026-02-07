import { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { uploadImage, uploadVideo } from "../lib/cloudinary";
import { useAuth } from "../context/AuthContext";

export function AdminPage() {
  const { isAdmin } = useAuth();

  const [name, setName] = useState("Valeria");
  const [age, setAge] = useState(20);
  const [price, setPrice] = useState(250);
  const [description, setDescription] = useState("Descripción de prueba");

  const [locationsText, setLocationsText] = useState("Lince, San Isidro");

  const [waist, setWaist] = useState(60);
  const [height, setHeight] = useState(165);
  const [hips, setHips] = useState(92);
  const [bust, setBust] = useState(90);

  const [phone, setPhone] = useState("51999999999");
  const [whatsapp, setWhatsapp] = useState("51999999999");
  const [telegram, setTelegram] = useState("https://t.me/tuusuario");

  const [imagesFiles, setImagesFiles] = useState<File[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const locations = useMemo(() => {
    return locationsText
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  }, [locationsText]);

  const createListing = async () => {
    if (!isAdmin) return alert("No eres admin");
    if (imagesFiles.length === 0) return alert("Sube al menos 1 imagen");

    setSaving(true);
    setMsg("");
    try {
      // 1) subir imágenes
      const uploadedImages = await Promise.all(imagesFiles.map((f) => uploadImage(f)));
      const imageUrls = uploadedImages.map((x) => x.secureUrl);
      const mainImage = imageUrls[0];

      // 2) subir video opcional
      const videoUrls: string[] = [];
      if (videoFile) {
        const v = await uploadVideo(videoFile);
        videoUrls.push(v.secureUrl);
      }

      // 3) guardar en Firestore
      await addDoc(collection(db, "listings"), {
        name,
        age,
        price,
        image: mainImage,
        images: imageUrls,
        videos: videoUrls,
        description,
        locations,
        measurements: { waist, height, hips, bust },
        contact: { phone, whatsapp, telegram },
        createdAt: serverTimestamp(),
        likesCount: 0,
        commentsCount: 0,
        views: 0,
      });

      setMsg("✅ Listing creado y publicado");
      setImagesFiles([]);
      setVideoFile(null);
    } catch (e: any) {
      console.error(e);
      if (e?.message === "CLOUDINARY_ENV_MISSING") {
        setMsg("❌ Faltan variables de Cloudinary (env). Revisa Vercel/Local.");
      } else {
        setMsg("❌ No se pudo crear. Revisa consola.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Dashboard Admin</h1>
        <p className="mt-2 text-neutral-400">Crea listings subiendo imágenes (Cloudinary).</p>

        <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-[#1F1F1F] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-neutral-300">Nombre</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-neutral-300">Edad</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Precio</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm text-neutral-300">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full min-h-[120px] rounded-xl border border-white/10 bg-black/30 p-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-300">Locations (separadas por coma)</label>
            <input
              value={locationsText}
              onChange={(e) => setLocationsText(e.target.value)}
              className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500"
              placeholder="Lince, San Isidro"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <label className="text-sm text-neutral-300">Cintura</label>
              <input type="number" value={waist} onChange={(e) => setWaist(Number(e.target.value))}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Estatura</label>
              <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Caderas</label>
              <input type="number" value={hips} onChange={(e) => setHips(Number(e.target.value))}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Busto</label>
              <input type="number" value={bust} onChange={(e) => setBust(Number(e.target.value))}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm text-neutral-300">Teléfono</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-300">WhatsApp</label>
              <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
            <div>
              <label className="text-sm text-neutral-300">Telegram URL</label>
              <input value={telegram} onChange={(e) => setTelegram(e.target.value)}
                className="w-full p-3 mt-1 border outline-none rounded-xl border-white/10 bg-black/30 focus:border-red-500" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm text-neutral-300">Imágenes (puedes seleccionar varias)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setImagesFiles(Array.from(e.target.files ?? []))}
                className="block w-full mt-2 text-sm"
              />
              <div className="mt-2 text-xs text-neutral-400">
                Seleccionadas: {imagesFiles.length}
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-300">Video (opcional)</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
                className="block w-full mt-2 text-sm"
              />
              <div className="mt-2 text-xs text-neutral-400">
                {videoFile ? `Video: ${videoFile.name}` : "No hay video"}
              </div>
            </div>
          </div>

          <button
            disabled={saving}
            onClick={createListing}
            className="w-full px-4 py-3 font-semibold bg-red-600 rounded-xl hover:bg-red-500 disabled:opacity-60"
          >
            {saving ? "Publicando..." : "Publicar listing"}
          </button>

          {msg && <div className="text-sm">{msg}</div>}
        </div>
      </div>
    </div>
  );
}
