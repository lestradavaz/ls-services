// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        build: {
            // Asegurar que los chunks se procesen correctamente
            chunkSizeWarningLimit: 1000,
            // Evitar problemas de importación
            rollupOptions: {
                output: {
                    manualChunks: {
                        // Agrupar las dependencias de terceros
                        vendor: ['lenis', 'gsap', 'motion']
                    }
                }
            }
        },
        // Resolver correctamente los paths en build
        resolve: {
            alias: {
                '~/': '/src/'
            }
        }
    },
    // Mejorar la optimización de assets
    build: {
        inlineStylesheets: 'auto'
    }
});
