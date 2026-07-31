# Explorer Rigged — Phase 3 Report

**Master (untouched):** `Explorer_Master.svg`  
**Deliverable:** `Explorer_Rigged.svg`  
**Date:** 2026-07-31

## Summary

`Explorer_Rigged.svg` is an animation-ready semantic rebuild of the Explorer mascot. Master’s character geometry (the organic “hero” layer painted over the gray mosaic) was extracted, grouped into the required puppet parts, given CSS palette variables and transform origins, and placed on a transparent stage. Side-by-side pixel QA against Master’s character paths is effectively identical at 1024×1024.

## What Master actually is

Master is **not** 1,112 character facets. It is:

| Layer | Approx. paths | Role |
|-------|---------------|------|
| Dark base | 1 | Full-canvas `#46331F` underpainting |
| Gray mosaic | ~1,030 | Faceted sand/background tiles (`#F7F7F7` / `#C6C6C5` / related) |
| Character | ~81 | Organic fill-only shapes for the explorer |

The puppet only needs the character layer. The mosaic is brand-scene atmosphere, not limb geometry.

## Structure

```
explorer
└── body
    ├── backpack
    ├── torso
    │   ├── torso-shirt
    │   └── torso-shorts
    ├── right-leg / left-leg
    ├── right-boot / left-boot
    ├── left-arm
    └── right-arm
        └── compass          ← nested for hand attachment; own pivot
├── head
├── eyes
└── hat
    ├── hat-crown
    ├── hat-band
    └── hat-brim
```

**Limb naming** follows the character’s own left/right (three-quarter view facing viewer’s right):

- `right-arm` / `right-leg` / `right-boot` = near side (holds compass)
- `left-arm` / `left-leg` / `left-boot` = far side

Required ids all present: `hat`, `head`, `eyes`, `torso`, `left-arm`, `right-arm`, `left-leg`, `right-leg`, `left-boot`, `right-boot`, `backpack`, `compass`.

## What was merged / kept

Master’s character paths are already relatively large semantic shapes (not micro-voxels). They were **kept as authoritative geometry** and assigned to groups rather than redrawn from scratch — this is what makes the silhouette match Master.

| Group | Master path indices (data-master) | Notes |
|-------|-----------------------------------|-------|
| backpack | 982, 987, 992, 1003, 993 | Pack + straps + rivet |
| torso-shirt | 963, 1009 | Single shirt surface + collar highlight |
| torso-shorts | 970, 1008, 999–1006 | Shorts + fold + inseam cluster |
| right-leg / left-leg | 994 / 995 | One shin path each |
| right-boot | 990, 989, 1002, 1011, 1018, 991, 996, 1019, 1023–1025 | Upper/mid/tongue/laces/sole |
| left-boot | 983–985, 1007, 1012, 997, 1016, 1020, 1022 | Same pattern |
| left-arm | 998, 988, 1017 | Upper + forearm/hand |
| right-arm | 986, 971 + grip overlays | Upper + forearm; grip after compass |
| compass | 972–981 | Case, face, needle, ticks |
| head | 958–960, 964–966 | Skull + hat-cast shades |
| eyes | 961, 962 | Two dark ovals |
| hat | 967–969 | Crown / band / brim |

**Path count:** 68 (from ~81 character paths).

## What was simplified / dropped

1. **Gray mosaic background (~1,030 paths)** — omitted. Puppet composites on transparent / product UI.
2. **Dark full-canvas underpaint (path 0)** — omitted. Not needed without mosaic gaps.
3. **13 micro ink speckles (paths 1026–1038)** — dropped. Tiny `#412D18` dots (bbox ~3–5px). At brand sizes they are invisible; including them adds noise, not structure.
4. **No invented outlines** — Master character is fill-only; rigged matches that. Edge definition comes from adjacent fills, not strokes.
5. **Palette → CSS variables** — all fills use `--c-*` tokens mapped 1:1 to Master hex values.

Shirt + shorts stay under one `torso` id (with `torso-shirt` / `torso-shorts` sub-groups) for future clothing layers without exploding the torso contract.

## Visual deltas vs Master

| Delta | Severity | Notes |
|-------|----------|-------|
| No mosaic background | Intentional | Puppet stage is transparent |
| 13 ink speckles removed | Negligible | ~200 px differ at 1024² when compared with speckles; 0 meaningful at display sizes |
| Character geometry | None (for kept paths) | Pixel QA: Master character-only vs Rigged → max channel Δ 1, ~10 AA pixels |
| Personality / proportions / colors | Preserved | Same path data, same paint order for hero shapes |

**Biggest visual delta:** background removal (mosaic + underpaint). Character itself is Master-faithful.

## Transform origins

All pivots use `transform-box: view-box` with pixel origins in the 1024×1024 viewBox:

| Id | Origin `(x, y)` | Rationale |
|----|-----------------|-----------|
| `hat` | 504, 175 | Base of crown / band |
| `head` | 560, 310 | Head center |
| `eyes` | 610, 290 | Midpoint between eyes |
| `torso` | 545, 560 | Torso center of mass |
| `backpack` | 360, 500 | Pack attach / back |
| `left-arm` | 668, 480 | Far shoulder |
| `right-arm` | 410, 455 | Near shoulder |
| `left-leg` | 598, 780 | Far hip (top of shorts opening) |
| `right-leg` | 480, 780 | Near hip |
| `left-boot` | 628, 832 | Far ankle (boot cuff) |
| `right-boot` | 448, 832 | Near ankle |
| `compass` | 381, 756 | Case top / lanyard attach |

`compass` is nested under `right-arm` so it travels with the arm by default, but keeps its own origin for independent swing.

## File size

| File | Size | Paths |
|------|------|-------|
| `Explorer_Master.svg` | 281,166 B (~275 KB) | 1,112 |
| `Explorer_Rigged.svg` | 33,159 B (~32 KB) | 68 |

≈ **88% smaller** than Master.

## Animation readiness: **~78%**

| Ready | Not yet |
|-------|---------|
| Semantic part ids | Elbow / knee sub-pivots |
| Shoulder / hip / ankle / hat / compass origins | Clip paths so thighs stay under shorts when walking |
| Backpack logically with body | Soft deformation / squash |
| Compass independent swing | Pose variants (think, wave, sit) |
| CSS palette tokens | `Explorer.tsx` React wrapper + motion presets |
| Fill-only Master look | Prop socket docs beyond free arms |

Honest ceiling without joint hierarchy and walk clipping: good for bob, hat tip, compass sway, blink (scale/opacity eyes), and simple arm raises. Full walk cycle needs hip/knee layering polish (~next 15–20%).

## Recommended next steps

1. **`Explorer.tsx`** — React component wrapping the SVG (or inlining groups), exposing props: `pose`, `mood`, `accessories`, CSS variable theme overrides.
2. **`walk`** — alternate `left-leg`/`right-leg` rotation ±8–12° at hips; boots follow ankles; slight torso sway; backpack rides with `body`.
3. **`think`** — tip `hat` (−6°), raise `right-arm`, slow `compass` pendulum, optional eye scale pulse.
4. **Clothing pipeline** — keep `torso` as the slot; overlay shirt/jacket groups above `torso-shirt`, below arms.
5. **Optional:** reintroduce a lightweight mosaic/background as a separate `Explorer_Scene` asset — do not bake it back into the puppet.

## QA method

- Chrome headless renders at 1024×1024
- Character-only Master extract vs Rigged on identical gray stage
- Result: essentially pixel-identical for kept geometry
- Master SHA-256 verified unchanged after work: `08c5006e61c5c8affc1577f04b582dccc73d8c9b134158df572baadba4e7567d`
