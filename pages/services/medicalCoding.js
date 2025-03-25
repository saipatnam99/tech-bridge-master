import Head from "next/head";
import React from "react";
import Image from "next/image";

const MedicalCoding = () => {
  return (
    <>
      <Head>
        <title>Medical Coding & Billing - TechBridz</title>
      </Head>
      <section className="service-page">
        <div className="container">
          <h1 className="title">Medical Coding & Billing Services</h1>
          <Image src="/images/services/medical-coding.jpg" alt="Medical Coding" width={800} height={400} className="service-img" />
          {/* <p className="description">
            We provide accurate and efficient medical coding and billing services to ensure compliance, reduce claim denials, and improve revenue cycle management.
          </p> */}
          <div className="service-details">
            <h2 className="sub-title">Our Medical Coding & Billing Solutions</h2>
            <ul>
              <li><strong>ICD-10 & CPT Coding Compliance:</strong> Ensure accuracy and adherence to medical coding standards.</li>
              <li><strong>Claims Processing & Submission:</strong> Streamline claim submissions to reduce denials and speed up reimbursements.</li>
              <li><strong>Revenue Cycle Management:</strong> Optimize financial processes for better cash flow and reduced delays.</li>
              <li><strong>HIPAA Compliance:</strong> Maintain data security and patient confidentiality with strict regulatory compliance.</li>
              <li><strong>Denial Management & Appeals:</strong> Identify and rectify rejected claims to maximize revenue recovery.</li>
              <li><strong>24/7 Support & Auditing:</strong> Continuous monitoring and auditing to maintain accuracy and compliance.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MedicalCoding;
