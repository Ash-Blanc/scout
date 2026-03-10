// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/ui'
    ],

    devtools: {
        enabled: true
    },

    build: {
        transpile: ['reka-ui', '@nuxt/ui']
    },

    vite: {
        resolve: {
            dedupe: ['vue', '@vue/runtime-core']
        },
        ssr: {
            noExternal: ['reka-ui', '@nuxt/ui']
        }
    },

    css: ['~/assets/css/main.css'],

    routeRules: {
        '/': { prerender: true }
    },

    runtimeConfig: {
        public: {
            tinyfishApiKey: process.env.TINYFISH_API_KEY,
            openaiApiKey: process.env.OPENAI_API_KEY
        }
    },

    compatibilityDate: '2025-01-15',

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    }
})
