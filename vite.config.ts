import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        enfermerasADomicilio: resolve(
          __dirname,
          "enfermeras-a-domicilio-lima/index.html",
        ),
        enfermeras24Horas: resolve(
          __dirname,
          "enfermeras-24-horas-lima/index.html",
        ),
        enfermerasPorHoras: resolve(
          __dirname,
          "enfermeras-por-horas-lima/index.html",
        ),
        enfermerasOnline: resolve(
          __dirname,
          "enfermeras-online-lima/index.html",
        ),
        viaEndovenosa: resolve(__dirname, "via-endovenosa/index.html"),
        inyectables: resolve(
          __dirname,
          "inyectables-a-domicilio/index.html",
        ),
        cuidadosPostoperatorios: resolve(
          __dirname,
          "cuidados-postoperatorios-a-domicilio/index.html",
        ),
        contacto: resolve(__dirname, "contacto/index.html"),
        nosotros: resolve(__dirname, "nosotros/index.html"),
        cuidadoAdultoMayor: resolve(
          __dirname,
          "cuidado-al-adulto-mayor/index.html",
        ),
        serviciosLegacy: resolve(__dirname, "servicios-2/index.html"),
        blogCuidados: resolve(
          __dirname,
          "blog/cuidados-de-enfermeria-a-domicilio/index.html",
        ),
      },
    },
  },
});
