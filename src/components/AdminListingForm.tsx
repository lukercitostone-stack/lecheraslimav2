import { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { uploadToStorage, UploadResult } from "../lib/upload";
import { Listing } from "../types";

function slug(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

type Props = {
  mode: "create" | "edit";
  initial?: Listing; // requerido si mode="edit"
  onDone?: () => void;
};

export function AdminListingForm({ mode, initial, onDone }: Props) {
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

  // existentes (URLs)
  const [existingMain, setExistingMain] = useState<string>("");
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [existingVideos, setExistingVideos] = useState<string[]>([]);

  // nuevos archivos
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);

  // para “quitar” urls existentes
  const [removeImages, setRemoveImages] = useState<Record<string, boolean>>({});
  const [removeVideos, setRemoveVideos] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (mode === "edit" && initial) {
      setName(initial.name ?? "");
      setAge(Number(initial.age ?? 0));
      setPrice(Number(initial.price ?? 0));
      setDescription(initial.description ?? "");
      setLocationsRaw((initial.locations ?? []).join(", "));

      setPhone(initial.contact?.phone ?? "");
      setWhatsapp(initial.contact?.whatsapp ?? "");
      setTelegram(initial.contact?.telegram ?? "");

      setWaist(Number(initial.measurements?.waist ?? 0));
      setHeight(Number(initial.measurements?.height ?? 0));
      setHips(Number(initial.measurements?.hips ?? 0));
      setBust(Number(initial.measurements?.bust ?? 0));

      setExistingMain(initial.image ?? "");
      setExistingImages(initial.images ?? (initial.image ? [initial.image] : []));
      setExistingVideos(initial.videos ?? []);
      setRemoveImages({});
      setRemoveVideos({});
      setMainImage(null);
      setGalleryImages([]);
      setVideos([]);
    }
  }, [mode, initial]);

  const locations = useMemo(
    () => locationsRaw.split(",").map((x) => x.trim()).filter(Boolean),
    [locationsRaw]
  );

  const toggleRemoveImage = (url: string) => {
    setRemoveImages((p) => ({ ...p, [url]: !p[url] }));
  };

  const toggleRemoveVideo = (url: string) => {
    setRemoveVideos((p) => ({ ...p, [url]: !p[url] }));
  };

  const doUpload = async () => {
    // ✅ principal
    let mainUrl = existingMain;
    if (mainImage) {
      const up = await uploadToStorage(mainImage, { folder: "listings" });
      mainUrl = up.url;
    }
    if (!mainUrl) throw new Error("Falta imagen principal.");

    // ✅ imágenes existentes (filtradas por removals)
    const keptExistingImages = existingImages.filter((u) => !removeImages[u]);

    // ✅ nuevas imágenes
    const newGalleryUps: UploadResult[] = await Promise.all(
      galleryImages.map((f) => uploadToStorage(f, { folder: "listings" }))
    );
    const newGalleryUrls = newGalleryUps.map((x) => x.url);

    // ✅ images final
    const imagesFinal = Array.from(
      new Set([mainUrl, ...keptExistingImages, ...newGalleryUrls])
    );

    // ✅ videos existentes (filtradas)
    const keptExistingVideos = existingVideos.filter((u) => !removeVideos[u]);

    // ✅ nuevos videos
    const newVideoUps: UploadResult[] = await Promise.all(
      videos.map((f) => uploadToStorage(f, { folder: "videos", resourceType: "video" }))
    );
    const newVideoUrls = newVideoUps.map((x) => x.url);

    const videosFinal = Array.from(new Set([...keptExistingVideos, ...newVideoUrls]));

    return { mainUrl, imagesFinal, videosFinal };
  };

  const onSubmit = async () => {
    setErr("");

    const n = name.trim();
    if (!n) return setErr("Nombre requerido.");

    if (mode === "create" && !mainImage) {
      return setErr("Sube una imagen principal.");
    }

    setSaving(true);
    try {
      const base = `${slug(n)}-${Date.now()}`;

      // (base se queda por si luego quieres usarlo para algo; Cloudinary ya genera public_id)
      void base;

      const { mainUrl, imagesFinal, videosFinal } = await doUpload();

      const payload = {
        name: n,
        age: Number(age) || 0,
        price: Number(price) || 0,
        description: description.trim(),
        locations,

        image: mainUrl,
        images: imagesFinal,
        videos: videosFinal,

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
      };

      if (mode === "create") {
        await addDoc(collection(db, "listings"), {
          ...payload,
          createdAt: serverTimestamp(),
          likesCount: 0,
          commentsCount: 0,
          views: 0,
        });
      } else {
        if (!initial?.id) throw new Error("Missing listing id");
        await updateDoc(doc(db, "listings", initial.id), {
          ...payload,
          // no tocamos createdAt, ni contadores
        });
      }

      alert(mode === "create" ? "✅ Listing creado" : "✅ Listing actualizado");
      onDone?.();
    } catch (e: any) {
      console.error(e);
      setErr(e?.message ?? "No se pudo guardar.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid gap-5">
      {err && <div className="text-red-400">{err}</div>}

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Edad</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Precio (S/)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Locations (coma)</label>
          <input
            value={locationsRaw}
            onChange={(e) => setLocationsRaw(e.target.value)}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-neutral-300">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 rounded-xl bg-black/40 border border-white/10 min-h-[120px] focus:border-red-500 outline-none"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">WhatsApp</label>
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Telegram URL</label>
          <input
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4">
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Waist</label>
          <input type="number" value={waist} onChange={(e) => setWaist(Number(e.target.value))}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Height</label>
          <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Hips</label>
          <input type="number" value={hips} onChange={(e) => setHips(Number(e.target.value))}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Bust</label>
          <input type="number" value={bust} onChange={(e) => setBust(Number(e.target.value))}
            className="p-3 border outline-none rounded-xl bg-black/40 border-white/10 focus:border-red-500" />
        </div>
      </div>

      {/* ✅ Principal */}
      <div className="grid gap-2">
        <label className="text-sm text-neutral-300">
          Imagen principal {mode === "create" ? "(obligatoria)" : "(opcional reemplazar)"}
        </label>

        {mode === "edit" && existingMain && (
          <div className="flex items-center gap-3 p-3 border rounded-xl border-white/10 bg-black/30">
            <img
              src={existingMain}
              className="object-cover w-20 h-20 border rounded-lg border-white/10"
              alt="main"
            />
            <div className="min-w-0">
              <div className="text-sm text-neutral-300">Actual</div>
              <div className="text-xs break-all text-neutral-500">{existingMain}</div>
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setMainImage(e.target.files?.[0] ?? null)}
          className="text-sm"
        />
      </div>

      {/* ✅ Galería existente (edit) */}
      {mode === "edit" && existingImages.length > 0 && (
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Galería actual (marca para eliminar)</label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {existingImages.map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => toggleRemoveImage(u)}
                className={`relative rounded-xl overflow-hidden border ${
                  removeImages[u] ? "border-red-500" : "border-white/10"
                }`}
                title={removeImages[u] ? "Se eliminará" : "Mantener"}
              >
                <img src={u} alt="" className="object-cover w-full h-28" />
                {removeImages[u] && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold bg-red-500/25">
                    Eliminar
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Subir nuevas imágenes */}
      <div className="grid gap-2">
        <label className="text-sm text-neutral-300">Agregar imágenes a galería</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setGalleryImages(Array.from(e.target.files ?? []))}
          className="text-sm"
        />
      </div>

      {/* ✅ Videos existente (edit) */}
      {mode === "edit" && existingVideos.length > 0 && (
        <div className="grid gap-2">
          <label className="text-sm text-neutral-300">Videos actuales (marca para eliminar)</label>
          <div className="grid gap-2">
            {existingVideos.map((u) => (
              <label
                key={u}
                className="flex items-center gap-3 p-3 border rounded-xl border-white/10 bg-black/30"
              >
                <input
                  type="checkbox"
                  checked={!!removeVideos[u]}
                  onChange={() => toggleRemoveVideo(u)}
                />
                <span className="text-xs break-all text-neutral-400">{u}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Subir nuevos videos */}
      <div className="grid gap-2">
        <label className="text-sm text-neutral-300">Agregar videos</label>
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
        onClick={onSubmit}
        className="py-3 mt-2 font-semibold bg-red-600 hover:bg-red-500 rounded-xl disabled:opacity-60"
      >
        {saving ? "Guardando..." : mode === "create" ? "Guardar" : "Actualizar"}
      </button>
    </div>
  );
}
