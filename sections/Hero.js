import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/bridz.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          {/* <TitleLogo title='TechBridge' caption='' className='logobg' /> */}
          {/* <Image src={logo} alt="Tech Logo" width={150} height={50} priority className="logobg"/> */}
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>

          <div className="sub-heading">
            <span>.</span> <TitleSm title="WEBSITES" />
            <span>.</span> <TitleSm title="BRANDING" />
            <span>.</span> <TitleSm title="BPO SERVICES" />
            <span>.</span> <TitleSm title="MEDICAL BILLING" />
            <span>.</span> <TitleSm title="DIGITAL MARKETING" />
            <span>.</span> <TitleSm title="E-PUBLISHING" />

          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you ll ever need" />
            <p>
              Maintain a strong foundation by staying adaptable and focused.
              Effective planning and persistence lead to success, no matter the
              challenges. Keep learning, stay motivated, and embrace
              opportunities for growth.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
