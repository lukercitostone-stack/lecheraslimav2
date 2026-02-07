// src/lib/upload.ts
export type UploadResult = {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  bytes?: number;
  resourceType?: "image" | "video" | string;
};

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string;

export async function uploadToStorage(
  file: File,
  opts?: { folder?: string; resourceType?: "image" | "video" }
): Promise<UploadResult> {
  if (!CLOUD_NAME) throw new Error("MISSING_CLOUD_NAME");
  if (!UPLOAD_PRESET) throw new Error("MISSING_UPLOAD_PRESET");

  const isVideo = file.type.startsWith("video/");
  const resourceType = opts?.resourceType ?? (isVideo ? "video" : "image");

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`;

  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", UPLOAD_PRESET);

  // opcional (si tu preset permite folder)
  if (opts?.folder) form.append("folder", opts.folder);

  const res = await fetch(endpoint, { method: "POST", body: form });
  const data = await res.json();

  if (!res.ok) {
    const msg = data?.error?.message ?? "UPLOAD_FAILED";
    throw new Error(msg);
  }

  return {
    url: data.secure_url as string,
    publicId: data.public_id as string,
    width: data.width,
    height: data.height,
    bytes: data.bytes,
    resourceType: data.resource_type,
  };
}
