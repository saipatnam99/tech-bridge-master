import { teamdata } from "@/assets/data/teamdata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import { useRouter } from "next/router";
import React from "react";

const Team = () => {
  const router = useRouter();

  return (
    <section className="agency bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="MEET OUR TEAM" />
          <br />
          <br />
          <Title title="A team of smart & passionate creatives" className="title-bg" />
        </div>
        <div className="grid-4 py">
          {teamdata.map((item) => (
            <div key={item.id} onClick={() => router.push(`/team/${item.id}`)} style={{ cursor: "pointer" }}>
              <Card data={item} caption={item.post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
