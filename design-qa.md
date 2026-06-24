# Design QA

- Source visual truth: `.tools/qa/apple-store-reference.png`
- Implementation screenshots: `.tools/qa/v4-desktop.png`, `.tools/qa/v4-tablet.png`, `.tools/qa/v4-mobile.png`, `.tools/qa/v4-landscape.png`
- State screenshots: `.tools/qa/v4-mobile-search.png`, `.tools/qa/v4-mobile-safety.png`
- Combined comparison: `.tools/qa/v4-design-comparison.jpg`
- Viewports: 1440x1000, 768x1024, 390x844, 844x390
- Browser: Playwright Firefox 151

## Full-view comparison

The Apple reference and the V4 desktop capture were normalized to the same 1440x1000 viewport and placed side by side. The implementation preserves the source's compact translucent bar, editorial black headline, generous white space, quiet neutral canvas, and restrained hierarchy. The Greece-specific hero image is an intentional product asset rather than a fidelity mismatch.

The mobile, tablet, and landscape captures confirm stable typography and image framing with no horizontal overflow. The Dock now stays out of the hero scene and enters when the handbook content becomes primary, preventing the overlap seen in the first V4 QA pass.

## Focused-region comparison

The mobile search and safety screenshots were inspected separately because controls and long text are too small in the full-view comparison. Search results retain clear hierarchy and 44px controls; safety accordions, phone cards, call actions, search FAB, and Dock remain legible and distinct.

## Fidelity surfaces

- Typography: native Apple-style stack, appropriate Chinese fallbacks, stable weights, no negative tracking, balanced headline wrapping, and tabular figures for dates and phone numbers.
- Spacing and layout: consistent 1120px desktop frame, 8px rhythm, 8px card radius, full-width section bands, and safe-area-aware fixed controls.
- Colors and tokens: neutral white/gray base with Aegean blue, Tsinghua wine, bronze gold, and semantic red; glass is limited to navigation and the search sheet.
- Image quality: existing uncompressed hero, hotel, weather, logo, and SVG icon assets remain correctly framed; no placeholder or code-drawn imagery was introduced.
- Copy and content: all handbook content and Vienna/Prague placeholders remain unchanged.

## Functional verification

- No horizontal overflow at all four target viewports.
- Rapid day switching resolves to the latest selection without queued animation.
- Transport switching, details, search jump, checklist persistence, 8 telephone links, and Dock active state pass.
- Incorrect emergency password is rejected; the correct password unlocks 12 rows; relocking hides them again.
- Reduced-motion mode shows the hero at full opacity with zero running animations.
- No page errors were recorded.

## Findings

No actionable P0, P1, or P2 findings remain.

## Patches made

- Replaced repaint-heavy background-position motion with a transformed hero media layer.
- Consolidated duplicate reveal effects into one staggered scene system without blur.
- Added interruptible directional schedule and transport transitions.
- Added animated details, search focus management, and faster exit timing.
- Added a shared moving Dock indicator and hero-aware Dock entrance.
- Unified motion, elevation, touch, focus, and reduced-motion tokens.

## Follow-up polish

- P3: A future content revision could shorten the tablet accommodation labels to reduce wrapping, but the current text remains readable and accurate.

final result: passed
