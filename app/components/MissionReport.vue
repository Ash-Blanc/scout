<script setup lang="ts">
import type { Mission } from '~/types/mission'

defineProps<{
    mission: Mission
}>()

defineEmits(['resetMission'])
</script>

<template>
    <div class="max-w-4xl mx-auto py-8">
        <div class="flex items-center justify-between mb-12">
            <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Mission Complete
                </div>
                <h1 class="text-4xl font-bold text-zinc-100 tracking-tight">Mission Report</h1>
                <p class="text-zinc-400 mt-2">Target: {{ mission.url }}</p>
            </div>
            <UButton 
                variant="ghost" 
                color="neutral" 
                icon="i-lucide-rotate-ccw" 
                @click="$emit('resetMission')"
                class="hover:bg-zinc-800"
            >
                New Mission
            </UButton>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
            <!-- Left: Final Report -->
            <div class="lg:col-span-2 space-y-8">
                <UCard 
                    class="bg-zinc-900/60 border-zinc-800 backdrop-blur-xl shadow-2xl overflow-hidden"
                    :ui="{ body: { padding: 'p-8' } }"
                >
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                            <UIcon name="i-lucide-scroll-text" class="w-5 h-5" />
                        </div>
                        <h2 class="text-xl font-bold text-zinc-100 uppercase tracking-wide">Optimized Workflow</h2>
                    </div>

                    <p class="text-lg text-zinc-200 leading-relaxed mb-8">
                        {{ mission.finalReport }}
                    </p>

                    <div class="space-y-4">
                        <div class="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 group hover:border-fuchsia-500/30 transition-colors">
                            <div class="flex items-center gap-3 mb-2">
                                <UIcon name="i-lucide-lightbulb" class="w-4 h-4 text-fuchsia-400" />
                                <span class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Key Learning #1</span>
                            </div>
                            <p class="text-sm text-zinc-300">The platform prioritizes dynamic content loading. Initial DOM scans should wait for hydrated components.</p>
                        </div>
                        <div class="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 group hover:border-sky-500/30 transition-colors">
                            <div class="flex items-center gap-3 mb-2">
                                <UIcon name="i-lucide-zap" class="w-4 h-4 text-sky-400" />
                                <span class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Key Learning #2</span>
                            </div>
                            <p class="text-sm text-zinc-300">Semantic search is more effective than keyword matching for this specific goal.</p>
                        </div>
                    </div>
                </UCard>

                <div class="flex justify-between items-center px-4">
                    <h3 class="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em]">Iteration History</h3>
                    <span class="text-xs text-zinc-600 font-mono">{{ mission.steps.length }} iterations performed</span>
                </div>

                <div class="space-y-4 opacity-70">
                    <div v-for="step in mission.steps" :key="step.id" class="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex items-start gap-4">
                        <UIcon name="i-lucide-check-circle-2" class="w-4 h-4 text-emerald-500 mt-1" />
                        <div>
                            <p class="text-sm text-zinc-300 font-medium mb-1">{{ step.strategy }}</p>
                            <p class="text-xs text-zinc-500 italic">{{ step.outcome }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Meta Info -->
            <div class="space-y-6">
                <UCard class="bg-zinc-900/40 border-zinc-800" :ui="{ body: { padding: 'p-6' } }">
                    <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Mission Stats</h4>
                    <div class="space-y-4">
                        <div class="flex justify-between">
                            <span class="text-sm text-zinc-400">Total Time</span>
                            <span class="text-sm text-zinc-100 font-mono">12.4s</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-zinc-400">Success Rate</span>
                            <span class="text-sm text-emerald-400 font-mono">98.2%</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-sm text-zinc-400">Tokens Optimized</span>
                            <span class="text-sm text-fuchsia-400 font-mono">2,450</span>
                        </div>
                    </div>
                </UCard>

                <UCard class="bg-gradient-to-br from-fuchsia-600/10 to-pink-600/10 border-fuchsia-500/20" :ui="{ body: { padding: 'p-6' } }">
                    <h4 class="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-4">Action Required</h4>
                    <p class="text-sm text-zinc-300 mb-6 leading-relaxed">
                        Ready to deploy this workflow? You can now export these steps directly to your automation suite.
                    </p>
                    <UButton block color="fuchsia" class="rounded-full shadow-lg shadow-fuchsia-500/20">
                        Export Instructions
                    </UButton>
                </UCard>
            </div>
        </div>
    </div>
</template>
