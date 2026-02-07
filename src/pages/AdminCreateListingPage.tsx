import { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { uploadToStorage } from "../lib/upload";
import { useAuth } from "../context/AuthContext";

function slug(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export function AdminCreateListingPage() {
  const { isAdmin } = useAuth();

  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(20);
  const [price, setPrice] = useState<number>(250);
  const [description, setDescription] = useState("");
  const [locationsRaw, setLocationsRaw] = useState("Lince, San Isidro");

  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telegram, setTelegram] = useState("");

  const [waist, setWaist] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [hips, setHips] = useState<number>(0);
  const [bust, setBust] = useState<number>(0);

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);

  const locations = useMemo(
    () =>
      locationsRaw
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
    [locationsRaw]
  );

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#171717] text-white px-4 py-10">
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#1F1F1F] p-6">
          <h1 className="text-2xl font-bold">No autorizado</h1>
          <p className="mt-2 text-neutral-400">
            Esta sección es solo para administradores.
          </p>
        </div>
      </div>
    );
  }

  const onSave = async () => {
    setErr("");

    const n = name.trim();
    if (!n) return setErr("Nombre requerido.");
    if (!mainImage) return setErr("Sube una imagen principal.");

    setSaving(true);
    try {
      const base = `${slug(n)}-${Date.now()}`;

      // 1) principal
      const mainUploaded = await uploadToStorage(mainImage, { folder: "listings" });
      const mainUrl = mainUploaded.url;

      // 2) galería (si no sube, usamos main como fallback)
      const galleryUploaded = await Promise.all(
        galleryImages.map((f) => uploadToStorage(f, { folder: "listings" }))
      );
      const galleryUrls = galleryUploaded.map((x) => x.url);

      const images = galleryUrls.length ? galleryUrls : [mainUrl];

      // 3) videos (opcional)
      const videoUploaded = await Promise.all(
        videos.map((f) => uploadToStorage(f, { folder: "videos", resourceType: "video" }))
      );
      const videoUrls = videoUploaded.map((x) => x.url);

      // 4) Firestore
      await addDoc(collection(db, "listings"), {
        name: n,
        age: Number(age) || 0,
        price: Number(price) || 0,
        description: description.trim(),
        locations,

        image: mainUrl,
        images,
        videos: videoUrls,

        measurements: {
          waist: Number(waist) || 0,
          height: Number(height) || 0,
          hips: Number(hips) || 0,
          bust: Number(bust) || 0,
        },

        contact: {
          phone: phone.trim(),
          whatsapp: whatsapp.trim(),
          telegram: telegram.trim(),
        },

        createdAt: serverTimestamp(),

        likesCount: 0,
        commentsCount: 0,
        views: 0,
      });

      // reset
      setName("");
      setDescription("");
      setMainImage(null);
      setGalleryImages([]);
      setVideos([]);
      alert("✅ Listing creado");
    } catch (e: any) {
      setErr(e?.message ?? "No se pudo guardar.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] text-white px-4 py-10">
      <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#1F1F1F] p-6">
        <h1 className="text-3xl font-bold">Crear Listing</h1>
        <p className="mt-2 text-neutral-400">
          Sube imágenes/videos a Cloudinary y guarda los links en Firestore.
        </p>

        {err && <div className="mt-4 text-red-400">{err}</div>}

        <div className="grid gap-3 mt-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
            placeholder="Nombre (ej: Valeria)"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Edad"
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Precio"
            />
          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500 min-h-[110px]"
            placeholder="Descripción"
          />

          <input
            value={locationsRaw}
            onChange={(e) => setLocationsRaw(e.target.value)}
            className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
            placeholder="Locations separadas por coma (ej: Lince, San Isidro)"
          />

          <div className="grid grid-cols-3 gap-3">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Phone"
            />
            <input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="WhatsApp"
            />
            <input
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Telegram URL"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Waist"
            />
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Height"
            />
            <input
              type="number"
              value={hips}
              onChange={(e) => setHips(Number(e.target.value))}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Hips"
            />
            <input
              type="number"
              value={bust}
              onChange={(e) => setBust(Number(e.target.value))}
              className="w-full p-3 text-white border outline-none rounded-xl border-white/10 bg-black/40 focus:border-red-500"
              placeholder="Bust"
            />
          </div>

          <div className="grid gap-3 mt-3">
            <label className="text-sm text-neutral-300">
              Imagen principal (obligatoria)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setMainImage(e.target.files?.[0] ?? null)}
              className="text-sm"
            />

            <label className="text-sm text-neutral-300">
              Galería (varias imágenes)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setGalleryImages(Array.from(e.target.files ?? []))}
              className="text-sm"
            />

            <label className="text-sm text-neutral-300">Videos (opcional)</label>
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={(e) => setVideos(Array.from(e.target.files ?? []))}
              className="text-sm"
            />
          </div>

          <button
            disabled={saving}
            onClick={onSave}
            className="w-full px-4 py-3 mt-4 font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 disabled:opacity-60"
          >
            {saving ? "Guardando..." : "Guardar Listing"}
          </button>
        </div>
      </div>
    </div>
  );
}
