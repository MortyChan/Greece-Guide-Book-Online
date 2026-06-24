# Design QA

- Source visual truth: `.tools/qa/apple-store-reference.png`
- Implementation screenshots: `.tools/qa/v6-desktop.png`, `.tools/qa/v6-tablet.png`, `.tools/qa/v6-mobile.png`, `.tools/qa/v6-landscape.png`
- State screenshots: `.tools/qa/v6-mobile-search.png`, `.tools/qa/v6-mobile-hotel-viewer.png`, `.tools/qa/v6-mobile-safety.png`
- Automated report: `.tools/qa/v6-qa-results.json`
- Viewports: 1440x1000, 768x1024, 390x844, 844x390
- Browser: Playwright Firefox

## Visual comparison

The Apple reference and V6 desktop capture were inspected together at the same desktop state. V6 retains the compact system bar, large editorial headline, neutral canvas, crisp system typography, restrained Aegean blue, and generous spacing. The full-bleed Greek image remains the subject rather than becoming decoration.

The new liquid-glass plane is attached to the hero edge instead of framing the headline as a floating card. Its border, blur, and shadow remain quiet enough to preserve image legibility. On mobile, the plane keeps text readable while leaving the Parthenon visible.

## Interaction and continuity

- Scrolling crossfades the hero into a low-opacity, desaturated fixed page background through transform and opacity only.
- Hotel images are semantic buttons with 44px-plus targets and keyboard focus. The viewer animates from the source image, remains centered at 390px, and returns to the source on close.
- Larger radii are applied by hierarchy: 30px major panels, 22px cards, 14px compact controls, and pill controls where already established.
- Search, Dock, details, checklist, schedule, and transport transitions remain interruptible and use the same motion tokens.
- Reduced-motion mode disables scene, parallax, viewer, and stagger motion while retaining usable state changes.

## Functional verification

- No horizontal overflow at 390px, 768px, 844px landscape, or 1440px.
- Mobile Dock and search FAB keep a 112px gap; no overlap occurs.
- Rapid day switching resolves to the latest choice; transport switching and animated details pass.
- Search returns six `护照` matches and closes after jumping to the target.
- Checklist persistence, eight telephone links, and all public contact links pass.
- Incorrect emergency password is rejected; the correct password unlocks 12 rows; relocking hides the data.
- Ambient background reaches the intended 0.145 maximum opacity after the hero.
- Hotel viewer opens with the correct image and title, is fully visible, and restores its trigger after closing.
- Reduced-motion mode reports zero running animations.
- No JavaScript page errors were recorded.

## Findings

No actionable P0, P1, or P2 findings remain.

final result: passed
