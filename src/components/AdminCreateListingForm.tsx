import { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { uploadToStorage } from "../lib/upload";

function slug(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

export function AdminCreateListingForm({ onCreated }: { onCreated?: () => void }) {
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
    () => locationsRaw.split(",").map((x) => x.trim()).filter(Boolean),
    [locationsRaw]
  );

  const onSave = async () => {
    setErr("");
    const n = name.trim();
    if (!n) return setErr("Nombre requerido.");
    if (!mainImage) return setErr("Sube una imagen principal.");

    setSaving(true);
    try {
      const base = `${slug(n)}-${Date.now()}`;

      // 1) principal
      const mainUp = await uploadToStorage(mainImage, { folder: "listings" });
      const mainUrl = mainUp.url;

      // 2) galería
      const galleryUps = await Promise.all(
        galleryImages.map((f) => uploadToStorage(f, { folder: "listings" }))
      );
      const galleryUrls = galleryUps.map((x) => x.url);
      const images = galleryUrls.length ? galleryUrls : [mainUrl];

      // 3) videos (opcional)
      const videoUps = await Promise.all(
        videos.map((f) => uploadToStorage(f, { folder: "videos", resourceType: "video" }))
      );
      const videoUrls = videoUps.map((x) => x.url);

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

        // ✅ contadores que tu tabla espera
        likesCount: 0,
        commentsCount: 0,
        views: 0,
      });

      onCreated?.();
      alert("✅ Listing creado");
    } catch (e: any) {
      console.error(e);
      setErr(e?.message ?? "No se pudo guardar.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid gap-3">
      {err && <div className="text-red-400">{err}</div>}

      <label className="text-sm text-neutral-300">Nombre</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="p-3 border rounded-xl bg-black/40 border-white/10" />

      <label className="text-sm text-neutral-300">Edad</label>
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="p-3 border rounded-xl bg-black/40 border-white/10" />

      <label className="text-sm text-neutral-300">Precio</label>
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="p-3 border rounded-xl bg-black/40 border-white/10" />

      <label className="text-sm text-neutral-300">Descripción</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="p-3 rounded-xl bg-black/40 border border-white/10 min-h-[110px]" />

      <label className="text-sm text-neutral-300">Locations (coma)</label>
      <input value={locationsRaw} onChange={(e) => setLocationsRaw(e.target.value)} className="p-3 border rounded-xl bg-black/40 border-white/10" />

      <label className="text-sm text-neutral-300">Imagen principal</label>
      <input type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files?.[0] ?? null)} />

      <label className="text-sm text-neutral-300">Galería</label>
      <input type="file" accept="image/*" multiple onChange={(e) => setGalleryImages(Array.from(e.target.files ?? []))} />

      <label className="text-sm text-neutral-300">Videos</label>
      <input type="file" accept="video/*" multiple onChange={(e) => setVideos(Array.from(e.target.files ?? []))} />

      <button
        disabled={saving}
        onClick={onSave}
        className="py-3 mt-2 font-semibold bg-red-600 hover:bg-red-500 rounded-xl disabled:opacity-60"
      >
        {saving ? "Guardando..." : "Guardar"}
      </button>
    </div>
  );
}
