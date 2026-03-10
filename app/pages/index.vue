<template>
    <div class="flex-grow w-full flex flex-col items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1542224566-6f85f1a15d5f?q=80&w=3200&auto=format&fit=crop"
                alt="Mountain background" class="w-full h-full object-cover opacity-60" />
            <!-- Gradient Overlay for readability -->
            <div class="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950"></div>
        </div>

        <!-- Main Hero Content -->
        <main class="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto -mt-20">
            <!-- Pill -->
            <div
                class="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-zinc-200 text-xs font-semibold tracking-widest uppercase cursor-default hover:bg-white/20 transition-colors">
                <div class="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
                Scout explores the web for you
                <UIcon name="i-lucide-chevron-right" class="w-3 h-3 ml-1" />
            </div>

            <!-- Title -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-zinc-50 tracking-tight"
                style="font-family: 'Playfair Display', serif;">
                The AI that explores the web for you.<br /> Handles any task.
            </h1>

            <!-- Subtitle -->
            <p class="mt-8 text-lg sm:text-xl text-zinc-300 max-w-2xl font-light">
                Your personal web assistant. Tell Scout what you want to do, and it will click, type, and navigate
                through any website.
            </p>

            <!-- CTA Button -->
            <div class="mt-12">
                <UButton to="/app"
                    class="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 py-3.5 text-base font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Try Scout Mode
                </UButton>
            </div>
        </main>

        <!-- Brand Logos Section (Social Proof) -->
        <div class="absolute bottom-24 z-10 w-full px-4 flex justify-center pb-8">
            <div
                class="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div class="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
                    <UIcon name="i-simple-icons-postman" class="w-6 h-6" /> POSTMAN
                </div>
                <div class="flex items-center gap-1 text-2xl font-black italic text-white">
                    <UIcon name="i-simple-icons-riotgames" class="w-6 h-6" /> Rio
                </div>
                <div class="flex items-center gap-2 text-xl font-bold text-white">
                    <UIcon name="i-simple-icons-doordash" class="w-6 h-6 text-red-500" /> DOORDASH
                </div>
                <div class="flex items-center gap-0.5 text-xl font-bold text-white tracking-widest">capital<span
                        class="font-light">com</span></div>
                <div class="flex items-center gap-1.5 text-xl font-bold text-white tracking-tighter"><span
                        class="text-blue-500 text-2xl">A</span> afriex</div>
            </div>
        </div>

        <!-- Footer Bar -->
        <footer
            class="absolute bottom-0 w-full h-16 bg-zinc-950 z-20 flex items-center justify-between px-6 lg:px-12 text-sm border-t border-zinc-800">
            <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950">
                    <UIcon name="i-lucide-sparkles" class="w-4 h-4" />
                </div>
                <span class="font-bold text-white text-xl tracking-tight">Scout</span>
            </div>
            <div class="flex items-center gap-2 text-zinc-400">
                <span class="text-base">curated by</span>
                <span class="font-bold text-white text-base flex items-center gap-1.5">
                    <UIcon name="i-lucide-tent" class="w-5 h-5 text-zinc-100" />
                    The RALPH Team
                </span>
            </div>
        </footer>
    </div>
</template>
