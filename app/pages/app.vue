<script setup lang="ts">
const { mission, isScouting, isReporting, startMission, resetMission } = useScout()

const handleStartMission = (missionData: { url: string, goal: string }) => {
    startMission(missionData.url, missionData.goal)
}
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 h-full min-h-[calc(100vh-140px)] flex flex-col">
        <!-- Header -->
        <div v-if="mission.status === 'idle'" class="mb-12">
            <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                    <p class="text-xs uppercase font-bold tracking-[0.3em] text-fuchsia-500">Your Web Assistant</p>
                    <h1 class="text-3xl md:text-5xl font-semibold text-zinc-100 mt-3 tracking-tight">
                        What can Scout do for you today?
                    </h1>
                    <p class="text-zinc-400 mt-3 max-w-2xl text-lg">
                        Just drop a link and tell Scout what to look for. No need to click around yourself.
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div v-if="mission.status === 'idle'" class="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <MissionForm @start-mission="handleStartMission" />

            <div class="mt-20 grid lg:grid-cols-3 gap-6">
                <UCard
                    class="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm hover:border-fuchsia-500/30 transition-colors cursor-default"
                    :ui="{ body: { padding: 'p-6' } }">
                    <div
                        class="w-12 h-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-4 text-fuchsia-400 border border-fuchsia-500/20">
                        <UIcon name="i-lucide-plane-takeoff" class="w-6 h-6" />
                    </div>
                    <h3 class="text-lg font-semibold text-zinc-100 mb-2">"Find the cheapest flights"</h3>
                    <p class="text-sm text-zinc-400 leading-relaxed">Give Scout a travel site and your dates. It'll hunt
                        down the best options across multiple pages.</p>
                </UCard>

                <UCard
                    class="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm hover:border-sky-500/30 transition-colors cursor-default"
                    :ui="{ body: { padding: 'p-6' } }">
                    <div
                        class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 text-sky-400 border border-sky-500/20">
                        <UIcon name="i-lucide-file-text" class="w-6 h-6" />
                    </div>
                    <h3 class="text-lg font-semibold text-zinc-100 mb-2">"Summarize this article"</h3>
                    <p class="text-sm text-zinc-400 leading-relaxed">Too long to read? Scout reads it for you and pulls
                        out the key takeaways instantly.</p>
                </UCard>

                <UCard
                    class="bg-zinc-900/30 border-zinc-800/50 backdrop-blur-sm hover:border-pink-500/30 transition-colors cursor-default"
                    :ui="{ body: { padding: 'p-6' } }">
                    <div
                        class="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400 border border-pink-500/20">
                        <UIcon name="i-lucide-shopping-bag" class="w-6 h-6" />
                    </div>
                    <h3 class="text-lg font-semibold text-zinc-100 mb-2">"Compare these products"</h3>
                    <p class="text-sm text-zinc-400 leading-relaxed">Drop a category link and let Scout build a
                        comparison table of specs and prices.</p>
                </UCard>
            </div>
        </div>

        <!-- Active App State -->
        <div v-else-if="mission.status === 'scouting'"
            class="animate-in zoom-in-95 fade-in duration-500 flex-1 w-full max-w-3xl mx-auto flex items-center justify-center">
            <LiveScouting :mission="mission" />
        </div>

        <!-- App Report State -->
        <div v-else-if="mission.status === 'reporting'" class="flex-1 w-full">
            <MissionReport :mission="mission" @reset-mission="resetMission" />
        </div>
    </div>
</template>
