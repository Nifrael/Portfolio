// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stylesPath = path.resolve(__dirname, 'src/styles');

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@scripts': new URL('./src/scripts', import.meta.url).pathname,
                '@styles': stylesPath,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    importers: [{
                        findFileUrl(url) {
                            if (url.startsWith('@styles/')) {
                                const resolved = url.replace('@styles/', '');
                                return new URL(`file://${path.resolve(stylesPath, resolved)}`);
                            }
                            return null;
                        },
                    }],
                },
            },
        },
    },
    fonts: [{
            provider: fontProviders.google(),
            name: 'Space Grotesk',
            cssVariable: '--font-title',
            weights: ['300', '400', '500', '600', '700']
        },
        {
            provider: fontProviders.google(),
            name: 'Geist',
            cssVariable: '--font-body',
            weights: ['100', '200','300', '400', '500', '600', '700']
        }
    ],
});
