# Swapno Tech — Implementation Status

Last updated: 17 November 2026  
Repository: `mi-murad/SwapnoTech`  
Working branch: `swapnotech-site-build`  
Preview: https://swapnotech-git-swapnotech-site-build-swapno3.vercel.app

## Delivered in this build
- Reworked homepage hero and storytelling sequence on `swapnotech-site-build`; Mars/Earth/Venus remains intro-only.
- Added responsive abstract 3D-style composition, sticky scroll-story stage, active-step transitions and reduced-motion fallbacks.
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
- Added route-specific document titles and meta descriptions.\n- Completed day/night theme token and component contrast overrides, plus visible keyboard focus states.\n- No new runtime dependencies added.

## Verification completed
- Vercel preview deployment for homepage code commit `0784fc4` reached READY.
- Vercel build log confirms `vite build` succeeded: 27 modules transformed; JS 190.33 kB (59.51 kB gzip), CSS 48.46 kB (10.65 kB gzip), HTML 0.88 kB.
- Source check confirms the homepage component contains no Mars/Earth/Venus references; the intro remains in `public/intro.html`.
- Vercel production-mode build completed successfully on the development branch.
- Latest deployment state: READY.
- Vite output: 186.01 kB JavaScript (58.35 kB gzip), 32.49 kB CSS (7.65 kB gzip), HTML 0.88 kB.
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
7. **Language:** the current site is English. The Bangla edition still needs separately authored and reviewed copy.
8. **Visual QA:** the build is verified, but a complete visual review across physical devices and browsers has not been completed.

## Required before production
- Confirm the correct Swapno Tech Supabase project and environment ownership.
- Approve data model, auth roles, RLS, storage and lead-handling workflow.
- Confirm business contact channels and legal entity details.
- Supply approved logo and real portfolio/team assets.
- Review Bangla content and all public copy.
- Complete accessibility, SEO, responsive, browser and constrained-network testing.
- Confirm domain, production environment, backups and monitoring.
- Obtain explicit owner approval for production release.
