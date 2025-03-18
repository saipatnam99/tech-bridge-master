import Layout from "@/components/common/Layout";
import Head from "next/head";
import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* Basic SEO Meta Tags */}
        <meta
          name="description"
          content="Tech Bridge - Master Next.js Solutions"
        />
        <meta
          name="keywords"
          content="Next.js, Web Development, JavaScript, React, Tech"
        />
        <meta name="author" content="Dhanaraja Y" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (for social sharing) */}
        <meta property="og:title" content="Tech Bridge" />
        <meta
          property="og:description"
          content="Master Next.js with the best solutions!"
        />
        <meta
          property="og:url"
          content="https://tech-bridge-master.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://tech-bridge-master.vercel.app/og-image.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Bridge" />
        <meta
          name="twitter:description"
          content="Master Next.js with the best solutions!"
        />
        <meta
          name="twitter:image"
          content="https://tech-bridge-master.vercel.app/og-image.jpg"
        />

        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tech Bridge",
              url: "https://tech-bridge-master.vercel.app",
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
