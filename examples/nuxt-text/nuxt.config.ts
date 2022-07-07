import { defineNuxtConfig } from 'nuxt'
import { xiServerPlugin, XiServer } from 'vite-plugin-11th-server';
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        plugins: [
            xiServerPlugin({
                server: (app: XiServer) => {
                    app.router('/api', (req, res) => {
                        res.send(req.body);
                    });
                },
                port: 8088,
                outDir: path.resolve(__dirname, "dist")
            })
        ]
    }

})
