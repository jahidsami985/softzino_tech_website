# Journey Square Animation QA Report

Date: 2026-09-07

## Scope

Implemented and verified the scroll-driven blue square animation for the existing Journey of Softzino timeline on `/about`.

No timeline copy, milestones, metadata, header, footer, routes, or SEO content were changed.

## Files Changed

- `components/about/JourneyTimeline.tsx`
- `app/globals.css`
- `qa/JOURNEY-SQUARE-ANIMATION-REPORT.md`

## Implementation Summary

- Added one client-side moving square that follows a measured SVG path through the existing timeline nodes.
- The SVG path is calculated from the actual rendered node positions, so it adapts to desktop and mobile layouts.
- The moving square updates with `requestAnimationFrame` during scroll for smoother behavior.
- The completed path segment fills in blue as the user scrolls down.
- Timeline milestones update between `upcoming`, `active`, and `completed` states based on the square position.
- Existing static timeline line CSS remains as a fallback before the enhanced SVG path is ready.

## Path-Following Logic

- Desktop: the path uses curved SVG cubic segments between each timeline node.
- Mobile/tablet: the path uses a simpler vertical SVG line through the rendered nodes.
- The path is remeasured after initial render, font readiness, resize, orientation change, and layout changes.
- The moving square uses `getPointAtLength()` on the measured SVG path, so the square remains centered on the path instead of using guessed pixel positions.

## Milestone Activation

- The nearest milestone to the square becomes active.
- Earlier milestones are marked completed.
- Later milestones stay upcoming.
- The active node gets a short glow/pulse animation and the active year badge receives a subtle highlight.

## Responsive And Accessibility Notes

- Verified at desktop, tablet, and mobile widths down to 320px.
- The animation does not create horizontal overflow.
- Timeline text remains visible during all scroll states.
- `prefers-reduced-motion: reduce` hides the moving square/progress stroke and keeps the timeline stable.
- Decorative SVG/path/square elements are `aria-hidden`.

## Validation Results

- `npx.cmd tsc --noEmit`: passed
- `npm.cmd run lint`: passed, no ESLint warnings or errors
- `npm.cmd run build`: passed
- Production preview tested at `http://127.0.0.1:3045/about`
- Headless Chrome QA passed:
  - 1440x900
  - 1280x800
  - 1024x768
  - 768x1024
  - 430x932
  - 390x844
  - 375x812
  - 320x568
- Reload at mid-scroll: passed
- Resize while inside the timeline: passed
- Reduced-motion mode: passed

## Screenshots

- `qa-screenshots/journey-animation-start.png`
- `qa-screenshots/journey-animation-middle.png`
- `qa-screenshots/journey-animation-end.png`
- `qa-screenshots/journey-animation-mobile.png`

## Remaining Notes

- Chrome reported a 404 for `http://127.0.0.1:3045/favicon.ico`. This appears unrelated to the Journey animation and was not fixed because this task is scoped to the timeline animation only.
- No git commit, push, or deployment was performed.
