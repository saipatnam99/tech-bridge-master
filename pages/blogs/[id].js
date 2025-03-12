import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is valid before finding the post
  const post = id ? blogdata.find((post) => post.id === parseInt(id)) : null;

  // Handle loading state
  if (!post) {
    return <p>Loading...</p>; // You can replace this with a custom loading spinner if needed
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / JANUARY 12, 2022" /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Unlocking Success – Strategies for Growth and Innovation" />
              <p className="desc-p">
                Success isn’t just about having a great idea; it’s about taking
                strategic steps to turn that idea into reality. In this
                article, we’ll explore essential strategies that help
                individuals and businesses thrive in an ever-evolving landscape.
              </p>
              <p className="desc-p">
                Whether you’re an entrepreneur, a professional, or an
                organization, the key to sustained success lies in adaptability,
                continuous learning, and smart decision-making. Let’s dive into
                the core principles that can drive your growth.
              </p>
              <p className="desc-p">
                Every great achievement starts with a well-thought-out plan.
                Prioritizing goals, staying focused, and embracing challenges
                are all part of the journey. With the right mindset and
                strategies, you can build something truly remarkable.
              </p>
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="Building a Strong Foundation for Long-Term Success" />

              <p className="desc-p">
                Establishing a strong foundation is crucial for any endeavor.
                Whether in business, personal development, or creative
                projects, taking deliberate and thoughtful steps ensures
                long-term sustainability and success.
              </p>
              <p className="desc-p">
                The ability to adapt to change is one of the most valuable
                skills in today’s world. Flexibility, resilience, and a
                forward-thinking approach help navigate challenges and seize new
                opportunities.
              </p>
              <p className="desc-p">
                Developing meaningful connections and collaborating with like-minded
                individuals can also accelerate growth. Networking, sharing
                knowledge, and learning from others contribute to a well-rounded
                strategy for success.
              </p>
              <p className="desc-p">
                No matter your industry or goals, taking consistent and
                well-informed steps leads to meaningful results. Stay committed,
                keep learning, and embrace the journey toward success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
