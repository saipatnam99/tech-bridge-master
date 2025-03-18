import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function getServerSideProps({ res }) {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    // Add more pages here
  ];

  const stream = new SitemapStream({
    hostname: "https://tech-bridge-master.vercel.app",
  });

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream));

  res.setHeader("Content-Type", "application/xml");
  res.write(xmlString);
  res.end();

  return {
    props: {}, // Required to prevent Next.js errors
  };
}

export default function Sitemap() {
  return null;
}
