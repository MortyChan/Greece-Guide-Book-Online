# Design QA

- Source visual truth: `attachments/.../image-1.jpg` (mobile hero feedback), `attachments/.../image-2.jpg` (transport cards), and `.tools/qa/apple-store-reference.png`
- Implementation screenshots: `.tools/qa/v7-mobile.png`, `.tools/qa/v7-tablet.png`, `.tools/qa/v7-desktop.png`, `.tools/qa/v7-landscape.png`
- Focused states: `.tools/qa/v7-mobile-transport.png`, `.tools/qa/v7-mobile-members.png`, `.tools/qa/v7-mobile-hotel-viewer.png`, `.tools/qa/v7-mobile-search.png`, `.tools/qa/v7-mobile-safety.png`
- Automated report: `.tools/qa/v7-qa-results.json`
- Viewports: 390x844, 768x1024, 1440x1000, 844x390
- Browser: Playwright Firefox

## Full-view comparison

The first source screenshot and the V7 mobile hero were opened in the same comparison input. The previous full-height glass plane has been replaced by a compact lower glass surface. It begins after the sky and lets the Parthenon remain the first visual signal. The mobile hero is 480px tall, reducing unused space while keeping the title, supporting copy, and four metadata chips readable.

The desktop and tablet compositions retain the established Apple editorial hierarchy, system typography, white space, and full-bleed Greek image. The compact mobile treatment is an intentional responsive adaptation rather than a separate design.

## Focused comparison

The second source screenshot and V7 transport state were inspected together. V7 replaces the stacked pale instruction cards with alternating black and white story cards, 30px radii, large headings, and a visible next-card edge. The carousel uses native horizontal scrolling and scroll snap, preserving all transport facts without reducing text accuracy.

The member state was inspected separately because the phone column was not discoverable in the previous mobile table. V7 uses mobile member cards with the name, role, profile, and a visible tap-to-call phone action. Desktop keeps the compact table.

## Required fidelity surfaces

- Typography: native Apple-style font stack, stable optical weights, no negative tracking, shorter section copy, and readable mobile line lengths.
- Spacing and layout: mobile hero top space reduced; glass-to-content ratio is balanced; transport cards reveal the next item; no horizontal page overflow.
- Colors and tokens: restrained neutral canvas with true black/white transport surfaces, Aegean blue for actions, and consistent semantic colors.
- Image quality: the generated Greek hero remains uncompressed and correctly framed at all target sizes; no placeholder or code-drawn imagery was introduced.
- Copy and content: primary page copy is shorter and more direct while handbook facts, prices, dates, safety instructions, and Vienna/Prague placeholders remain intact.
- Accessibility: controls remain keyboard reachable, phone actions are semantic links, focus states are visible, and reduced-motion mode reports zero running animations.

## Privacy and functionality

- All 12 member rows display a public tap-to-call phone link as requested.
- Parent/relative emergency contacts remain encrypted, hidden while locked, excluded from search, and reduced to four emergency-only columns after unlock.
- Wrong password, correct password, and relock states pass.
- Rapid schedule switching, transport switching, details, checklist persistence, search jumping, hotel image viewer, Dock, FAB, and all public telephone links pass.
- No JavaScript page errors were recorded.

## Findings

No actionable P0, P1, or P2 findings remain.

## Patches made

- Rebalanced the mobile hero and added a subtle liquid border-radius animation.
- Rebuilt transport content as a black/white horizontal story carousel.
- Published member phones in the roster while keeping relative emergency contacts encrypted.
- Rewrote primary interface copy in a shorter Apple-style voice.
- Converted the mobile member table into scannable contact cards.

final result: passed
