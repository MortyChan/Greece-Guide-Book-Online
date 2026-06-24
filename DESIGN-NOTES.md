# Design Notes

- Keep the visual language close to Apple editorial pages: neutral canvas, strong type hierarchy, generous section rhythm, and restrained Greece-specific color accents.
- Preserve the 44px translucent top bar and the independent bottom Dock and search FAB.
- Use the shared `--ease-spring` and `--ease-out` curves for new motion.
- Prefer `transform` and `opacity` animations; avoid layout-moving animation and decorative effects that compete with handbook content.
- All new motion must remain usable under `prefers-reduced-motion: reduce`.
- Keep content cards at an 8px radius or less. The Dock, segmented controls, chips, and circular action buttons may remain pill-shaped.
- Maintain at least 16px clearance between the mobile search FAB and Dock, including safe-area insets.
