<script setup lang="ts">
import { ref } from 'vue'

const platformUrl = ref('')
const objective = ref('')
const isScouting = ref(false)

const emit = defineEmits(['startMission'])

const prepareLaunch = () => {
    if (!platformUrl.value || !objective.value) return

    isScouting.value = true

    // Simulate a brief connection sequence before emitting the real start
    setTimeout(() => {
        emit('startMission', {
            url: platformUrl.value,
            goal: objective.value
        })
        isScouting.value = false
    }, 1500)
}
</script>

<template>
    <UCard
        class="w-full max-w-3xl mx-auto bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800 shadow-2xl relative overflow-hidden group rounded-3xl"
        :ui="{ body: { padding: 'p-8' } }">

        <template #header>
            <div class="flex items-center gap-3 px-2 pt-2">
                <div
                    class="p-2.5 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 shadow-[0_0_15px_rgba(232,121,249,0.2)]">
                    <UIcon name="i-lucide-sparkles" class="w-6 h-6" />
                </div>
                <h2 class="text-2xl font-semibold text-zinc-100 tracking-tight">Tell Scout what to do</h2>
            </div>
        </template>

        <form @submit.prevent="prepareLaunch" class="space-y-6 relative z-10 px-2 pb-2">
            <UFormGroup name="platformUrl">
                <template #label>
                    <span class="text-zinc-300 font-medium text-base">Where should Scout go?</span>
                </template>
                <UInput v-model="platformUrl" placeholder="e.g. https://www.amazon.com" icon="i-lucide-link" size="xl"
                    :ui="{ wrapper: 'shadow-sm', color: { white: { outline: 'ring-1 ring-zinc-700 focus:ring-fuchsia-500 bg-zinc-950/50 text-white placeholder-zinc-500' } } }"
                    autocomplete="off" class="mt-2" />
            </UFormGroup>

            <UFormGroup name="objective">
                <template #label>
                    <span class="text-zinc-300 font-medium text-base">What's the goal?</span>
                </template>
                <UTextarea v-model="objective"
                    placeholder="e.g. 'Find the top 3 highly-rated standing desks under $300'" :rows="3" size="xl"
                    autoresize
                    :ui="{ wrapper: 'shadow-sm', color: { white: { outline: 'ring-1 ring-zinc-700 focus:ring-fuchsia-500 bg-zinc-950/50 text-white placeholder-zinc-500' } } }"
                    class="mt-2" />
            </UFormGroup>

            <div class="pt-6 flex justify-end items-center gap-4">
                <span v-if="isScouting" class="text-sm text-fuchsia-400 animate-pulse font-medium">
                    Waking up Scout...
                </span>
                <UButton type="submit" size="xl" :loading="isScouting" :disabled="!platformUrl || !objective"
                    class="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(232,121,249,0.2)] hover:shadow-[0_0_30px_rgba(232,121,249,0.4)] rounded-full px-10">
                    {{ isScouting ? 'Starting...' : 'Go, Scout, Go!' }}
                    <UIcon v-if="!isScouting" name="i-lucide-arrow-right" class="w-5 h-5 ml-2" />
                </UButton>
            </div>
        </form>
    </UCard>
</template>
