import Head from "next/head";
import React from "react";
import Image from "next/image";

const Branding = () => {
  return (
    <>
      <Head>
        <title>Branding - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">Branding & Creative Services</h1>
          <Image src="/images/services/branding.jpeg" alt="Branding & Creative Services" width={800} height={400} className="service-img" />
          {/* <p className="description">
            We create compelling brand identities and creative assets that elevate your business presence, strengthen engagement, and drive customer loyalty.
          </p> */}
          <div className="service-details">
            <h2 className="sub-title">Our Branding & Creative Solutions</h2>
            <ul>
              <li><strong>Logo & Brand Identity Design:</strong> Craft a unique and memorable brand image.</li>
              <li><strong>Marketing Collateral Design:</strong> Create business cards, brochures, and banners for a professional impact.</li>
              <li><strong>Social Media Branding:</strong> Design engaging visuals and strategies for online brand consistency.</li>
              <li><strong>Website & UI/UX Design:</strong> Develop aesthetically pleasing and user-friendly digital experiences.</li>
              <li><strong>Content & Copywriting:</strong> Craft compelling brand messages that resonate with your audience.</li>
              <li><strong>Rebranding & Brand Strategy:</strong> Refresh and reposition your brand for maximum impact.</li>
              <li><strong>Video & Motion Graphics:</strong> Create engaging animations and promotional videos.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branding;
