import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  const handleRequestCallback = () => {
    alert("please give us a missed call on this provided number:+91-7337574412,    Thank you");
  };

  return (
    <section className='banner'>
      <div className='container'>
        <div>
          <Title title='We are looking forward to start a new project' /> <br />
          <TitleLogo title='Lets take your business to the next level!' />
        </div>
        <div>
          <button className='button-primary' onClick={handleRequestCallback}>
            Request a call-back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
