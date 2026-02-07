type UploadResult = {
  secureUrl: string;
  publicId: string;
  resourceType: "image" | "video";
};

function getEnv() {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string;

  if (!cloudName || !uploadPreset) throw new Error("CLOUDINARY_ENV_MISSING");
  return { cloudName, uploadPreset };
}

async function upload(file: File, resourceType: "image" | "video"): Promise<UploadResult> {
  const { cloudName, uploadPreset } = getEnv();

  // endpoint cambia según resource_type
  const endpoint =
    resourceType === "video"
      ? `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
      : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", uploadPreset);
  form.append("folder", "listings"); // opcional si tu preset no lo fija

  const res = await fetch(endpoint, { method: "POST", body: form });
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    console.error("Cloudinary upload error:", t);
    throw new Error("UPLOAD_FAILED");
  }

  const data = await res.json();
  return {
    secureUrl: data.secure_url as string,
    publicId: data.public_id as string,
    resourceType,
  };
}

export function uploadImage(file: File) {
  return upload(file, "image");
}

export function uploadVideo(file: File) {
  return upload(file, "video");
}
