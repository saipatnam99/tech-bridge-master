import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p> We specialize in building fast, secure, and scalable web solutions tailored to your business needs. With a perfect blend of creativity and cutting-edge technology, we craft seamless digital experiences that drive engagement and results. Our expertise spans responsive design, performance optimization, and user-centric development, ensuring that your website is not just visually stunning but also highly functional and future-ready. Whether you need a custom website, an e-commerce platform, or a dynamic web application, we bring your vision to life with precision and innovation. </p>         </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
