import styled,{css,keyframes} from "styled-components"
import { fadeInRight } from "react-animations";

const fadeInRightAnimation = keyframes`${fadeInRight}`


export const HomeContainer = styled.div`
  padding: 20px;
  margin-top: 120px;

  & > .intro {
    margin-top: 50px;
  }
  & > .founderIntroContainer {
    margin-top: 100px;
  }
  & > .team {
    margin-top: 100px;
  }
  & > .packagingContainer {
    margin-top: 100px;
  }
  & > .shopNow {
    margin-top: 150px;
    & > p {
      font-size: 14px;
      color: #999;
      width: 95%;
      line-height: 175%;
      margin: auto;
      text-align: center;
    }
    & > h2 {
      font-size: 18px;
      color: #999999;
      text-align: center;
      margin-top: 25px;
      font-weight: 500;

      & > a {
        color: var(--studionaach-primary);
        text-decoration: none;
      }
    }
    & > div {
      width: 100%;
      margin-top: 50px;

      & > .btn-shop {
        display: inline-block;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        background: var(--studionaach-primary-gradient);
        transition: color 0.15s ease-in-out, background 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        border: 0;
        color: white;
        cursor: pointer;
        width: 100px;
        margin-left: 50%;
        transform: translateX(-50%);

        & :hover {
          background: var(--studionaach-primary-gradient-transition);
        }
        & :active {
          background: var(--studionaach-primary-gradient-transition);
        }
      }
    }
  }
  & > .testinomialContainer {
    margin-top: 100px;
    position: relative;

    & > .background {
      background: var(--studionaach-secondry);
      width: 110.6%;
      height: 105%;
      position: absolute;
      top: 0;
      z-index: -1;
      left: -20px;
      opacity: 0.65;
    }
  }
  @media screen and (min-width: 768px) {
    & > .testinomialContainer {
      & > .background {
        width: 105.5%;
      }
    }
  }
  @media screen and (min-width: 960px) {
    & > .testinomialContainer {
      & > .background {
        width: 104.5%;
      }
    }
  }
`;
export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  & > .fadeInUp {
    opacity: 0;
    -webkit-transform: translateY(5em) rotateZ(0deg);
    transform: translateY(5em) rotateZ(0deg);
    -webkit-transition: opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    transition: opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    transition: transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.1s ease-out;
    transition: transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  & > .naachIntro.is-visible,.founderIntro.is-visible {
    opacity: 1;
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  
  & > div {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 5%;
      left: -5%;
      background: var(--studionaach-secondry);
      opacity: 0.65;
      height: 90%;
      width: 110%;
      z-index: -1;
    }

    & > img {
      max-width: 100%;
    }
    & > .newInStoreBanner {
      max-width: 75%;
      margin: auto;
      display: inherit;
    }
  }

  & > p {
    text-align: right;
    width: 95%;
    margin-left: auto;
    font-size: 14px;
    line-height: 175%;
    & > span {
      color: var(--studionaach-primary);
    }
  }

  @media screen and (min-width: 768px) {
    & > div {
      &:before {
        width: 130%;
        left: -25%;
      }
      & > img {
        margin-left: -80px;
      }
      & > .newInStoreBanner {
        width: 485px;
        margin: none;
        margin-left: -80px;
        display: initial;
      }
    }
    & > .newInStoreIntro {
      padding: 20px;
    }
    & > p {
      margin-top: 30px;
    }
  }
  @media screen and (min-width: 960px) {
    & > .newInStoreIntroContainer {
      &:before {
        width: 125%;
      }
    }
  }
`;
export const Intro = styled.span`
  & > h1 {
    text-align: left;
    width: 95%;
    margin-left: auto;
    font-size: 24px;
    line-height: 175%;
    color: var(--studionaach-primary);
  }
  & > p {
    text-align: right;
    width: 95%;
    margin-left: auto;
    font-size: 14px;
    line-height: 175%;
    & > span {
      color: var(--studionaach-primary);
    }
  }
  & > .newInStoreDescription {
    text-align: left;
  }
  & > .newInStoreHeading {
    margin-top:70px;
  }

  @media screen and (min-width: 768px) {
    & > p {
      margin-top: 30px;
    }
    & > .newInStoreHeading {
      display: none;
    }
    & > .newInStoreDescription {
      text-align: right;
    }
  }
  @media screen and (min-width: 960px) {
    width: 40%;
    margin-right: 130px;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
    margin-right: 130px;
  }
`;

export const Tag = styled.p`
  display: none;
  position: absolute;
  transform: rotate(90deg);
  right: -10px;
  bottom: 30px;
  text-align: center;
  font-size: 20px;
  color: var(--studionaach-primary);

  & > span {
    font-size: 40px;
  }
  &:before {
    content: "";
    width: 200%;
    border: 1px solid var(--studionaach-primary);
    transform: rotate(180deg);
    display: inline-block;
    position: absolute;
    right: 110%;
    bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const TagLeft = styled.p`
  display: none;
  position: absolute;
  transform: rotate(270deg);
  left: -10px;
  bottom: 30px;
  text-align: center;
  font-size: 20px;
  color: var(--studionaach-primary);

  & > span {
    font-size: 40px;
  }
  &:after {
    content: "";
    width: 200%;
    border: 1px solid var(--studionaach-primary);
    transform: rotate(180deg);
    display: inline-block;
    position: absolute;
    left: 110%;
    bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const PackagingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > .fadeInUp {
    opacity: 0;
    -webkit-transform: translateY(5em) rotateZ(0deg);
    transform: translateY(5em) rotateZ(0deg);
    -webkit-transition: opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    transition: opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    transition: transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.1s ease-out;
    transition: transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  & > .packagingIntro.is-visible,.packagingIntro.is-visible {
    opacity: 1;
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  
  & > .care {
    & > h2 {
      font-size: 18px;
      color: var(--studionaach-primary);
      margin-top: 50px;
    }
    & > ul {
      padding-left: 20px;
      & > li {
        list-style-type: "- ";
        margin: 10px 0;
        font-size: 14px;

        & > span {
          color: var(--studionaach-primary);
        }
      }
    }
    & > p {
      text-align: left;
      width: 95%;
      font-size: 14px;
      line-height: 175%;
      & > span {
        color: var(--studionaach-primary);
      }
    }
  }
  & > .packing {
    position: relative;
    width: 100%;
    height: 550px;
    &:before {
      content: "";
      position: absolute;
      top: 5%;
      left: -5%;
      background: var(--studionaach-secondry);
      opacity: 0.65;

      height: 90%;
      width: 110%;
      z-index: -1;
    }

    & > .video {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
  }
  @media screen and (min-width: 960px) {
    & > .packing {
      width: 550px !important;

      &:before {
        width: 84% !important;
      }
      & > .video {
        margin: initial;
        left: 112px !important;
        right: 40px;
      }
    }
    & > .care {
      width: 40% !important;
    }
  }

  @media screen and (min-width: 768px) {
    & > .packing {
      width: 60%;
      &:before {
        width: 100%;
      }
      & > .video {
        margin: initial;
        left: initial;
        right: 40px;
      }
    }
    & > .care {
      width: 40%;

      & > p {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export const Team = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin-bottom:20px; */
  & > .fadeInUp {
    opacity: 0;
    -webkit-transform: translateY(5em) rotateZ(0deg);
    transform: translateY(5em) rotateZ(0deg);
    -webkit-transition: opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    transition: opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    transition: transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.1s ease-out;
    transition: transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1),
      opacity 0.3s 0.1s ease-out,
      -webkit-transform 0.3s 0.1s cubic-bezier(0, 1, 0.3, 1);
    will-change: transform, opacity;
  }
  & > .teamIntroHannan.is-visible,.teamIntroKoaml.is-visible  {
    opacity: 1;
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }

  & > div {
    position: relative;
    width: 250px;
    height: 190px;
    margin-bottom: 30px;
    &::before {
      content: "";
      position: absolute;
      right: 20px;
      width: 250px;
      height: 190px;
      background: var(--studionaach-secondry);
      opacity: 0.65;
    }

    & > img {
      max-width: 220px;
      position: absolute;
      top: -10px;
      right: 30px;
    }
  }

  & > p {
    text-align: left;
    width: 95%;
    font-size: 14px;
    line-height: 175%;
    & > span {
      color: var(--studionaach-primary);
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: ${({ flexDirection }) =>
      flexDirection ? flexDirection : "row"};
    & > div {
      width: 300px;
      &::before {
        width: 300px;
      }
    }
    & > p {
      width: 50%;
    }
    & > .komalImgBg::before {
      right: -20px !important;
    }
    & > .komalImgBg > img {
      left: 30px;
    }
    & > .komalIntro {
      text-align: right;
      margin-right: 50px;
    }
  }
`;

export const ReadMore = styled.p`
  display: inline-flex;
  align-items: center;
  color: var(--studionaach-primary);
  width: 100% !important;
  & > span {
    margin-left: auto;
    margin-right: 10px;
  }
  & > .MuiSvgIcon-root {
    font-size: 22px;
  }
  & > .newInStoreExplore {
    margin-left: 20px;
  }
  @media screen and (min-width: 768px) {
    & > .newInStoreExplore {
      margin-left: auto;
    }
  }
`;

