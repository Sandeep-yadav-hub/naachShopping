import styled from "styled-components"

export const WhatsNewContainer = styled.div`
  margin-top: 70px;

  .carousel {
    .owl-stage {
      padding: 40px;
    }
  }

  & > .slider {
    display: flex;
    overflow: hidden;
    position: relative;

    & > .slide {
      transition: 0.4s;
      /* min-width: 100%; */
    }
    & > span > .navigation {
      box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.05);
      margin-top: 50px;
      /* position: absolute; */
      /* top: 102%; */
      cursor: pointer;
      width: 50px;
      height: 50px;
      /* margin: 0; */
      display: flex;
      align-items: center;

      background: var(--studionaach-secondry);

      & > button {
        height: 100%;
        border: 0;
        width: 100%;
        padding: 10px;
        font-size: 14px;
        background: transparent;
        font-weight: bolder;
        color: var(--studionaach-primary);
        cursor: pointer;

        &:hover {
          background: var(--studionaach-secondry);
        }
        &:active {
          background: var(--studionaach-secondry);
          box-shadow: 0px;
        }
        &:visited {
          background: var(--studionaach-secondry);
          box-shadow: 0px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    & > .carousel {
      margin-top: 50px;
    }
  }
`;