import { services } from '@/data/services';
import { locations } from '@/data/locations';

export async function GET() {
  const baseUrl = 'https://www.cosmetictreatment.co.uk';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/treatments', priority: '0.9', changefreq: 'weekly' },
    { url: '/locations', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/reviews', priority: '0.7', changefreq: 'weekly' },
    { url: '/free-quote', priority: '0.8', changefreq: 'monthly' },
  ];

  // Build XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  staticPages.forEach((page) => {
    xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add service pages
  services.forEach((service) => {
    xml += `  <url>
    <loc>${baseUrl}/${service.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Add location pages
  locations.forEach((location) => {
    xml += `  <url>
    <loc>${baseUrl}/locations/${location.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Add location + service combination pages
  locations.forEach((location) => {
    services.forEach((service) => {
      xml += `  <url>
    <loc>${baseUrl}/locations/${location.slug}/${service.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });
  });

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
