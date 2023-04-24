import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const basePath = dirname(fileURLToPath(import.meta.url));

/**
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig(() => ({
    build: {
        lib: {
            entry: [
                resolve(basePath, './src/main.ts'),
                resolve(basePath, './src/components/CustomText.vue'),
            ],
            name: 'MyLib',
        },
        rollupOptions: {
            external: [
                'vue',
            ],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
    ]
}));
