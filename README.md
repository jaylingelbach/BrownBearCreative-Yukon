## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Marketing Site Architecture (Config-Driven)

This repository is a **configuration-driven marketing site system** designed for small businesses (plumbers, landscapers, dentists, etc.).

The primary goals are:

- Ship sites quickly
- Avoid rewrites as the business grows
- Support multiple tiers cleanly
- Keep components boring and stable
- Scale features without scaling complexity

This is **not** a CMS, Shopify clone, or page builder.
It is a structured system for delivering consistent, sellable marketing sites.

---

## High-Level Philosophy

> **Configuration decides what exists.
> Components decide how it looks.**

If a decision answers:

- **“Should this exist?”** → config
- **“How should this render?”** → component

---

## Core Architectural Rules (Do Not Violate)

### 1. Configuration Over Props

- Business rules live in config
- Components do **not** receive tier names, pricing levels, or feature flags as props
- Components receive **already-resolved data**

❌ `isGrowth`, `tier`, `showServices` props
✅ Filtered data passed in once

---

### 2. Capabilities, Not Tier Names

Tiers define **capabilities**, not UI behavior.

❌ `if (tier === 'growth')`
✅ `if (navigation.enableDropdowns)`

Tier logic lives exclusively in:

```
src/config/tiers/
```

No component should ever reference a tier name.

---

### 3. Single Source of Truth

| Concern                 | Location               |
| ----------------------- | ---------------------- |
| Tier capabilities       | `src/config/tiers/`    |
| Header branding & links | `src/config/header/`   |
| Homepage structure      | `src/config/home/`     |
| Services data           | `src/config/services/` |
| UI components           | `src/components/`      |

Components do **not** own business rules.

---

## Tier System

**Location**

```
src/config/tiers/
```

### What tiers control

- Navigation capabilities (dropdowns, depth)
- Homepage structure (which sections exist, and order)
- Content availability (blog, gallery, FAQ)
- Marketing features (reviews, tracking)
- Management expectations

### What tiers do NOT control

- Styling
- Copy
- Component logic

---

## Homepage Architecture

The homepage is **section-driven**, not conditional.

### How it works

1. Tier defines allowed sections:

   ```ts
   tier.homepage.allowedSectionsInOrder;
   ```

2. Homepage renders sections by iterating that list

3. A section registry maps IDs → components

```
src/components/homepage/sectionRegistry.ts
```

❌ No conditional JSX in `page.tsx`
❌ No tier checks in components

---

## Services Architecture

Services are treated as **data**, not UI decisions.

### Service data lives in:

```
src/config/services/
```

Each service defines:

- labels (nav + cards)
- icons
- descriptions
- routing slug
- display metadata (nav / homepage visibility)

### Important rules

- Tier config decides **whether the services section exists**
- Service metadata decides **what appears inside it**
- Header and homepage consume the same service data
- No tier logic inside services

---

## Header Architecture

**Location**

```
src/components/layout/header.tsx
```

The header:

- Renders links and dropdowns
- Handles accessibility and keyboard navigation
- Does NOT decide tier behavior

Tier capability (`navigation.enableDropdowns`) is resolved **before** reaching the header.

---

## Styling & Themes

- Styling is grouped into theme objects (e.g. `NavbarTheme`, `ServiceGridTheme`)
- Components do not hardcode brand colors
- Brand values are globally swappable per client

Goal:

> Changing a brand should not require changing component logic.

---

## Props Policy (Important)

Props are allowed **only** when they are:

- already filtered
- already ordered
- already resolved

Props must **not**:

- control feature availability
- reference tier names
- orchestrate multiple components

---

## Guardrails (Hard Rules)

❌ No tier conditionals in components
❌ No prop drilling for business rules
❌ No duplicated tier logic
❌ No “quick boolean” fixes
❌ No components coordinating with each other

✅ Config decides availability
✅ Components render data
✅ Tiers control structure, not visuals

---

## Mental Model for Decisions

Before adding anything, ask:

1. Is this a **business rule** or **rendering concern**?
2. Does this answer “should this exist?” or “how does this look?”
3. Will this scale to 20+ clients without rewriting?

If unsure:

> Default to config, not components.

---

## Intentional Tradeoffs

This system optimizes for:

- predictability
- clarity
- long-term maintainability
- fast client onboarding
- selling sites, not building frameworks

It intentionally avoids:

- runtime customization
- CMS-level flexibility
- per-page logic sprawl

---

## Final Note

This architecture is designed to:

- survive long breaks between work sessions
- onboard new developers quickly
- prevent scope creep
- support business growth without rewrites

**Do not violate these rules casually.**
If something feels awkward, the solution is probably _more config_, not more props.

---
