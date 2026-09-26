# Decisions

Use this file for significant architecture decisions only. Keep entries short. Course artifacts are maintained separately unless the team decides otherwise.

## ADR-001: Use `main` and `dev` Branches

Date: 2026-09-25
Status: accepted

Context:
The team needs multiple humans and coding agents to work safely in parallel without destabilizing the instructor-facing branch.

Decision:
Keep `main` stable and use `dev` as the integration branch. Feature/documentation branches should merge into `dev` first. Promote `dev` to `main` only when the integrated state is demo-ready.

Alternatives:
Commit directly to `main`; use only feature branches without a shared integration branch.

Consequences:
This adds a small amount of branch management overhead, but gives the team a stable branch and a place to integrate work before demos.

## ADR-002: Treat Blockchain State as Authoritative

Date: 2026-09-25
Status: planned

Context:
AC_ON is a testnet-only decentralized esports prediction market. PostgreSQL is useful for fast application queries, but should not override contract state.

Decision:
Contract state should be authoritative for market lifecycle, trades, shares, disputes, settlement, and payouts. PostgreSQL should store derived/indexed state only.

Alternatives:
Let the backend database own market state.

Consequences:
Frontend/backend code must be designed around contract reads, writes, and events. The indexer can improve UX, but must not become the source of truth.

## ADR-003: Use Agent Docs for Coordination, Not Official Submission Artifacts

Date: 2026-09-25
Status: accepted

Context:
The course requires formal milestone artifacts, but the repository also needs lightweight coordination docs for agents.

Decision:
Store coordination docs in `docs/agent/`. Treat course artifacts as separate team deliverables unless the team explicitly decides to store them in the repo.

Alternatives:
Put all course artifacts directly into this folder.

Consequences:
The docs stay practical for development, while the team remains free to prepare polished submissions separately.
