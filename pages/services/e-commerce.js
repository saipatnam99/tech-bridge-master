import Head from "next/head";
import React from "react";
import Image from "next/image";

const ECommerce = () => {
  return (
    <>
      <Head>
        <title>E-Commerce - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">E-Commerce</h1>
          <Image src="/images/services/e-commerce.avif" alt="E-Commerce" width={800} height={400} className="service-img" />
          
          <div className="service-details">
            <h2 className="sub-title">Our E-Commerce Solutions</h2>
            <ul>
              <li><strong>Custom Online Store Development:</strong> Build user-friendly and high-performance online stores.</li>
              <li><strong>Secure Payment Integration:</strong> Implement secure and seamless payment gateways.</li>
              <li><strong>Inventory & Order Management:</strong> Automate stock tracking and order processing.</li>
              <li><strong>Multi-Vendor Marketplace:</strong> Develop platforms for multiple sellers with efficient management.</li>
              <li><strong>Mobile Commerce:</strong> Optimize e-commerce sites for a seamless mobile shopping experience.</li>
              <li><strong>SEO & Conversion Optimization:</strong> Increase visibility and maximize conversions through data-driven strategies.</li>
              <li><strong>24/7 Support & Maintenance:</strong> Ensure smooth operations with continuous monitoring and updates.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ECommerce;
