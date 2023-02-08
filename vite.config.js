import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/vanilla-template/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages/about.html'),
            },
        },
    },
})