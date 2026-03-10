<script setup>
useHead({
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap' }
    ],
    htmlAttrs: {
        lang: 'en'
    }
})

const title = 'Scout - Your Web Assistant'
const description = 'Scout clicks, types, and explores the web so you don\'t have to. Just say what you want done.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
})

const route = useRoute()
const isLandingPage = computed(() => route.path === '/')
</script>

<template>
    <UApp>
        <div class="flex flex-col min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-violet-500/30">
            <UHeader
                :class="['transition-colors duration-300 z-50 sticky top-0', isLandingPage ? 'bg-transparent border-transparent' : 'border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md']"
                :ui="{ wrapper: 'max-w-none px-4 sm:px-6 lg:px-8' }">
                <template #left>
                    <div class="flex items-center gap-8">
                        <NuxtLink to="/" class="flex items-center gap-2 group">
                            <div
                                class="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(232,121,249,0.5)] group-hover:shadow-[0_0_25px_rgba(232,121,249,0.6)] transition-all duration-300">
                                <UIcon name="i-lucide-sparkles" class="w-5 h-5 text-white" />
                            </div>
                            <span
                                class="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">Scout</span>
                        </NuxtLink>
                        <nav class="hidden md:flex items-center gap-6 text-sm text-zinc-400">
                            <NuxtLink to="/" class="hover:text-zinc-100 transition-colors">Overview</NuxtLink>
                            <NuxtLink to="/#how-it-works" class="hover:text-zinc-100 transition-colors">How it works
                            </NuxtLink>
                        </nav>
                    </div>
                </template>

                <template #right>
                    <UButton to="/app" color="neutral" variant="outline"
                        class="hidden sm:inline-flex rounded-full px-4">
                        Try Scout Mode
                    </UButton>
                    <UColorModeButton />
                    <UButton to="https://github.com/ghuntley/ralph" target="_blank" icon="i-simple-icons-github"
                        aria-label="GitHub" color="neutral" variant="ghost" />
                </template>
            </UHeader>

            <UMain :class="['relative', { 'flex-grow flex flex-col': isLandingPage }]">
                <div
                    class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/10 via-zinc-950 to-zinc-950 pointer-events-none -z-10">
                </div>
                <NuxtPage />
            </UMain>

            <UFooter v-if="!isLandingPage" class="border-t border-zinc-800/50 bg-zinc-950">
                <template #left>
                    <p class="text-sm text-zinc-500">
                        Scout by The RALPH Team • © {{ new Date().getFullYear() }}
                    </p>
                </template>
            </UFooter>
        </div>
    </UApp>
</template>
