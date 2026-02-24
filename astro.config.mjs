// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    experimental: {
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
        },
        {
            provider: fontProviders.google(),
            name: 'Geist Mono',
            cssVariable: '--font-body-mono',
            weights: ['100', '200','300', '400', '500', '600', '700']
        }
    ],
    }
});
