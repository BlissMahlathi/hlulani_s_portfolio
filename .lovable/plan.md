# Portfolio redesign

## Experience
- Rework the portfolio into a distinctive, polished developer presentation with an ink-black base, crisp light typography, citrus accents, and restrained warm contrast.
- Build a new hero around the supplied character artwork, using a Three.js scene for depth, gentle movement, and a creative animated treatment of both uploaded poses.
- Use Framer Motion for focused entrance and navigation transitions, and GSAP ScrollTrigger for scroll-led section reveals and project storytelling.
- Refresh the navigation and existing About, skills, projects, process, testimonials, pricing, contact, and footer sections so the full page shares one visual language.

## Responsive and accessible behavior
- Keep the hero artwork and navigation legible on phones and tablets, with a lightweight non-WebGL fallback and reduced-motion behavior.
- Preserve keyboard access, readable contrast, the existing project links, pricing, and contact actions.

## Technical approach
- Add Three.js with React Three Fiber 8 for React 18, Framer Motion, and GSAP; use the uploaded image files as processed, transparent visual assets.
- Keep the 3D scene focused and low-cost, and use GSAP ScrollTrigger cleanup tied to component lifecycle.
- Validate the live preview with build logs and desktop/mobile screenshots, including a reduced-motion check.