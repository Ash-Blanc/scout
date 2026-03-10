# Scout 

Scout is an autonomous agentic web application designed to automatically explore, learn, and optimize workflows on newly encountered platforms. Built using the **RALPH** methodology (Read-Pick-Implement-Test-Commit) and powered by **Agentica SDK** and **TinyFish API**.

## 🧠 RALPH Framework Integration

Scout adheres to the core principles of the RALPH playbook:
- **Context Efficiency:** Tasks are broken into small, isolated units to maximize reasoning performance.
- **Backpressure:** Every action is validated against "gates" (automated tests and build checks) before completion.
- **Shared State:** `IMPLEMENTATION_PLAN.md` tracks progress and pending work.
- **Loop:** The agent follows the continuous Read -> Pick -> Implement -> Test -> Commit cycle.

## 🏗️ Tech Stack

- **Framework:** Nuxt 4 (`app/` structure).
- **Runtime:** [Bun](https://bun.sh/).
- **Agentic Core:** [Agentica SDK](https://github.com/wrtnlabs/agentica) + [TinyFish API](https://docs.tinyfish.ai).
- **UI:** Nuxt UI & Tailwind CSS.

## 🚀 Getting Started

### 1. Environment Variables

Copy the `.env.example` to `.env` and fill in your API keys:

```bash
cp .env.example .env
```

You will need:
- `TINYFISH_API_KEY`: Get this from your TinyFish dashboard.
- `OPENAI_API_KEY`: Get this from OpenAI.

### 2. Setup

Make sure to install the dependencies using Bun:

```bash
bun install
```

### 3. Development Server

Start the development server on `http://localhost:3000`:

```bash
bun dev
```

### 4. Production

Build the application for production:

```bash
bun build
```

Locally preview production build:

```bash
bun preview
```

## 📁 Repository Structure

- `app/`: Nuxt application source.
- `specs/`: Requirement files defining "Topics of Concern".
- `IMPLEMENTATION_PLAN.md`: The prioritized task list and shared memory.
- `AGENTS.md`: Operational guide.
- `PROMPT.md`: Behavioral instructions for the agent.
