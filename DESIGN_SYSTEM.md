# Design System & References

## Primary reference: Apex Motions Studio
https://www.apexmotions.studio/

Study the continuous storytelling, scene transitions, 3D/video craft, typographic hierarchy, real work presentation, agency positioning, service explanation, process and project enquiry. The goal is the same level of coherence and craft—not a copy of its mountain metaphor, layout, text or assets.

Useful Apex pages:
- Home: https://www.apexmotions.studio/
- Work: https://www.apexmotions.studio/work/
- Web design: https://www.apexmotions.studio/web-design/
- Team: https://www.apexmotions.studio/team/

## Supporting references
Locomotive https://locomotive.ca/; Active Theory https://activetheory.net/; Resn https://resn.co.nz/; Unseen Studio https://unseen.co/; Fantik Studio https://fantik.studio/; Contra https://contra.com/; Behance https://www.behance.net/; Shopify https://www.shopify.com/; Apple https://www.apple.com/; Awwwards https://www.awwwards.com/; Dribbble https://dribbble.com/.
Use for research and inspiration, not direct copying.

## Brand source
Official source: Canva design “SWAPNO TECH — Brand Identity & Visual System” (37 pages, current version).
- Approved core colours: warm light #FFF7CE and orange #FF6300.
- Brand promise: “Building Brands. Growing Systems.”
- Typography: bold modern display headlines and clean, highly legible sans-serif supporting text.
- Tone: clear, confident, human; strategic clarity and practical optimism.
- Photography/imagery: contemporary, crisp, purposeful lighting, authentic work environments, real-world business outcomes.
- Layout: structured grids, sharp alignment, strong hierarchy and generous negative space.
Use the official logo artwork and only the approved variations. Never redraw, stretch, rotate, recolour or add effects to the mark.

## Art direction
Premium digital agency—not a game, sci-fi toy UI or cartoon planet website.
- Use cinematic real-world footage, approved photography, authentic work imagery and high-quality rendered environments.
- The Mars/Earth/Venus idea is a restrained narrative device for the agency's three expertise groupings. It is not a reason to decorate every card with a sphere, starfield or orbit.
- No cartoon planets, emoji mascots, childish illustrations, clip art, random floating icons, fake dashboards, fake client logos or synthetic portfolio work.
- Do not build a page from generic cards. Vary layout according to content: editorial typography, project imagery, structured service grids, process timeline, product previews and focused forms.
- Use orange for meaningful actions and emphasis, not for every text label or decoration.
- Use glass surfaces only when they improve hierarchy; avoid heavy blur and excessive gradients.

## Intro and motion language
The supplied planet-jumping.html is the choreography reference:
1. Full-screen cinematic video preloader with restrained progress display.
2. Official Swapno logo appears centrally and docks into the header position.
3. A scene is revealed through a portal/mask transition.
4. The hero is the next scene, not a second unrelated landing-page template.
5. Planetary scenes transition into one another with a coherent mask/portal language and subtle parallax.

Adapt and simplify for Swapno Tech. Target maximum about 8 seconds, always skippable, mobile-aware and reduced-motion-aware. Never use the source experience's unrelated logo, name, facts or brand content. If a reference media URL is unavailable, use approved media or a quiet dark fallback—not a cartoon replacement.

## Homepage sequence
Intro → Hero → Swapno identity → Mars/Earth/Venus expertise → Services → Portfolio category controls → Featured work/case studies → Connected process → Packages → Three core product previews + separate Swapno Founders → Team stories → Insights → Newsletter → Final CTA/footer.

Section purpose, page roles, CTA rules and page map are detailed in WEBSITE_SPEC.md.

## Header and footer
Desktop header: official logo left; Services, Work, Products, About and Insights; primary “Let's Talk” CTA; product dropdown; account access; compact state on scroll. Design light and dark variants deliberately.
Mobile: logo left, menu right, clean full-width navigation panel, large touch targets, account access and contact CTA. Do not rely on hover.

Footer groups:
- Brand and short description/social links.
- Explore: About, Services, Portfolio, Insights.
- Ecosystem: Website Solution, Creator Platform, Hosting, Swapno Founders.
- Connect: Contact, project enquiry and optional newsletter.
- Legal: Privacy, Terms and Community Guidelines; language selector.
Stack/accordion on mobile.

## Layout, readability and interaction quality
- Design from 360–390px first, then expand to tablet and desktop.
- Use content grids and safe text widths. Decorative media may be absolute-positioned; content must stay in normal flow.
- No text/image collisions, clipped headings, overlapping controls, illegible text over video or unintended horizontal scroll.
- Use consistent spacing, baseline alignment, heading scale, button heights and section gutters.
- Every route needs one primary CTA and clear secondary actions.
- Important interactions work with touch and keyboard. No hover-only content.
- Forms are concise, labelled, and clear about consent and next steps.
- Day/night themes have separate contrast, surfaces, borders, shadows and focus states.

## Motion and performance
Use motion to guide attention and connect sections, not to decorate every component. Prefer transforms/opacity and controlled scroll reveals. Do not hijack scrolling. Defer video and heavy 3D below the fold; use mobile-quality media and static fallbacks; pause media when hidden; respect prefers-reduced-motion. Reserve layout space to prevent shifts. Measure mobile Core Web Vitals before claiming speed.

## Accessibility and language
Semantic structure, readable contrast, visible focus, accessible labels, keyboard support, reduced-motion support and touch targets generally at least 44px. English and Bangla are separately authored and reviewed; never ship awkward auto-translated Bangla.
