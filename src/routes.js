// Canonical public routes and backwards-compatible URL aliases for Swapno Tech.
export const canonicalRoutes = [
  '/', '/about', '/services',
  '/services/brand-design',
  '/services/content-production',
  '/services/social-media-marketing',
  '/services/web-technology',
  '/packages', '/work',
  '/work/video', '/work/graphics', '/work/branding', '/work/websites',
  '/insights', '/contact',
  '/products/website-solution', '/products/creator-platform', '/products/hosting',
  '/community/founders', '/login', '/register', '/privacy', '/terms',
  '/community/guidelines',
];

// Only published editorial slugs belong here. Add a case-study slug only after
// its approved project content is ready for public release.
export const publishedInsightSlugs = [
  'clearer-digital-foundation',
  'design-that-earns-attention',
  'from-idea-to-useful-product',
];
export const publishedCaseStudySlugs = [];

export const legacyRouteAliases = {
  '/portfolio': '/work',
  '/blog': '/insights',
  '/founders': '/community/founders',
  '/community-guidelines': '/community/guidelines',
  '/services/brand-identity': '/services/brand-design',
  '/services/content-campaigns': '/services/content-production',
  '/services/creative-production': '/services/content-production',
  '/services/growth-marketing': '/services/social-media-marketing',
  '/services/websites-platforms': '/services/web-technology',
  '/services/business-technology': '/services/web-technology',
  '/work/graphics-posters': '/work/graphics',
  '/work/websites-technology': '/work/websites',
  '/blog/clearer-digital-foundation': '/insights/clearer-digital-foundation',
  '/blog/design-that-earns-attention': '/insights/design-that-earns-attention',
  '/blog/from-idea-to-useful-product': '/insights/from-idea-to-useful-product',
};

const legacyRenderPaths = {
  '/work': '/portfolio',
  '/insights': '/blog',
  '/community/founders': '/founders',
  '/community/guidelines': '/community-guidelines',
  '/services/brand-design': '/services/brand-identity',
  '/services/content-production': '/services/creative-production',
  '/services/social-media-marketing': '/services/growth-marketing',
  '/services/web-technology': '/services/websites-platforms',
};

function cleanPath(pathname = '/') {
  if (!pathname || pathname === '/') return '/';
  const withoutTrailingSlash = pathname.replace(/\/+$/, '');
  return withoutTrailingSlash || '/';
}

export function resolveRoute(pathname = '/') {
  const requestedPath = cleanPath(pathname);
  const canonicalPath = legacyRouteAliases[requestedPath] || requestedPath;
  const insightMatch = canonicalPath.match(/^\/insights\/([^/]+)$/);
  const caseStudyMatch = canonicalPath.match(/^\/work\/case-studies\/([^/]+)$/);
  const insightIsPublished = Boolean(insightMatch && publishedInsightSlugs.includes(insightMatch[1]));
  const caseStudyIsPublished = Boolean(caseStudyMatch && publishedCaseStudySlugs.includes(caseStudyMatch[1]));
  const isKnown = canonicalRoutes.includes(canonicalPath) || insightIsPublished || caseStudyIsPublished;

  let renderPath = legacyRenderPaths[canonicalPath] || canonicalPath;
  if (insightIsPublished) renderPath = '/blog/' + insightMatch[1];

  return {
    requestedPath,
    canonicalPath,
    renderPath,
    isKnown,
    isAlias: pathname !== requestedPath || requestedPath !== canonicalPath,
    routeType: insightIsPublished ? 'insight-detail' : caseStudyIsPublished ? 'case-study-detail' : 'page',
  };
}
