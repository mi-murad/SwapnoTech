# Technical Architecture

## Approved direction
React + Vite frontend; Supabase backend direction; GitHub source control; Vercel preview/deployment direction; Figma design and Canva brand assets. This is not evidence that services are configured or deployed.

## Application areas
Public agency website; authenticated customer/creator experiences; Swapno Founders; staff admin; Website Solution builder/publishing; shared identity, permissions, notifications and content services. Keep modules separated.

## Data domains, introduced incrementally
Identity/profiles/roles/consents; agency content; services/packages; portfolio/blog; leads/enquiries; creator profiles/skills/projects; communities/memberships/posts/moderation; hosting plans/enquiries; website templates/sites/pages/sections/publications/add-ons; newsletter; notifications/settings/audit logs.

## Current contact intake implementation
- Dedicated Supabase project: `Swapno Tech`, project ref `djpceifjuzymqlhiakkn`, region `ap-south-1`. Keep it separate from the Swapno AI project.
- `public.contact_leads` stores validated enquiry details, consent timestamp, locale, source path and workflow status.
- `private.contact_rate_limits` stores only hashed IP identifiers and short-window counters.
- Public contact submission is handled by the `submit-contact-enquiry` Edge Function. The function uses the project secret key server-side; no secret key belongs in Vite/browser code.
- The function validates origin, payload lengths, email, consent and honeypot; applies a 5-submissions-per-10-minute IP-hash rate limit; and inserts only through the server-side function.
- RLS is enabled on both tables. No public/anonymous read or write policies are created. The rate-limit RPC is executable only by `service_role`.
- Contact form currently targets the active Vercel preview hostname pattern. Add the verified production domain to `CONTACT_ALLOWED_ORIGINS` before enabling the form on that domain.
- Email notifications and staff/admin inbox are not configured yet. Leads are stored in Supabase; staff access requires a separately designed authenticated admin workflow.

## Security
Enable and test RLS on exposed tables. Enforce ownership and permissions server-side. Never expose service-role/private API keys in browser code. Separate public published media from private uploads. Validate uploads and URLs. Protect admin actions and audit sensitive changes. Rate-limit public forms and community posting. Calculate creator completion and eligibility server-side. Never trust client-submitted roles or verification flags.

## Website publishing
Use versioned template definitions and structured page/section data. Render only approved section types with trusted components. Keep drafts and published versions separate; failed publishing must not destroy last good publication.

## Environments and SEO
Separate development, preview/staging and production. Never commit secrets. Audit Vite route SEO/crawler rendering before considering prerender/SSR. Framework migration requires evidence and approval.
