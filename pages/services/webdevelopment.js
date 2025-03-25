import Head from "next/head";
import React from "react";
import Image from "next/image";

const WebDevelopment = () => {
  return (
    <>
      <Head>
        <title>Web Development - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">Web Development</h1>
          <Image src="/images/services/web.jpg" alt="Web Development" width={800} height={400} className="service-img" />
         
          <div className="service-details">
            <h2 className="sub-title">Our Web Development Services</h2>
            <ul>
              <li><strong>Custom Website Development:</strong> Feature-rich, tailored business websites with seamless user experience.</li>
              <li><strong>Website Redesign:</strong> Improve UI/UX, optimize for SEO, and enhance site performance.</li>
              <li><strong>E-Commerce Development:</strong> Build secure online stores with payment gateways, inventory tracking, and shopping cart solutions.</li>
              <li><strong>CMS Development:</strong> WordPress, Drupal, and custom CMS solutions for easy content management.</li>
              <li><strong>Web Application Development:</strong> Scalable and secure web applications for various industries.</li>
              <li><strong>24/7 Support & Maintenance:</strong> Continuous security updates, bug fixes, and performance optimization.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
