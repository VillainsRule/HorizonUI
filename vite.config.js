import * as vite from 'vite';
import react from '@vitejs/plugin-react';

export default vite.defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            'assets': '/src/assets/',
            'components': '/src/components/',
            'layouts': '/src/layouts/',
            'variables': '/src/variables/',
            'views': '/src/views/'
        }
    },

    server: {
        port: 5175
    },

    css: {
        modules: {
            scopeBehaviour: 'local',
            generateScopedName: '[hash:8]'
        }
    },

    build: {
        target: 'es2022',
        outDir: './dist',
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) return 'vendor';
                    else return 'main';
                },
                chunkFileNames: '[hash].js',
                entryFileNames: '[hash].js',
                assetFileNames: '[hash].[ext]'
            }
        },
        chunkSizeWarningLimit: 1000,
        manifest: true
    }
});
