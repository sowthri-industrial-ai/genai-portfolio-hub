# Runbook · GenAI Portfolio Hub

*§§ 10-12 · Portfolio Control Plane (Brief D)*

---

## § 10 · Portfolio Control Plane

The PCP is an Astro 5 static site deployed to `https://sowthri-industrial-ai.github.io` via GitHub Pages. Built from the `genai-portfolio-hub` repo.

### § 10.1 · Structure

```
control-plane/
├── src/
│   ├── pages/                   8 zones · index · projects · architecture
│   │                            · ledger · about · tco · charter · review
│   ├── components/              LiveStatusBadge · ProjectCard · DriftIndicator
│   ├── layouts/Base.astro       Editorial layout · Fraunces serif · paper-cream
│   ├── content/config.ts        Collections: projects · ledger
│   └── styles/tokens.css        Design tokens matching architecture.html
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### § 10.2 · Local preview

```bash
cd control-plane
npm install
npm run dev          # http://localhost:4321
```

---

## § 11 · Design tokens · Editorial aesthetic

Consistent with `architecture.html`:
- Paper-cream background (#FAF6EC) with 40x40 grid texture
- Fraunces serif for body · JetBrains Mono for code
- Teal (#0D3B52) and amber (#B35C00) accents
- Status colors: green (live) · yellow (sleeping) · red (down)

All tokens centralized in `control-plane/src/styles/tokens.css`.

---

## § 12 · GitHub Pages deploy

### § 12.1 · Enable Pages (one-time setup)

Settings → Pages → Source: **GitHub Actions** (not branch-based).

Then `pcp-update.yml` handles build + deploy automatically.

### § 12.2 · Deploy triggers

- **Every 6 hours** (cron) · rebuilds even if no code change · catches ledger drift
- **On push to main** · when `control-plane/**` or `charters/**` changes
- **Manual dispatch** · via GitHub UI

### § 12.3 · First deploy checklist

1. Run `apply-brief-d.sh` in `genai-portfolio-hub`
2. Commit and push to main
3. Watch `pcp-update.yml` workflow run
4. Enable Pages if first time
5. Wait ~2 min for DNS + first build
6. Open `https://sowthri-industrial-ai.github.io`

### § 12.4 · Content sources

| Zone | Data source |
|---|---|
| Ledger | `https://raw.githubusercontent.com/sowthri-industrial-ai/project-00-ground-zero/main/as-built/ledger.jsonl` · fetched at build time |
| Projects | Hardcoded in `src/pages/index.astro` and `projects.astro` · Wave 3+ migrates to content collections |
| Architecture | Linked via raw.githack to project repo · not duplicated |
| Charter | Linked to project repo · single source of truth |
