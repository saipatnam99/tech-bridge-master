import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";


const servicesData = [
  { title: "Web Development", link: "/services/webdevelopment", img: "/images/services/web.jpg" },
  { title: "BPO Services", link: "/services/bposervices", img: "/images/services/bpo.png" },
  { title: "Digital Marketing", link: "/services/digitalMarketing", img: "/images/services/DIGITAL-MARKETING.jpg" },
  { title: "E-Commerce", link: "/services/e-commerce", img: "/images/services/e-commerce.avif" },
  { title: "Medical Coding", link: "/services/medicalCoding", img: "/images/services/medical-coding.jpg" },
  { title: "Branding & Creative Services", link: "/services/branding", img: "/images/services/branding.jpeg" },
  { title: "E-publishing", link: "/services/e-publishing", img: "/images/services/e-publish.webp" },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - TechBridz</title>
      </Head>
      <section className="services-list">
        <div className="container">
          <h1 className="title">Our Services</h1>
          <div className="grid">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <Link href={service.link}>
                  <Image src={service.img} alt={service.title} width={300} height={200} />
                  <h3>{service.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
