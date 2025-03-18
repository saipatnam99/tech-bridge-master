import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    // Add more pages here
  ];

  const stream = new SitemapStream({
    hostname: "https://tech-bridge-master.vercel.app",
  });

  res.writeHead(200, { "Content-Type": "application/xml" });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream));
  res.end(xmlString.toString());
};
