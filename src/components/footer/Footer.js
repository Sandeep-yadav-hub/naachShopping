import React from 'react'

import { FooterContainer } from "./styled";

import Fbicon from "../../assests/images/fbicon.png"
import Instaicon from "../../assests/images/instaIcon.png"

function Footer() {
    return (
      <FooterContainer>
        <div className="brandBrief">
          <h1>STUDIO NAACH</h1>
          <p>
            Rebuilding stories one craft at a time.
            <br />
            A sustainable textile jewelry brand Go bold,
            <br />
            Go statement with Studio Naach!!{" "}
          </p>
          <div>
            <a href="https://www.facebook.com/studionaach/">
              <img
                src={Fbicon}
                alt="Studio Naach Facebook Handel Studio Naach"
              />
            </a>
            <a href="https://www.instagram.com/studio_naach/">
              <img
                src={Instaicon}
                alt="Studio Naach Instagram Handel @studio_naach"
              />
            </a>
          </div>
        </div>
        <div className="footerNavigation">
          <h2>NAVIGATE</h2>
          <a href="/home">Home</a>
          <a href="/home/shop">Shop</a>
          <a href="/home/shop/category">Category</a>
          <a href="/home/shop/about/us">About</a>
          <a href="/home/shop/blogs">Blogs</a>
          <a href="/home/shop/customiazation">Customization</a>
          <a href="/home/shop/contactUs">Contact Us</a>
          <a href="/home/shop/termsAndCondition">Terms and Condition</a>
          <a href="/home/shop/refund/privacyPolicy">Privacy Policy</a>
          <a href="/home/shop/refund/return">Refund/Return </a>
        </div>
      </FooterContainer>
    );
}

export default Footer
