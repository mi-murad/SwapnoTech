# Swapno Tech — Project Brief

## Business and positioning
Swapno Tech is a digital marketing, creative and technology agency. It helps entrepreneurs, startups, ecommerce/F-commerce businesses and growing companies build brands, produce content, market their offers and create the digital systems that support business growth.

The website must communicate a real business partner—not a generic technology startup, a space-themed product, or a fictional creative studio. The core story is the connection between strategy, brand, content, campaigns, websites and useful digital systems. Explain what Swapno does, who it helps, what a client can engage the team to do, how the work proceeds, and how to start a project.

Use the approved brand promise from the official identity deck: **Building Brands. Growing Systems.** Do not invent client results, guaranteed outcomes, prices, testimonials, team biographies or service promises.

## Approved brand and experience
- Mobile-first, professional, modern, futuristic, confident and human.
- Warm light #FFF7CE and orange #FF6300 are the core colours.
- Use the official logo artwork as supplied. Never redraw, stretch, rotate or recolour it.
- Bold modern display typography, clean readable sans-serif supporting text, clear hierarchy, structured grids, sharp alignment and purposeful negative space.
- Day and night themes must both be intentionally designed.
- Cinematic motion and 3D are welcome when they tell the story and remain fast, readable and useful. No cartoon, toy-like, childish or clip-art visuals.
- Never allow text to overlap, clip, collide with controls or become unreadable over moving imagery.
- Phone experience is the primary design target. Desktop may add richer visual depth but must not change the clarity or content hierarchy.

## Agency service scope
Build the service taxonomy from Swapno Tech's known capabilities:
1. Brand strategy and identity.
2. Graphic design, campaign creatives and social media design.
3. Video editing, short-form content, animation and motion graphics.
4. Content planning and production.
5. Social media management and digital marketing campaigns.
6. Website design/development, software and digital platforms.
7. Business/page launch support and related digital services.

Present services as connected capabilities, not as unrelated menu items. Marketing is a business system: clear offer and audience → brand and content → distribution/campaigns → website or conversion destination → review and improvement. Only describe a channel or deliverable when Swapno actually offers it. Do not add SEO, PPC, influencer management, guarantees or specialist services as fact unless verified.

## Approved products and community
Exactly three core products:
1. Website Solution — guided template/section-based website builder, content editing, responsive preview, drafts and publishing; optional add-ons are scoped and reviewed.
2. Creator Platform — searchable directory and professional profiles/portfolios, with private contact information protected and client enquiries routed through Swapno.
3. Hosting Packages — verified third-party provider plans, transparent renewal terms, enquiry and manual coordination. Swapno is not an infrastructure provider.

Swapno Founders is a separate community area, not a fourth core product and not part of the Creator community. It supports aspiring entrepreneurs, founders and business owners through four moderated groups: Founder Announcements, Open Discussion, Founders' Circle, and Opportunities & Collaboration.

## Homepage experience
The homepage sequence is specified in WEBSITE_SPEC.md. It begins with a simplified cinematic intro and connected hero, then explains the agency, its three expertise narratives, services, selected work, process, packages, products, team, insights and contact.

Mars, Earth and Venus are narrative destinations—not literal science content or game levels:
- Mars — Create & Execute.
- Earth — Build & Grow.
- Venus — Brand & Connect.
These labels must be supported by Swapno's actual services and should not invent new offers.

## Public pages
Home; About; Services overview and individual service details; Packages; Work/Portfolio, categories and case studies; Insights/Blog, categories and articles; Contact; Website Solution; Creator Platform; Hosting; Swapno Founders; Login; Registration; Privacy; Terms; Community Guidelines.

## Authenticated and admin areas
Customer and creator dashboards, creator profiles/portfolios/CV builder, customer website management, founder community, and staff admin are separate protected experiences. Build these in the approved product phases; do not fake a working backend or present static UI as functional account management.

## Intro and motion
Use the supplied planet-jumping.html as a motion/interaction reference. Preserve its core choreography in a brand-appropriate, simplified form: cinematic video preloader, progress indication, logo reveal and dock into the header, masked portal reveal into the hero, and connected planetary scenes. The intro must be skippable, capped at about 8 seconds, mobile-aware, reduced-motion-aware and must never wait indefinitely for media.

The hero must feel like the next scene of the intro—not a disconnected template. Scroll transitions should feel continuous and intentional without hijacking normal scrolling. Do not reuse the unrelated brand's logo, labels, facts or identity.

## Content and truth
- Use authentic Swapno business information and approved brand language.
- Do not invent portfolio entries, client logos, case-study metrics, testimonial quotes, team members, contact details, package prices or partner hosting claims.
- A portfolio item must have real source material and an approved summary before publication. Performance figures need a verified reporting period and source.
- English and Bangla are first-class editorial versions. Bangla is separately authored in natural, fluent and professional language—not literal machine translation.
- Account registration and newsletter subscription remain separate. Account creation never auto-subscribes.

## Performance, accessibility and security
Prioritise fast initial rendering. Load the intro asset progressively; defer below-fold media and 3D; optimise images/video; code-split heavy experiences; respect reduced motion; maintain keyboard navigation, visible focus, contrast, semantic structure and labelled forms. Test on 360–390px phones and desktop widths, both themes and both languages. Protect data and permissions server-side when the backend is introduced.

## Technology and release
React + Vite, GitHub and Vercel feature-branch previews are the current approved foundation. Supabase is the backend direction but is not yet configured. Keep production `main` unchanged until a complete review and explicit production approval.

See DESIGN_SYSTEM.md, WEBSITE_SPEC.md, ARCHITECTURE.md, ROADMAP.md and DEVELOPMENT_RULES.md.
