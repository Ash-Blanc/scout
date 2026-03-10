<script setup lang="ts">
import type { Mission } from '~/types/mission'

defineProps<{
    mission: Mission
}>()
</script>

<template>
    <div class="w-full max-w-2xl">
        <!-- Status Header -->
        <div class="text-center mb-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                </span>
                Active Scouting
            </div>
            <h2 class="text-2xl font-semibold text-zinc-100 mb-2">Scout is exploring {{ mission.url }}</h2>
            <p class="text-zinc-400">Goal: "{{ mission.goal }}"</p>
        </div>

        <!-- Iterations List -->
        <div class="space-y-4">
            <TransitionGroup 
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="transform -translate-y-4 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
            >
                <UCard 
                    v-for="step in mission.steps" 
                    :key="step.id"
                    class="bg-zinc-900/40 border-zinc-800 backdrop-blur-md"
                    :ui="{ body: { padding: 'p-5' } }"
                >
                    <div class="flex items-start gap-4">
                        <div class="mt-1">
                            <UIcon 
                                :name="step.status === 'running' ? 'i-lucide-loader-2' : 'i-lucide-check-circle-2'" 
                                :class="['w-5 h-5', step.status === 'running' ? 'animate-spin text-fuchsia-500' : 'text-emerald-500']" 
                            />
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center justify-between mb-1">
                                <h4 class="text-sm font-bold text-zinc-200 uppercase tracking-wider">RALPH Loop Stage</h4>
                                <span class="text-[10px] text-zinc-500 font-mono">{{ new Date(step.timestamp).toLocaleTimeString() }}</span>
                            </div>
                            <p class="text-zinc-100 font-medium mb-2">{{ step.strategy }}</p>
                            
                            <div class="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800/50">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold text-zinc-500 uppercase">Action</span>
                                    <div class="h-[1px] flex-1 bg-zinc-800/50"></div>
                                </div>
                                <p class="text-xs text-zinc-400 italic mb-3">{{ step.action }}</p>
                                
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold text-zinc-500 uppercase">Outcome</span>
                                    <div class="h-[1px] flex-1 bg-zinc-800/50"></div>
                                </div>
                                <p :class="['text-xs font-medium', step.status === 'running' ? 'text-zinc-500 animate-pulse' : 'text-fuchsia-400']">
                                    {{ step.outcome }}
                                </p>
                            </div>
                        </div>
                    </div>
                </UCard>
            </TransitionGroup>
        </div>

        <!-- Progress Indicator -->
        <div class="mt-8 flex flex-col items-center">
            <div class="w-full bg-zinc-900 rounded-full h-1.5 mb-2 overflow-hidden">
                <div class="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full animate-progress-indeterminate"></div>
            </div>
            <p class="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Heuristic analysis in progress...</p>
        </div>
    </div>
</template>

<style scoped>
@keyframes progress-indeterminate {
    0% { transform: translateX(-100%); width: 30%; }
    50% { transform: translateX(100%); width: 50%; }
    100% { transform: translateX(200%); width: 30%; }
}
.animate-progress-indeterminate {
    animation: progress-indeterminate 2s infinite linear;
}
</style>
