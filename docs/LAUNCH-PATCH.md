# Launch patch — `audit/launch-ready` branch

Prepared 2026-06-21 against `main` (4890fda). Outcome of the audit + counter-audit synthesis: ship the Playbooks + Nexus OS thesis as a 10-seat founding cohort, stop selling self-serve, drop the "NexusAI" brand drift, restore the founder narrative.

## What changed in this branch

### `client/src/pages/LandingPage.tsx`
- **Hero rewritten.** Leads with "The playbook & the runtime that runs it." Names Playbooks and Nexus OS as the two halves. Drops the dual hero CTAs ("Browse the Library" removed). One CTA: "Apply for the founding cohort".
- **New `#nexus-os` section.** Three primitives — Ask once / Approvals / Heartbeat — positioning Nexus OS as the wedge vs. Notion ("blank page") and ChatGPT ("advice"). Closes with "Founding-cohort members get Nexus OS early access. Not a separate purchase."
- **New `#founder` section.** 200-word block: Marrakech 1995, online 1998, 25-year arc through VIP tour guide / photography / luxury travel / creative direction, now running Riad&Routes + ArtKech on Nexus OS. Placeholder portrait slot — drop a JPG at `/manus-storage/founder-portrait.jpg` or wire it.
- **Pricing → Cohort.** The `#pricing` section is gone. Replaced with `#cohort`: 10 seats, 6-month commitment, NY/SF June 2026 window, mailto apply (`hello@argbuilder.io`, prefilled subject + 3-line application). Stripe checkout removed from this page.
- **Nav tightened** from 5 anchor items to 5 better ones: Nexus OS, Library, Founder, Cohort, FAQ.
- **Final CTA** updated to "The playbook and the runtime." → apply for cohort.
- **Footer** tagline updated: "ARG-Builder — Playbooks & Nexus OS. Autonomous Capacity, not software."
- **Imports cleaned.** Removed `trpc`, `toast`, `Workflow`. Added `MessageSquare`, `BellRing`.

### Behavior changes worth flagging
- **Stripe is no longer called from `/product`.** The Stripe routers in `server/products.ts` are unchanged — they still work for any other surface. If the App or another page needs self-serve checkout, it's still wired.
- **No DB changes.** No schema or migration touched.

## What still needs you (not done in this branch)

1. **Founder portrait.** Drop a JPG at `client/public/manus-storage/founder-portrait.jpg` (or pick a path and update line ~166 of LandingPage.tsx). Without it the section shows a "Founder portrait" placeholder.
2. **Logo asset.** Replace `client/public/manus-storage/logo-icon_7cc98e89.png` with the new book+circuit mark. Same filename = no code change needed. Suggested intrinsic size: 256x256 PNG with transparency.
3. **DNS / brand sync with Manus cloud.** The live argbuilder.io is currently being served from the Manus workspace (NexusAI rebrand, "AI-powered", 11 AI tools surface). When this branch deploys to Railway, argbuilder.io will need to point at Railway, OR you'll need to mirror these changes into Manus. See "DNS decision required" below.
4. **Apply form vs mailto.** Current `#cohort` CTA opens a prefilled email. If you want a structured form (the `FoundingCohort.tsx` component already exists in `manus/` snapshot but not in this repo), the next step is porting it into this repo and wiring `trpc.cohort.submit`.
5. **Homepage routing.** This branch touches only `/product`. The home route `/` is still the app shell — splitting marketing (`/`) from app (`/app`) is a separate change and needs the auth-gate decision made first.

## DNS decision required

| Choice | Effect |
|---|---|
| Point `argbuilder.io` at Railway | Live site reverts to the ARG-Builder brand. Loses NexusAI rebrand artifacts in Manus. Cleanest path. |
| Keep `argbuilder.io` on Manus | This branch's changes don't reach the public. Apply the same edits inside the Manus workspace by hand. |
| Run Manus as staging, Railway as prod | Standard pattern. Requires you to publish from Manus → GitHub → Railway each iteration. |

Recommendation: option 1. Manus drifted; GitHub is the cleaner source of truth.

## How to verify locally

```bash
pnpm install
pnpm dev
# then open the dev URL and click through:
#   / (app shell — unchanged)
#   /product (this branch's edits)
```

## How to push

```bash
git push -u origin audit/launch-ready
# then open a PR against main
```

Railway will pick up the merge to `main` automatically per `railway.toml`.
