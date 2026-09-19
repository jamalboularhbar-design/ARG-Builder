# ARG Builder — logo assets

The mark is a stack of ascending layers topped by a rising insight node — structured
knowledge (the layers) resolving into one actionable point (the node), in one continuous
line. It illustrates the tagline directly: **"Your Team's Knowledge, Instantly Actionable."**

## Files

| File | Use |
|---|---|
| `arg-builder-icon.svg` | Icon badge (dark rounded square + mark). Favicon, app icon, social avatar. Also at `/favicon.svg`, `/favicon.ico`, `/icon-192.png`, `/icon-512.png`, `/apple-touch-icon.png`. |
| `arg-builder-icon-badge.png` | Same badge, 1024×1024 PNG, for contexts that need a raster app-icon-style asset. |
| `arg-builder-mark.svg` | Mark only, no badge, single-color (`currentColor`) — for inline use next to text (nav bars, in-app headers) where you want the surrounding CSS to set the color. |
| `arg-builder-mark-on-light.png` / `arg-builder-mark-on-dark.png` | Mark only, transparent background, pre-colored for light or dark surfaces. |
| `arg-builder-logo-light.png` | Full horizontal lockup (mark + "ARG Builder" wordmark) for light backgrounds. |
| `arg-builder-logo-dark.png` | Full horizontal lockup for dark backgrounds. |
| `arg-builder-logo-tagline.png` | Horizontal lockup + tagline, for hero sections, decks, and cover pages. |

All PNGs are transparent, rendered at 2x for retina use.

## Color

Matches the app's existing design tokens (`client/src/index.css`, `manifest.json`) —
this is not a new palette:

| Token | Hex | Use |
|---|---|---|
| Terracotta | `#C2703E` | Primary mark/wordmark color on light backgrounds |
| Terracotta (light) | `#E38F5C` | Mark/wordmark accent on dark backgrounds |
| Charcoal | `#1A1A1A` | Badge background, dark surfaces |
| Cream | `#F7F1E8` | Wordmark/mark color on dark backgrounds |
| Ink | `#221D18` | "Builder" wordmark color on light backgrounds |

## Type

Wordmark is set in **Playfair Display** (weight 800), matching the display typeface
already used for headings. "ARG" carries the accent color; "Builder" carries the
neutral (ink/cream) color — the same two-tone treatment across every lockup.

## Usage

- Keep clear space around the mark equal to at least the height of one of its layers.
- Don't recolor the mark outside the palette above, stretch it non-uniformly, or
  separate the node from its connecting line.
- Use the light-background lockup on light surfaces and the dark-background lockup on
  dark surfaces — don't place the terracotta-on-terracotta or cream-on-white
  combinations against the wrong background; contrast breaks down.
- For copy alongside the logo, follow the canonical ARG-Builder voice and approved
  terminology (Reference Guide, Knowledge Engine, Workspace, Source Integration,
  Actionable Insight) from the Brand Voice & Messaging Framework.
