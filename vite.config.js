import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [handlebars({partialDirectory: resolve(__dirname, 'partials')})],
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