const { getContentfulData } = require('lib/contentfulHelpers');
const sitemap = require('express-sitemap');
const w3cDateTimeFormat = require('lib/w3cDateTimeFormat');

module.exports = (isBuild) => {
  return getContentfulData()
  .then( (data) => {
    const pages = {
      '/': { page: '/', query: { data } },
      '/404': { page: '/404', query: { data } },
      '/about': { page: '/about', query: { data } },
      '/community': { page: '/community', query: { data } },
      '/equal-housing-opportunity': { page: '/equal-housing-opportunity', query: { data } },
      '/membership': { page: '/membership', query: { data } },
      '/privacy-policy': { page: '/privacy-policy', query: { data } },
      '/real-estate-partners': { page: '/real-estate-partners', query: { data } },
      '/terms-of-service': { page: '/terms-of-service', query: { data } },
      // The extra apply-form with the / is to support the HTML5 hash
      '/apply-form': { page: '/apply-form', query: { data } },
      '/apply-form/': { page: '/apply-form', query: { data } },
      '/agreement-update-notices': { page: '/agreement-update-notices', query: { data } }
    }
    data.cities.forEach((city) => {
      pages[`/${city.urlSlug}`] = { page: '/city', query: { city, data } };
    });
    data.homes.forEach((home) => {
      const page = home.isPendingHome ? '/pending-product-page' : '/product-page';
      pages[`/${home.urlSlug}`] = { page: page, query: { home, data } };
    });
    data.partners.forEach((partner) => {
      pages[`/${partner.urlSlug}`] = { page: '/', query: { data, partner, pageType: 'partner' } };
    });

    const route = {};
    const map = {};
    const dateTime = w3cDateTimeFormat(new Date());
    Object.keys(pages).forEach( (url) => {
      route[url] = {
        lastmod: dateTime,
        changefreq: 'monthly',
        priority: 0.5
      };
      map[url] = ['get'];
    });

    const outputDirName = isBuild ? 'out' : 'static';
    sitemap({
      sitemap: `${outputDirName}/sitemap.xml`,
      robots: `${outputDirName}/robots.txt`,
      sitemapSubmission: '/sitemap.xml',
      http: 'https',
      url: 'www.common.com',
      map,
      route: {
        '/agreement-update-notices': {
          hide: true,
        }
      }
    }).toFile();
    return pages;
  })
  .catch( (err) => {
    console.error(err);
    throw new Error(err);
  });
}
