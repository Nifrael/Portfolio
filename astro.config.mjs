// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stylesPath = path.resolve(__dirname, "src/styles");

// https://astro.build/config
export default defineConfig({
  // TODO: remplacer par l'URL de production réelle avant le déploiement
  site: "https://www.nifradev.fr",
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        "@scripts": new URL("./src/scripts", import.meta.url).pathname,
        "@styles": stylesPath,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          importers: [
            {
              findFileUrl(url) {
                if (url.startsWith("@styles/")) {
                  const resolved = url.replace("@styles/", "");
                  return new URL(
                    `file://${path.resolve(stylesPath, resolved)}`,
                  );
                }
                return null;
              },
            },
          ],
        },
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--font-title",
      weights: ["700"],
    },
    {
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-body",
      weights: ["200", "400", "500", "700"],
    },
  ],
});
