import Head from "next/head";
import React from "react";
import Image from "next/image";

const EPublish = () => {
  return (
    <>
      <Head>
        <title>E-Publish Services - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">E-Publish Services</h1>
          <Image src="/images/services/e-publish.webp" alt="E-Publish Services" width={800} height={400} className="service-img" />
         
          <div className="service-details">
            <h2 className="sub-title">Our E-Publishing Solutions</h2>
            <ul>
              <li><strong>Copy Editing & Proofreading:</strong> Ensure clarity, coherence, and accuracy in all written materials.</li>
              <li><strong>eBook Creation:</strong> Design and format engaging digital books for various platforms.</li>
              <li><strong>Graphic Design:</strong> Create stunning visuals for branding, marketing, and publications.</li>
              <li><strong>Content Development:</strong> Craft SEO-friendly content tailored for websites, blogs, and digital publications.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EPublish;
