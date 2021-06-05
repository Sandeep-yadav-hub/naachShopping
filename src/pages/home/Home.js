import React,{useState,useEffect} from 'react'


import {
  HomeContainer,
  IntroContainer,
  ReadMore,
  Team,
  PackagingContainer,
  Tag,
  TagLeft,
  Intro
} from "./styled";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import IntroImg from '../../assests/images/intro.jpg'
import HannanJi from '../../assests/images/hannanji.jpg'
import KomalJi from '../../assests/images/komal.jpg'
import Founder from '../../assests/images/founder.png'
import Packaging from "../../assests/video/packaging.mp4";
import PackagingPoster from "../../assests/images/packagingPoster.jpeg";

import Testinimial from "../../components/testinomial/Testinimial"
import jQuery from "jquery"; 


function Home() {

    function isElementInViewport(el) {
      // console.log(el[0].getBoundingClientRect());
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    function checkInView (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      }
    }
   
   
    
    useEffect(() => {
      const naachIntro = document.querySelectorAll(".naachIntro");
      const founderIntro = document.querySelectorAll(".founderIntro");
      const teamIntroHannan = document.querySelectorAll(".teamIntroHannan");
      const teamIntroKoaml = document.querySelectorAll(".teamIntroKoaml");
      const packagingIntro = document.querySelectorAll(".packagingIntro");
      naachIntro.forEach((element) => checkInView(element));
      naachIntro.forEach((element) => checkInView(element));
      founderIntro.forEach((element) => checkInView(element));
      teamIntroHannan.forEach((element) => checkInView(element));
      teamIntroKoaml.forEach((element) => checkInView(element));
      packagingIntro.forEach((element) => checkInView(element));
      window.addEventListener("scroll", () => {
        naachIntro.forEach((element) => checkInView(element));
        founderIntro.forEach((element) => checkInView(element));
        teamIntroHannan.forEach((element) => checkInView(element));
        teamIntroKoaml.forEach((element) => checkInView(element));
        packagingIntro.forEach((element) => checkInView(element));
      });
    }, []);
    
    

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);


    return (
      <HomeContainer>
        {/* Campaigns */}

        <div className="intro">
          <IntroContainer fadeInRight>
            <div className="fadeInUp naachIntro">
              <img src={IntroImg} alt="Studio Naach Introduction Image" />
              <Tag>
                STDUIO <br /> <span>naach</span>
              </Tag>
            </div>
            <Intro className="fadeInUp naachIntro">
              <p>
                <span>Studio Naach</span> Stands for love and kindness to all We
                stand for the child like excitement one holds in their hearts at
                every stage of their existence. We stand for an open world where
                loving anyone and anything is an expression that is wildly
                applauded.
              </p>
              <ReadMore>
                <span>Read More</span>
                <ArrowForwardOutlinedIcon />
              </ReadMore>
            </Intro>
          </IntroContainer>
        </div>
        <div className="team">
          <Team>
            <div className="fadeInUp teamIntroHannan">
              <TagLeft>Hannan JI</TagLeft>
              <img src={HannanJi} alt="Artisan (Hannanji)" />
            </div>
            <p className="fadeInUp teamIntroHannan">
              Meet <span>HANNAN JI</span>
              <br /> Our <span>Master artisan</span> and a furball of a human.
              He is always ready with a smile to experiment with new styles in
              every collection. The backbone of our production,{" "}
              <span>Hannan Ji</span> is a crucial part of our team.
            </p>
          </Team>
          <Team style={{ marginTop: "50px" }} flexDirection="row-reverse">
            <div className="komalImgBg fadeInUp teamIntroKoaml">
              <Tag>Komal JI</Tag>
              <img src={KomalJi} alt="Artisan (KomalJi)" />
            </div>
            <p className="komalIntro fadeInUp teamIntroKoaml">
              Meet <span>KOMAL JI</span>
              <br /> Extrememly sweet and soft spoken. Komal is our{" "}
              <span>packaging karigar</span>. All the beautiful and colourful
              poltis that you get with every order is <span>Komal’s</span>{" "}
              creation.
            </p>
          </Team>
        </div>
        <div className="founderIntroContainer">
          <IntroContainer>
            <div className="fadeInUp founderIntro">
              <img src={Founder} alt="Studio Naach Founder Meenal Kaushik" />
              <Tag style={{ fontSize: "35px" }}>Meenal</Tag>
            </div>
            <Intro className="fadeInUp founderIntro">
              <p>
                <span>Studio Naach</span> is merely a compilation and an
                extension of the collection our founder <span>Meenal</span>{" "}
                launched on an Instagram page during her final year of college.
                The collection depicts the beautiful colors and karigari the
                Lambani Community of Karnataka holds in their roots.
                <br />
                <br />
                Since then Meenal has been experimenting with rich crafts of
                India while attempting to make a change for better.
              </p>
              <ReadMore>
                <span>Read More</span>
                <ArrowForwardOutlinedIcon />
              </ReadMore>
            </Intro>
          </IntroContainer>
        </div>
        <div className="packagingContainer">
          <PackagingContainer>
            <div className="packing packagingIntro fadeInUp">
              <TagLeft
                style={{ bottom: "60px", left: "20px", fontSize: "25px" }}
              >
                Packaging
              </TagLeft>
              <video
                className="video"
                type="video/mp4"
                controls="true"
                width="300px"
                height="550px"
                poster={PackagingPoster}
              >
                <source src={Packaging} alt="Studio Naach Packaging Product" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="care packagingIntro fadeInUp">
              <h2>Care Instructions</h2>
              <ul>
                <li>
                  Be <span>नाजुक</span> while handling the product.
                </li>
                <li>
                  Clean them <span>प्यार</span> से with a damp cloth
                </li>
                <li>
                  Store them in their <span>घर जेसी</span> Potli.
                </li>
                <li>
                  And style them <span>एकदम नाच</span> के for every occasion
                </li>
              </ul>
              <p>
                <span>Note</span> : All the product are made using waste
                fabric.Every batch (5 pairs) is unique in terms of the color of
                the base fabric
              </p>
            </div>
          </PackagingContainer>
        </div>
        <div className="testinomialContainer">
          <div className="background"></div>
          <Testinimial />
        </div>
        <div className="shopNow">
          <p>
            We are so excited to welcome you to the Naach family.
            <br />
            Own a handcrafted heirloom product.
          </p>
          <div>
            <button className="btn-shop">Show Now</button>
          </div>
          <h2>
            For Customization <a href="">Click here</a>
          </h2>
        </div>
      </HomeContainer>
    );
}

export default Home
