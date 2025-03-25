import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Expertise' />
            <p>
              We excel in crafting tailored digital solutions across multiple domains:
            </p>
            <ul className="expert">
              <li><strong>Website Development & Design</strong> – Building responsive, high-performance websites.</li>
              <li><strong>E-Commerce Development</strong> – Creating seamless, secure online stores.</li>
              <li><strong>E-Publishing Services</strong> – Transforming content into accessible digital formats.</li>
              <li><strong>BPO Services</strong> – Streamlining business operations with efficiency.</li>
              <li><strong>Digital Marketing</strong> – Driving engagement through SEO, social media, and campaigns.</li>
              <li><strong>Branding & Creative Services</strong> – Elevating brand identity with compelling visuals and strategy.</li>
            </ul>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='Learn More' />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;