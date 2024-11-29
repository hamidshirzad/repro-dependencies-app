// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4
    },
    modules: ['@nuxt/eslint'],
    eslint: {
        checker: true,
        config: {
            nuxt: {
                sortConfigKeys: true,
            },
        },
    },
    extends: [
        ['gh:mrleblanc101/repro-dependencies-layer', { install: true }]
    ]
})
