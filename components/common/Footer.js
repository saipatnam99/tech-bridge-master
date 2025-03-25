import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="TechBridz" caption="" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Saturday 24/7 (rotational shifts)
              </span>
              <br />
              <br />
              <h3>+91-7337681324</h3>
              <h3 className="hover: blue">
                <a href="mailto:Info@techbridz.in">Info@techbridz.in</a>
              </h3>
              <br />
{/* 
              <button className="button-primary">Request for quote</button> */}
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/agency">About agency</Link>
              </li>
              <li>
                <Link href="/team">Our team</Link>
              </li>
              <li>
                <Link href="/showcase">Showcase</Link>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link href="/">Demo design system</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Web Design & Development</Link>
              </li>
              <li>
                <Link href="/">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="/">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/">E-Commerce</Link>
              </li>
              <li>
                <Link href="/">BPO Services</Link>
              </li>
              <li>
                <Link href="/">Medical Billing</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.facebook.com" target="_blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" target="_blank">
                    <AiOutlineTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com" target="_blank">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com" target="_blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2025 TECHBRIDZ. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>TECHBRIDZ COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
