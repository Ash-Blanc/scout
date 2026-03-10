# RALPH Operational Guidelines

RALPH (Read-Pick-Implement-Test-Commit) is an autonomous coding methodology designed to keep AI agents in their "smart zone" through context efficiency and automated backpressure.

## 🧠 Core Principles

- **Context Efficiency:** Keep sub-tasks small. Aim for 40-60% context utilization.
- **Backpressure:** Automated gates (tests, lint, build) must pass before a task is considered complete. If they fail, self-correct until resolved.
- **Autonomous Action:** The agent identifies, corrects, and improves code without human intervention during the build phase.
- **Shared State:** `IMPLEMENTATION_PLAN.md` is the source of truth for progress and pending tasks.

## 🔄 The RALPH Loop

1. **Read Plan:** Review `IMPLEMENTATION_PLAN.md` and `specs/`.
2. **Pick Task:** Select the highest priority task from the plan.
3. **Implement:** Execute the code changes using the `PROMPT.md` instructions.
4. **Test (Backpressure):** Run `bun lint`, `bun typecheck`, and any project tests.
5. **Commit:** Once backpressure is cleared, commit the changes with a concise message.
6. **Repeat:** Update the plan and start the next iteration.

## 🛠️ Project Commands (Backpressure)

| Action | Command |
| :--- | :--- |
| **Install** | `bun install` |
| **Dev** | `bun dev` |
| **Build** | `bun build` |
| **Lint** | `bun lint` |
| **Type Check** | `bun typecheck` |

## 📁 Repository Structure

- `app/`: Nuxt application source.
- `specs/`: Requirement files defining "Topics of Concern".
- `IMPLEMENTATION_PLAN.md`: The prioritized task list and shared memory.
- `AGENTS.md`: This file (operational guide).
- `PROMPT.md`: Behavioral instructions for the agent.
