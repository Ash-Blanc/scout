# Scout App - Project Plan

## Overview
Scout is an agentic web application designed to automatically explore, learn, and optimize workflows on newly encountered platforms (e.g., NotebookLM) on behalf of a human user. By having an AI agent iteratively test different approaches in a "RALPH loop" (Reinforced Agent Learning Platform Heuristics), Scout discovers the most effective way to attain a specific user goal. This saves the user significant time, learning curve friction, and API platform quotas by doing the trial-and-error upfront.

## Core Features
1. **Mission Control (Input Phase)**
   - Beautiful, engaging form to input the **Platform Name/URL** and the **User's Goal** (e.g., "Help me organize notes for exams").
2. **Active Scouting UI (The RALPH Loop)**
   - Real-time visualization of the agent exploring the platform.
   - Distinct iterations shown sequentially. For each loop iteration, the user can see what the agent naturally tried, the prompt it used, and the success metric/outcome.
3. **Mission Report & Recordings (Results Phase)**
   - The final, optimized "winning" workflow or prompt instructions for the human user to utilize.
   - Text or video recordings of the agent's exploratory iterations, available for the user to review "for fun/learning".

## Tech Stack & Aesthetics
- **Framework:** Nuxt 3
- **Styling:** NuxtUI (Tailwind CSS, Headless UI, Vueuse).
- **Aesthetics Strategy:**
  - **Premium Dark Mode Focus**: Since it's an advanced AI tool, a sleek dark mode with vibrant neon accent gradients (e.g., purple/cyan to represent AI) is preferred.
  - **Glassmorphism**: Panels and overlays will feature backdrop blurring.
  - **Micro-animations**: Smooth transitions when agent iterations populate during the RALPH loop, maintaining a highly dynamic and alive interface.

---

## Implementation Plan

### Phase 1: Foundation & Application Layout
- **Goal:** Set up the basic global styles, Nuxt app configuration, and the overarching responsive layout.
- **Tasks:**
  - Configure `nuxt.config.ts`, ensuring Color Mode is enabled and tailored styling is integrated.
  - Clean up `app.vue` and create `layouts/default.vue` containing an AI-themed Navbar and minimal footer.

### Phase 2: Mission Control (Landing Page)
- **Goal:** Allow the user to launch new scouting missions seamlessly.
- **Tasks:**
  - Build `pages/index.vue` with a dramatic, animated hero section.
  - Develop the `MissionForm` component to collect the target and objective efficiently.

### Phase 3: The RALPH Loop Visulization (Active Execution)
- **Goal:** Show the agent working through iterations to build trust and show value.
- **Tasks:**
  - Create the UI showing active iterations: `Iteration Card` showing "Strategy", "Execution Steps", and "Outcome/Score".
  - Implement a mocked backend service or polling mechanism to simulate the agent firing off loop tasks and gathering insights over time.

### Phase 4: Mission Report & Playback
- **Goal:** Provide the optimized solution to the user, along with the detailed history.
- **Tasks:**
  - Develop the `FinalStrategy` component highlighting the exact steps or prompts the user should use on the platform.
  - Provide an "Expand Log" component to review the individual recordings and learnings from the testing phase.
