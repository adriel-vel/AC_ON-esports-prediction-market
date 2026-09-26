# AC_ON Agent Coordination

This folder is shared working context for coding agents and human developers. It is not the official course artifact bundle unless the team explicitly decides to reuse parts of it.

All agents should read this folder before making significant changes. After meaningful changes, update the relevant docs so the next person or agent does not have to rediscover the same state.

## File Guide

- `PROJECT_STATUS.md`: current implementation state only.
- `ARCHITECTURE.md`: current repo architecture, with implemented/scaffolded/planned labels.
- `INTERFACES.md`: boundaries between frontend, contracts, backend, oracle, indexer, and database.
- `TASKS.md`: cross-milestone coordination list.
- `KNOWN_ISSUES.md`: blockers, mismatches, mocks, temporary behavior, and technical debt.
- `SETUP.md`: commands that currently work.
- `DECISIONS.md`: lightweight decision log for significant architecture choices.
- `milestones/`: milestone-specific scope so agents work on the correct slice.

## Agent Workflow

1. Read `docs/agent/README.md`.
2. Read `PROJECT_STATUS.md`.
3. Read `ARCHITECTURE.md`.
4. Read `INTERFACES.md`.
5. Check `TASKS.md`.
6. Check the active milestone file in `milestones/`.
7. Inspect the relevant code before editing.
8. Make scoped changes on a branch.
9. Run applicable tests or document why they could not run.
10. Update documentation after meaningful changes.
11. Record architecture decisions in `DECISIONS.md` when applicable.

## Branch Workflow

The team should keep `main` stable and use `dev` as the integration branch.

- `main`: stable branch for instructor-facing snapshots, releases, and known-good demos.
- `dev`: shared integration branch for completed work before promotion to `main`.
- feature branches: short-lived branches for each scoped task.

Recommended flow:

1. Start from the latest `dev`.
2. Create a branch with a clear name, for example `feature/frontend-contract-read`, `backend/api-scaffold`, or `docs/milestone-2-plan`.
3. Keep the branch focused on one subsystem or task.
4. Run relevant checks before opening a pull request.
5. Merge into `dev` first.
6. Promote `dev` to `main` only after the integrated app is in a demo-ready state.

Agents should not commit directly to `main`. Agents should avoid direct commits to `dev` unless the team explicitly asks for that. If a change touches multiple subsystems, document the interface impact in `INTERFACES.md`.

## Course Artifacts

Course artifacts such as presentation slides, formal design documents, UML diagrams, written reports, and final submission materials are separate team deliverables. These agent docs can inform those artifacts, but they should not replace them unless the team chooses to store official artifacts in the repository.
