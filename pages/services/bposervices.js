import Head from "next/head";
import React from "react";
import Image from "next/image";

const BPOservices = () => {
  return (
    <>
      <Head>
        <title>BPO Services - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">BPO Services</h1>
          <Image src="/images/services/bpo.png" alt="BPO Services" width={800} height={400} className="service-img"/>
          
          <div className="service-details">
          <h2 className="sub-title">We streamline business workflows for efficiency and cost reduction.</h2>
            <ul>
              <li><strong>Admin Support</strong> ::    Data entry, document management, and back-office ops.</li>
              <li><strong>Customer Support</strong> :: 24/7 multilingual voice, chat, and email support.</li>
              <li><strong>Process Automation</strong> :: AI-driven automation for improved accuracy.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BPOservices;
