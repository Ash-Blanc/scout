# Scout - Project Context & Guidelines (RALPH Edition)

Scout is an autonomous web assistant built on the **RALPH** (Read-Pick-Implement-Test-Commit) methodology. It leverages the **Agentica SDK** and **TinyFish API** to perform cloud-based web exploration and task execution.

## 🧠 RALPH Framework Integration

Scout adheres to the core principles of the RALPH playbook:
- **Context Efficiency:** Tasks are broken into small, isolated units to maximize reasoning performance.
- **Backpressure:** Every action is validated against "gates" (automated tests and build checks) before completion.
- **Shared State:** `IMPLEMENTATION_PLAN.md` tracks progress and pending work.
- **Loop:** The agent follows the continuous Read -> Pick -> Implement -> Test -> Commit cycle.

## 🏗️ Project Overview

- **Purpose:** Autonomous web exploration and optimization using RALPH principles.
- **Tech Stack:**
  - **Framework:** Nuxt 4 (`app/` structure).
  - **Runtime:** [Bun](https://bun.sh/).
  - **Agentic Core:** [Agentica SDK](https://github.com/wrtnlabs/agentica) + [TinyFish API](https://docs.tinyfish.ai).
  - **UI:** Nuxt UI & Tailwind CSS.

## 🚀 Building and Running

The project is optimized for the **Bun** runtime.

| Action | Command |
| :--- | :--- |
| **Install** | `bun install` |
| **Dev** | `bun dev` |
| **Build** | `bun build` |
| **Lint** | `bun lint` |
| **Type Check** | `bun typecheck` |

## 📁 Key Directories & Files

- `app/`: Application source code.
- `specs/`: Requirement specifications for "Topics of Concern".
- `IMPLEMENTATION_PLAN.md`: The "shared memory" of the project.
- `AGENTS.md`: Operational guide and backpressure commands.
- `PROMPT.md`: Core behavioral instructions for the AI agent.

## 🛠️ Development Conventions

### RALPH Loop Workflow
1. **Define** requirements in `specs/`.
2. **Plan** the implementation in `IMPLEMENTATION_PLAN.md`.
3. **Build** using the Read-Pick-Implement-Test-Commit loop.
4. **Validate** via Backpressure (linting, typechecking, tests).

### Aesthetics
- **Theme:** Premium Dark Mode (`zinc-950`).
- **Accent:** Fuchsia/Pink gradients representing agentic flow.
- **Transitions:** Smooth micro-animations for loop state visualization.
