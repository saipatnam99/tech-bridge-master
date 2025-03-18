export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://tech-bridge-master.vercel.app/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://tech-bridge-master.vercel.app/about</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://tech-bridge-master.vercel.app/contact</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}
