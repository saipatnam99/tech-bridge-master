import Head from "next/head";
import React from "react";
import Image from "next/image";

const Digital = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">Digital Marketing</h1>
          <Image src="/images/services/DIGITAL-MARKETING.jpg" alt="DIGITAL-MARKETING" width={800} height={400} />
         
          <ul className="service-details">
            <h2 className="sub-title"> We help brands establish a strong online presence.</h2>
            <li><strong>Custom Website Development</strong> – Feature-rich, tailored business websites.</li>
            <li><strong>Website Redesign</strong> – Optimize UX, SEO, and site performance.</li>
            <li><strong>E-Commerce Development</strong> – Secure payment gateways and inventory tracking.</li>
            <li><strong>24/7 Support & Maintenance</strong> – Continuous security and performance monitoring.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Digital;
