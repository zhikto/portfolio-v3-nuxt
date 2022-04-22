import { defineNuxtConfig } from 'nuxt'
const { BASE_URL, API_KEY } = process.env;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        baseURL: BASE_URL,
        apiKey: API_KEY,
    },

    head: {
        script: [
            {
                src:"//typesquare.com/3/tsst/script/ja/typesquare.js?5fec60fb4f244dcbbb4b7f24ac1e02e5"
            }
        ]
    },

    target: 'static',
})
