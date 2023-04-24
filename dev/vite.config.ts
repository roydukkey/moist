import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import type { UserConfig } from 'vite';

const basePath = dirname(fileURLToPath(import.meta.url));
const envDir = resolve(basePath, '../');

/**
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig(({ mode }) => {
    const { PORT, EXPOSED_PREFIX } = loadEnv(mode, envDir, '');

    const config: UserConfig = {
        envDir,
        envPrefix: EXPOSED_PREFIX,
        server: {
            port: Number(PORT),
        },
        preview: {
            port: Number(PORT),
        },
        plugins: [
            vue(),
        ],
        resolve: {
            dedupe: [
                'vue',
            ],
        },
    };

    return config;
});
