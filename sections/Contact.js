import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+91-8179257250</h3>
                  <span>Call us: Mon - Sat 24/7 (rotational shifts)</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Bengaluru, karnataka</h3>
                  <span>3rd floor, 7th cross, 27th Main, Sector1, HSR Layout, Bangalore-560102</span>
                </div>
                {/* <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>Info@techbridz.in</h3>
                  <span>Drop us a line anytime!</span>
                </div> */}
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>
                    <a href="mailto:Info@techbridz.in">Info@techbridz.in</a>
                  </h3>
                  <span>Drop us a line anytime!</span>
                </div>
                

                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>
                    <a href="mailto:hr@techbridz.in">hr@techbridz.in</a>
                  </h3>
                  <span>Career at TechBridz</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <form >
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your budget</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>timeframe</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
