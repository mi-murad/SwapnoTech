# Swapno Tech — Implementation Status

Last updated: 21 November 2026  
Repository: `mi-murad/SwapnoTech`  
Working branch: `swapnotech-site-build`  
Preview alias: https://swapnotech-git-swapnotech-site-build-swapno3.vercel.app
Latest preview deployment: https://swapnotech-6khnz8rxc-swapno3.vercel.app
Latest preview deployment ID: `dpl_4EsDQxSvpvnJS4jEUN4q4dyqqLKp`
Latest branch alias: https://swapnotech-git-swapnotech-site-build-swapno3.vercel.app

## Phase 1 — Route registry and canonical URL repair (21 November 2026)
- Added `src/routes.js` as the central source of truth for approved canonical routes, legacy aliases and published dynamic slugs.
- Canonical routes cover the public page map in `WEBSITE_SPEC.md`, including the four Work category pages and the three published Insights articles.
- Legacy paths (including `/portfolio`, `/blog`, `/founders`, previous service slugs and old article URLs) are replaced with their canonical paths while preserving query strings and fragments. Trailing slashes are normalized too.
- Added route-specific filtered views for `/work/video`, `/work/graphics`, `/work/branding` and `/work/websites`.
- Added a branded bilingual in-app 404 for unknown paths and unpublished dynamic slugs. Case-study detail slugs remain unpublished until approved case-study content exists.
- Kept the Vercel SPA fallback rewrite so direct route requests and refreshes are served by the React app.
- Preview deployment `dpl_2zUKpahfRqfMREc5VwGpDPs9ZyWH` reached `READY` for commit `a983e3d728a112c6ada4d2dd29661a3e0a5ccf89`; the subsequent trailing-slash normalization is in commit `b52c8223f1e31620b26e86beb260271d0c2bd42f` and is awaiting its preview build.
- Browser-based direct-route, alias, refresh, navigation and visual checks remain outstanding because the connected browser context is unavailable and the preview cannot be inspected through the web viewer.
- This milestone changes route resolution only; it does not complete missing case-study content, backend features or the full public page map.


- Added `vercel.json` with a Vercel SPA fallback rewrite to `/index.html`, so existing client-side routes can load on direct URL requests and refreshes instead of depending on first visiting the homepage.
- Aligned primary navigation and footer links with the canonical `/work`, `/insights` and `/community/founders` paths while preserving legacy route compatibility.
- Added route aliases for the approved service paths and the three existing insight article slugs.
- Preview deployment for commit `c4caeeabc4ef8afb0d432c412987df94f86233fa` reached Vercel `READY` at `https://swapnotech-1l5kr2swd-swapno3.vercel.app`. This confirms deployment/build completion only.
- Browser-based direct-route, navigation, refresh and visual checks remain outstanding; the connected browser session was unavailable and the public web inspection could not access the preview.
- This is not yet completion of the full page map. Work category subpages, case-study detail routes, page-specific storytelling layouts and several canonical page experiences still need to be built/reviewed. The current legacy page renderer still has a generic fallback for unknown paths.

## Phase 4 — Packages and engagement experience (21 November 2026)
- Added `src/package-content.js` with bilingual copy for Focused Project, Ongoing Partnership and Custom Engagement.
- Replaced the generic package cards with a decision-oriented page covering best fit, possible inclusions, scope principles, enquiry-to-kickoff and FAQs.
- Aligned the homepage package preview to the same engagement models.
- Added three engagement choices to the contact enquiry form and connected package CTAs to preselect the relevant choice.
- Added package-specific page title and description metadata.
- Prices remain unpublished; final deliverables, capacity, timing, responsibilities and fees must be confirmed in a written proposal.
- No new dependencies, backend integrations, guaranteed outcomes or production changes.
- Vercel preview deployment `dpl_BhAZxbDkCUE3s8EnPJksTHGxo5Lg` reached `READY` for commit `7a7d19ce95a20474cedbf23834bae142f5543416` at `https://swapnotech-2yab5t7l7-swapno3.vercel.app`. Vite transformed 32 modules and completed the production build in 1.18s. This confirms build/deployment completion only; browser/device QA remains pending.

## Phase 2 — Work and case-study experience (21 November 2026)
- Rebuilt the canonical Work index with an editorial opening, connected creative/technology positioning, five discipline entry points, a selected concept-study gallery and a project CTA.
- Added distinct category pages for Case Studies, Video, Graphics & Posters, Branding and Websites & Technology. Each page has a category-specific story, visual chapter, focus points, filtered gallery and links to related disciplines.
- Added /work/case-studies to the canonical route registry. The page clearly explains the publication standard and shows the planned case-study structure.
- Moved Work content into src/work-content.js; four current gallery items remain concept studies, not client project claims.
- Case-study detail routes remain unpublished because there is no approved project content/asset/permission bundle yet. The existing dynamic slug allowlist remains empty intentionally.
- No client names, confidential details, fabricated metrics, testimonials or results were added.
- Build preview was triggered after the initial Work page commits; final preview build for the latest branch HEAD is still being checked. Browser visual testing remains unavailable in this environment.
- This phase completes the Work information architecture and visual page foundation, not the final portfolio content or case-study detail publication.


## Phase 4 — Insights and editorial experience (21 November 2026)
- Added a structured bilingual editorial content module for three topics: Strategy, Creative and Technology.
- Rebuilt the Insights index with a featured article, category filters, keyword search, reading-time estimates, editorial cards and an empty-search state.
- Rebuilt article details with a linked table of contents, sectioned long-form copy, key takeaways, related articles and previous/next navigation.
- Added responsive and light/dark theme styles, reduced-motion-safe transitions and article-specific title/description metadata.
- Preserved canonical `/insights` routes and the existing legacy `/blog` aliases. No new dependencies or backend/CMS integrations.
- Preview deployment `dpl_4EsDQxSvpvnJS4jEUN4q4dyqqLKp` reached `READY` at `https://swapnotech-6khnz8rxc-swapno3.vercel.app` for commit `97c48347f96cfbce1872ff3c722bf6822bb1beee`. Vite transformed 33 modules; production build completed in 1.47s.
- This confirms build/deployment only. Browser visual, interaction and physical-device QA remain outstanding. Article copy needs editorial review before promotion.

## Delivered in this build
- Reworked homepage hero and storytelling sequence on `swapnotech-site-build`; Mars/Earth/Venus remains intro-only.
- Added responsive abstract 3D-style composition, sticky scroll-story stage, active-step transitions and reduced-motion fallbacks.
- Refined the homepage parallax map to target the actual Apex-inspired hero, brand story, sticky story stage, service rows, work visuals, process, packages, team, insights and CTA layers.
- Repaired desktop pointer response: it now targets the live abstract hero artwork core rather than legacy `.hero` / `.planet-main` selectors that are not present in the Apex homepage.
- Added homepage packages, team story and newsletter-information sections while retaining existing service, work and product components.
- Added the missing `WEBSITE_SPEC.md` to this branch and updated it to state that planetary imagery is intro-only.
- Phase 2 cinematic intro integrated with first-visit handling, mobile fallback, skip, reduced-motion bypass and chapter labels.
- Homepage work gallery with interactive category filters.
- Added collaboration/process section without inventing team identities.
- Added dedicated service detail routes.
- Added individual editorial article routes.
- Added policy and community-guideline draft pages.
- Added account access placeholders that explicitly remain inactive.
- Contact form now validates and prepares/copies an enquiry draft; it does not submit to a server.
- Added route-specific document titles and meta descriptions.
- Completed day/night theme token and component contrast overrides, plus visible keyboard focus states.
- No new runtime dependencies added.

## Creative direction implementation — 20 November 2026
- Applied the approved Graphite / Porcelain / Signal Orange website palette to the shared dark and light theme tokens. Official logo artwork and brand identity rules remain separate from UI surface colours.
- Added the custom SVG Swapno Explorer astronaut-engineer character to the homepage hero, with restrained float and pointer/parallax depth.
- Updated the intro to use the same hero character composition for the final reveal. Desktop Mars → Earth → Venus portal transitions are shortened; the intro now targets roughly 4 seconds under normal media playback and retains a 7.6-second safety timeout. Skip, first-visit handling and reduced-motion bypass remain.
- Added a lighter mobile intro fallback with the mascot and headline rather than forcing the full desktop video sequence.
- Added a persistent EN/BN selector with a reusable translation layer and a separate Bangla copy module (`src/translations.js`, 355 initial phrase entries; native-language review is still pending).
- Extended Bangla switching across the navigation, homepage storytelling and service sections, work filters/cards, packages, products, team, insights, footer, inner-page routes, contact form labels/placeholders/status, and route metadata.
- The contact form's prepared enquiry text now follows the selected language. It still only prepares/copies the enquiry; it does not send or store it.
- The selected language is passed into the cinematic intro. Intro chapter captions, mobile headline and skip control now support Bangla.
- Added Noto Sans Bengali for the site and intro, with Bengali-specific heading spacing and line-height rules.
- This is an implementation pass, not final localization sign-off. Bangla wording, terminology and line wrapping still need native-language review and visual QA.
- The intro's mascot frame is aligned to the homepage hero frame in source. Actual browser/device visual confirmation is still outstanding.

## Verification completed
- Latest Packages and Engagement Vercel preview deployment `dpl_BhAZxbDkCUE3s8EnPJksTHGxo5Lg` for commit `7a7d19ce95a20474cedbf23834bae142f5543416` reached READY at `https://swapnotech-2yab5t7l7-swapno3.vercel.app`.
- Vercel confirms the current preview deployment reached READY. This confirms deployment/build completion, not visual browser QA.
- No new runtime dependencies or backend/external integrations were added.
- Source check confirms the homepage component contains no Mars/Earth/Venus references; the intro remains in `public/intro.html`.
- Vercel production-mode build completed successfully on the development branch.
- The latest verified preview is isolated to `swapnotech-site-build`; production/main remain untouched.
- Reduced-motion and responsive CSS rules are present.
- Browser-based visual, interaction and physical-device checks have not yet been completed in this session.
- No production deployment was made.

## Known blockers and limitations
1. **Backend identity:** both connected Supabase account links currently list only a project named `Swapno AI`. It is not safe to assume that this is the Swapno Tech backend. No schema, auth, RLS, storage or data changes have been made.
2. **Lead delivery:** the contact form copies a prepared enquiry to the visitor's clipboard; it does not email, store or notify Swapno Tech.
3. **Authentication and admin:** login, registration, CMS and admin operations are inactive.
4. **Product functionality:** Creator Platform, Hosting, Swapno Founders and Website Solution are frontend product journeys, not connected production systems.
5. **Content:** portfolio entries are concept/category showcases, not real client case studies. Privacy, Terms and Community Guidelines are review drafts.
6. **Brand assets:** the intro currently uses typography rather than an unverified low-resolution logo crop. The approved high-resolution logo should be supplied from the official brand source.
7. **Language:** EN/BN switching is implemented across the public content and intro. Native-language review, copy completeness checks and visual line-wrap QA are still required.
8. **Visual QA:** the build is verified, but a complete visual review across physical devices and browsers has not been completed.

## Required before production
- Confirm the correct Swapno Tech Supabase project and environment ownership.
- Approve data model, auth roles, RLS, storage and lead-handling workflow.
- Confirm business contact channels and legal entity details.
- Supply approved logo and real portfolio/team assets.
- Complete native-language review of Bangla content and all public copy.
- Complete accessibility, SEO, responsive, browser and constrained-network testing.
- Confirm domain, production environment, backups and monitoring.
- Obtain explicit owner approval for production release.
