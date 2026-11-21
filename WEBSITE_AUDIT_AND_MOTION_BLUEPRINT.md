# Swapno Tech — Website Audit & Storytelling Motion Blueprint

Audit date: 21 November 2026  
Repository: `mi-murad/SwapnoTech`  
Branch inspected: `swapnotech-site-build`  
Inspected branch HEAD before this document: `994df8698aa106f5de1c9993378c3072ce754b3b`

## 1. Executive finding

The repository contains a developed homepage, a manually routed React/Vite application, a shared detail-page visual system, and frontend previews for several future products. It does **not** yet contain the complete website and operational systems described in `WEBSITE_SPEC.md`.

The most important distinction is that a URL resolving to the React app is not proof that its intended page exists. The current `GenericPage` component handles many routes, and unknown paths fall through to a generic “page being prepared” message. The canonical route map and the implemented route map are therefore not yet equivalent.

This is a source-code audit. Browser-based direct URL, refresh, responsive, visual and interaction tests were not available during this inspection. No runtime behaviour is marked as browser-verified.

## 2. Status definitions

- **Implemented (source):** a route-specific component or content path exists in source; still requires browser QA.
- **Partial:** a useful first pass exists, but page-specific content, interaction, content approval or depth is incomplete.
- **Placeholder / inactive:** the route is intentionally informational or unavailable; it is not a live operational feature.
- **Missing:** no route-specific implementation was found; it may currently fall through to the generic fallback.
- **Blocked:** implementation depends on approved content, backend identity, security decisions or an external provider.

## 3. Canonical route audit

| Canonical route | Source finding | Status | Remaining work |
|---|---|---|---|
| `/` | Dedicated cinematic homepage, intro gate, mascot hero, connected Understand → Make → Move story and full section sequence | Partial | Visual/device QA; refine motion choreography; approved real work/team assets; complete EN/BN review |
| `/about` | Dedicated about statement and values layout | Partial | Distinct editorial story, real team/roles, collaboration model, richer page-specific visual sequence |
| `/services` | Dedicated service-family list | Partial | Reconcile service taxonomy; add outcomes, deliverables, process, relevant approved work and FAQs |
| `/services/brand-design` | Alias to legacy brand-identity detail layout | Partial | Page-specific brand strategy/identity story, deliverable breakdown, examples and FAQ |
| `/services/content-production` | Alias to legacy creative-production detail layout | Partial | Video, short-form, motion and production workflow story; deliverables and approved examples |
| `/services/social-media-marketing` | Alias to legacy growth-marketing detail layout | Partial | Align scope with confirmed capabilities; explain planning, publishing and campaign boundaries |
| `/services/web-technology` | Alias to legacy websites-platforms detail layout | Partial | Separate website, software and platform capabilities; explain build/review/handoff |
| `/packages` | Dedicated three-choice engagement layout; no prices invented | Partial | Approved inclusions, boundaries, pricing decision and quote workflow |
| `/work` | Alias to legacy portfolio page with category filters and concept-study cards | Partial | Replace concept-only presentation with approved real work; make filters meaningful for published work |
| `/work/case-studies/:slug` | No dynamic case-study detail handler found | Missing | Build reusable case-study narrative and publish only approved projects with verified context/results |
| `/work/video` | No category-specific page handler found | Missing | Video portfolio with selected films, role, format and production notes |
| `/work/graphics` | No category-specific page handler found | Missing | Graphic/campaign gallery with filters and project context |
| `/work/branding` | No category-specific page handler found | Missing | Identity casework with rationale, system and applications |
| `/work/websites` | No category-specific page handler found | Missing | Website gallery with role, scope, responsive views and verified live links |
| `/insights` | Alias to legacy blog listing with three editorial starter articles | Partial | Publish-ready editorial CMS/content review, categories, search/filter and proper metadata |
| `/insights/:slug` | Three fixed article aliases resolve to legacy article layouts | Partial | Dynamic slug registry, approved editorial copy, author/date/reading metadata and related articles |
| `/contact` | Form validates and copies a prepared enquiry to clipboard | Partial | Real delivery/storage/notification only after backend and privacy approval; test validation and failure states |
| `/products/website-solution` | Product detail preview with a three-step concept journey | Partial | Template catalogue, guided setup, structured section editor, preview, drafts and safe publishing |
| `/products/creator-platform` | Product detail preview with profile/portfolio/discovery explanation | Partial | Profiles, search/discovery, routed contact, moderation, privacy and server-side eligibility |
| `/products/hosting` | Product detail preview with provider coordination explanation | Partial / blocked | Verified provider plans, pricing/renewal/terms and enquiry operations |
| `/community/founders` | Alias to a four-group informational community page | Partial / inactive | Applications, approval, group permissions, posts/comments, reporting, moderation and privacy |
| `/login` | Explicit inactive account-access page | Placeholder / inactive | Auth, roles, recovery, session handling and security review |
| `/register` | Explicit inactive registration page | Placeholder / inactive | Auth, consent separation, profile setup and abuse protection |
| `/privacy` | Draft policy content | Placeholder / blocked | Confirm legal entity, processors, retention, analytics and data-request contact; legal review |
| `/terms` | Draft terms content | Placeholder / blocked | Confirm service/payment/IP/cancellation terms and legal review |
| `/community/guidelines` | Alias to draft community guidelines | Partial / blocked | Final moderation policy, reports/appeals and operational enforcement |

**Routing note:** the source currently uses a manually selected pathname and a route-alias object. It does not use a router package. The current route table has compatibility aliases, but the generic fallback is not a proper 404 page. Navigation uses ordinary links, so route transitions reload the document. A future router migration is not recommended until a concrete need is demonstrated.

## 4. Cross-cutting implementation audit

| Area | Current evidence | Status / next action |
|---|---|---|
| Direct URL fallback | `vercel.json` SPA fallback was added in the previous milestone | Source change recorded; direct URL and refresh still need browser verification |
| Header/footer | Shared header/footer with route links, theme and language controls | Partial; test mobile menu, keyboard, Escape, route consistency and active states |
| Theme | Dark/light theme state and CSS tokens | Implemented in source; verify every page and component in both themes |
| Language | EN/BN selector, translation helper and initial translation dictionary | Partial; dynamic copy, metadata, controls and native Bangla review remain |
| Homepage motion | Sticky story stage, IntersectionObserver, scroll progress, parallax and pointer response | First pass exists; motion rhythm, mobile fallbacks and reduced-motion need visual QA |
| Inner-page motion | Shared reveal and a small set of parallax targets | Too generic for the full storytelling goal; page-specific sequences are needed |
| Portfolio content | Five concept/category studies, clearly labelled as concepts | Not publishable as client case studies; source authentic work and approvals |
| Team content | Team philosophy only; no invented identities | Real profiles, portraits and role confirmation blocked on supplied/approved content |
| Newsletter | Informational section only | Not connected; consent, subscription, confirmation and unsubscribe flows needed |
| Contact | Clipboard-only enquiry preparation | Not a live lead channel; backend/notification decision required |
| Product systems | Informational frontend journeys | No operational product backend in this repository |
| Auth/admin | Login/register explicitly inactive; no CMS/admin implementation found | Not built; requires backend and permission model |
| SEO/accessibility/performance | Meta title/description update, responsive and reduced-motion CSS present | Audit still required: canonical/OG, keyboard, contrast, headings, screen readers, media, Core Web Vitals |
| 404/error handling | Generic fallback content for unknown paths | Missing; implement a branded 404 and explicit route registry |
| Automated tests | Package scripts expose dev/build/preview only; no test script or test framework | No automated route/component tests found in package configuration |

## 5. Storytelling and motion blueprint

The motion principle is **one connected narrative, not a pile of animated cards**. Every page uses the approved Graphite / Porcelain / Signal Orange system and typography hierarchy. Orange remains a restrained signal. Motion should connect adjacent content through composition, depth, scale, masking, pinned scenes and controlled transitions. Use transform/opacity first, IntersectionObserver and CSS; provide static/reduced-motion alternatives. Avoid scroll hijacking and heavy WebGL.

### Global shell
- Header: compact transformation on scroll; clean mobile panel; active-route indication; no layout jump.
- Page opening: each page begins with a distinct editorial proposition, not the same generic hero.
- Section transitions: shared visual grammar (line, frame, grid, mask, depth) that carries one visual idea into the next section.
- Footer: quiet closing scene and one clear project CTA.
- Intro remains a separate first-visit opening: Mars → Earth → Venus only there. Do not repeat planetary imagery in any page body.

### Page-specific direction

| Page / page family | Narrative sequence | Motion and visual treatment |
|---|---|---|
| Home | Possibility → Swapno identity → Understand → Make → Move → proof → next step | Keep the existing hero/sticky story as foundation. Improve scene continuity, scroll timing and transitions between service/work/process/product sections. The mascot is a hero anchor, not a repeated decoration. |
| About | Why Swapno exists → how the team thinks → how people collaborate → invitation | Editorial chapter layout; a single evolving line/system connects principles to team workflow. Reveal real contributors one at a time only when verified. |
| Services index | Business need → four service families → how they combine → start a project | Four distinct visual chapters, each with its own visual metaphor and deliverable preview; service rows transform into a connected service map rather than generic cards. |
| Brand & Design | Understand the business → positioning → identity system → real-world applications | Typography-led reveal, grid construction, logo/colour/type system assembly, then application sequence. No fake brand client. |
| Content & Production | Brief → concept → storyboard → production → edit/delivery | Timeline or film-strip choreography; frames assemble into a final composition. Use approved work or clearly marked process diagrams. |
| Social Media & Digital Marketing | Audience → message → channel plan → content/campaign → learning | Signal/pathway animation showing how message adapts across channels; avoid implying guaranteed results or unconfirmed media-buying services. |
| Web & Technology | User need → structure → interface → build → responsive experience | Layered wireframe-to-interface transition, responsive viewport choreography and interaction demo; no fake live integrations. |
| Packages | Choose scope → understand inclusions → compare engagement → request quote | Calm comparison layout; reveal inclusions progressively. No animated price counters or fabricated pricing. |
| Work index | Explore categories → curated selected work → open a project | Filter transitions should rearrange actual items; use image-led editorial gallery and clear category context. Hide unpublished/fabricated items. |
| Case study detail | Context/problem → insight → approach → execution → verified outcome → next step | Long-form project film: large hero asset, pinned chapter index, before/after only when authentic, deliverables gallery and evidence-led outcome panel. |
| Work category pages | Category thesis → curated examples → project details | Each category gets a unique opening composition and gallery rhythm; video uses cinematic previews, graphics uses grid/layout reveals, branding uses system applications, websites uses responsive device frames. |
| Insights index | Editorial point of view → topics → selected articles | Magazine/editorial rhythm, strong typography, category navigation and subtle reading-progress cues. |
| Insight article | Thesis → sections → supporting visuals → takeaway → related reading | Reading-first layout; restrained progress line, inline visual explanations and related-article handoff. Motion must never interrupt reading. |
| Contact | Invitation → scope prompts → enquiry → clear next step | Minimal high-clarity form; step-by-step reveal only if it improves usability. Show honest status and a usable fallback if submission service is unavailable. |
| Website Solution | Choose a foundation → shape pages → preview → publish | Product walkthrough with a real editor prototype: section blocks assemble into a responsive page. Use actual interactions once implemented; do not animate fake buttons. |
| Creator Platform | Create profile → present work → discovery → opportunity | Profile card builds from verified fields; portfolio items reveal in a curated grid; discovery animation should reflect actual search/filter capabilities. |
| Hosting | Needs → compare verified plans → understand terms → enquire/setup | Clear comparison and setup timeline; use provider logos/prices only with permission and current verified data. |
| Swapno Founders | Apply → review → membership → group participation → contribution | Separate community identity; show four groups with distinct permissions. Illustrate moderation and privacy, not a generic social-feed mockup pretending to be live. |
| Login/Register | Secure entry → authenticate → account setup/consent | Quiet, accessible utility layout; prioritize security, clarity and error states over cinematic motion. |
| Policies/guidelines | Purpose → clear rules → rights/responsibilities → contact | Calm document typography and navigable sections; no distracting animation. |
| 404 | Route not found → recover to relevant destination | Branded but lightweight visual; clear home/work/services links and no generic “coming soon” fallback. |

## 6. Systems delivery blueprint

The public pages and the systems behind them are separate workstreams.

1. **Content/admin foundation:** manage services, packages, approved portfolio/case studies, insights, product copy and enquiries; role-based access and audit history.
2. **Identity/security foundation:** correct Swapno Tech backend project, environments, auth, roles, RLS, storage, validation, rate limits and audit logs. The connected project named Swapno AI must not be reused without explicit confirmation.
3. **Enquiry/newsletter:** real lead delivery and storage; newsletter consent independent of account creation; confirmation and unsubscribe.
4. **Website Solution MVP:** template catalogue, guided setup, safe section types, responsive preview, draft/published versions, rollback-safe publishing and add-on request workflow.
5. **Creator Platform MVP:** profiles, skills, portfolio, discovery/search, routed contact, moderation and server-side profile-completion eligibility. Private contact data and metrics stay private.
6. **Hosting workflow:** verified provider plans, terms, enquiry, manual setup/migration coordination; do not imply an automated hosting control panel.
7. **Swapno Founders:** application/approval, distinct verified-founder status, four group permission models, posts/comments/reports/moderation and privacy controls.
8. **QA/release:** route tests, browser/device review, accessibility, SEO, performance, backups, monitoring and explicit owner approval before production.

## 7. Recommended build order

1. Finish the route registry, real 404 and canonical/legacy route behaviour; browser-test direct open, refresh and navigation.
2. Complete page-specific layouts for About, Services/service details, Packages, Work/category/case-study, Insights/article and Contact.
3. Complete public product and community pages with honest capability states.
4. Approve and source real team, portfolio, brand and editorial assets; complete English/Bangla review.
5. Prepare backend decision and security design separately; do not connect an unverified project.
6. Build the operational systems incrementally, starting with enquiry/content administration and identity/security foundations.
7. Run full QA and request production approval.

## 8. Decisions and dependencies requiring owner input later

These are not blockers to this source audit, but must be confirmed before the corresponding build:
- Which Swapno Tech-owned Supabase project/environment is correct, or whether a new one should be created.
- Approved real portfolio/case-study assets and what client outcomes may be published.
- Official logo asset, team names/roles/portraits and verified contact channels.
- Final package inclusions/pricing and hosting provider/plan data.
- Legal entity, privacy/terms wording and newsletter/analytics consent requirements.
- Whether the first public release should include only informational product pages or an operational MVP for any product.

## 9. Verification boundary

This audit was produced by inspecting the branch source and project documentation. It did not run the app in a browser, execute `npm run build`, submit forms, test direct routes, or inspect physical devices. Therefore:
- “Implemented” means present in source, not proven in a browser.
- The previous Vercel READY status means the deployment build completed, not that every route or interaction passed QA.
- No production deployment, backend integration, database migration or architecture migration was performed as part of this audit.
