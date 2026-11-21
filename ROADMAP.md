# Swapno Tech — Active Delivery Roadmap

This roadmap follows the owner-approved delivery sequence for the current website build. Work is performed on `swapnotech-site-build`; production remains protected until explicit approval.

## Phase 2 — Cinematic introduction
**Status: Implemented; preview build verified.**
- Adapt the supplied planetary/portal experience for Swapno Tech.
- Creative → Technology → Growth chapter labels.
- Desktop scene transition, mobile fallback, skip, reduced-motion bypass and first-visit behaviour.
- Target opening duration under 8.2 seconds; intro must never block access to the site.

## Phase 3 — Homepage storytelling
**Status: First cinematic storytelling pass implemented; visual/device review pending.**
- Mars/Earth/Venus narrative is confined to the intro; homepage no longer repeats planetary destinations or space imagery.
- Rebuilt homepage hero with layered abstract composition, expressive typography and branded motion.
- Added connected scroll story: Understand → Make → Move, with a sticky visual stage and active-step transitions.
- Homepage sequence now includes identity, services, portfolio, process, packages, three products, team approach, insights, newsletter information and final CTA.
- Apex Motion Studio is used as a motion/storytelling reference, not copied assets or layouts.
- Portfolio categories: Case Studies, Video, Graphics & Posters, Branding, Websites & Technology.
- Concept studies are clearly labelled; no invented client results or testimonials.

## Phase 4 — Complete public website
**Status: Route registry, branded 404, editorial Work pages, four dedicated service families and About storytelling implemented; approved case-study publication and visual QA remain pending.**
- Added `src/routes.js` as the central canonical route registry, with the approved public page map and an explicit allowlist for published insight and case-study slugs.
- Legacy paths now normalize to canonical URLs (including trailing-slash cleanup) while preserving query strings and fragments.
- Added dedicated filtered work routes for Video, Graphics, Branding and Websites; unknown or unpublished slugs render a branded 404 instead of the generic “page being prepared” fallback.
- Vercel SPA rewrite remains in place for direct route loads and refreshes. Browser-level direct-load, navigation and visual QA are still pending.
- Home, About, Services, four service-family detail pages and Packages now have page-specific storytelling and bilingual content; Work, Insights and Contact retain their existing experiences.
- Website Solution, Creator Platform, Hosting and Swapno Founders.
- Privacy, Terms and Community Guidelines draft pages.
- Login and Registration remain clearly marked as inactive until backend and privacy workflows exist.
- English and Bangla copy are available across the Services and About pages; full-site language completeness and native Bangla editorial review remain outstanding.
- Final team profiles, approved logo artwork, real portfolio assets and approved published case studies remain content dependencies.

### Services & About storytelling milestone (21 November 2026)
- Replaced the six loosely grouped legacy service links with four customer-facing service families: Brand & Design, Content & Production, Social Media & Digital Marketing, and Web & Technology.
- Added a bilingual content model in `src/service-content.js` for audience fit, deliverables, expected outputs, process stages and related capabilities.
- Built a distinct Services overview, four service detail experiences and a rebuilt About page.
- Updated homepage service navigation and page-specific title/description metadata.
- No new dependencies, backend integrations, pricing, client claims or guaranteed results were introduced.

### Packages & Engagement milestone (21 November 2026)
- Added `src/package-content.js` with bilingual content for three engagement models: Focused Project, Ongoing Partnership and Custom Engagement.
- Replaced the generic three-card Packages page with a decision-oriented experience explaining best fit, possible inclusions, scope principles, enquiry-to-kickoff steps and FAQs.
- Aligned the homepage Packages preview with the same engagement models.
- Added enquiry form choices so a visitor can preselect the engagement type from a Packages CTA.
- Kept pricing unpublished. Scope, deliverables, timeline, responsibilities and fees must be proposed and approved before work starts.
- No new dependencies, backend integrations, fabricated deliverables, guarantees or production changes. Preview build and browser QA pending.

## Phase 5 — Functional implementation
**Status: Frontend interactions added; backend blocked pending correct project.**
- Portfolio category filters and article/service navigation are interactive.
- Contact form validates and prepares/copies an enquiry; it does not transmit or store a lead.
- Authentication, admin/CMS, newsletter, creator profiles, community membership/moderation, hosting plan management and Website Solution publishing are not active.
- The connected Supabase accounts currently expose a project named **Swapno AI**, not a verified Swapno Tech project. Do not connect or modify Swapno AI as a substitute.
- Before backend work: identify/create the correct Swapno Tech Supabase project, confirm environments, schema, roles, RLS, storage and data ownership. Any paid project, schema migration or production integration requires explicit approval.

## Phase 6 — Quality assurance
**Status: Packages & Engagement preview build reached READY; browser/device QA pending.**
- Latest Vercel preview build completed successfully for the Packages and Engagement milestone; browser-based visual and interaction checks are still outstanding.
- Latest measured build output: JS 186.01 kB (58.35 kB gzip); CSS 32.49 kB (7.65 kB gzip).
- Responsive and reduced-motion rules are present in source.
- Still required: real phone/desktop review, route and interaction checks, accessibility review, SEO metadata audit, media/network testing and browser console review.

## Phase 7 — Production readiness
**Status: Not approved / not released.**
- Confirm domain, contact channels, final legal copy, analytics/consent requirements, environment variables, security and backups.
- Complete backend and operational readiness checks.
- Run final staging review and obtain explicit owner approval before production deployment.

## Product MVP scope after the public site
- **Website Solution:** templates, guided setup, structured section editor, responsive preview, drafts, safe publishing and add-on requests.
- **Creator Platform:** profiles, portfolios, discovery/search, routed contact, moderation and server-side eligibility.
- **Hosting:** verified provider plans, clear terms, enquiries and manual coordination.
- **Swapno Founders:** application/approval, four groups, permissions, posts/comments, reports, moderation and privacy.
- Advanced CV builder, reviewed AI writing, PDF export and expanded community features remain later enhancements.

## Working rules
- Preserve existing work and make small, testable changes.
- Prefer existing subscriptions and lightweight dependencies.
- Do not invent prices, clients, testimonials, team credentials, metrics or provider claims.
- Do not expose secrets or service-role keys in browser code.
- Ask before major architecture changes, paid services, external integrations, security-sensitive changes, destructive operations, material database migrations and production releases.
