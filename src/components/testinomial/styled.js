import styled from "styled-components"

export const TestinomialContainer = styled.div`
  height: 600px;
  width: 100%;
  padding-top: 50px;

  & > h2 {
    font-weight: 500;
    width: 50%;
    margin: auto;
    text-align: center;
    font-size: 18px;
    margin-bottom: 50px;
    color:var(--studionaach-primary)
  }

  & > .slider {
    display: flex;
    overflow: hidden;
    position: relative;

    & > .slide {
      transition: 0.4s;
      min-width: 100%;

      & > img {
        max-width: 300px;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
    & > .navigation {
      position: absolute;
      top: 0;
      width: 50px;
      height: 100%;
      margin: 0;
      display: flex;
      align-items: center;
      & > button {
        height: 100%;
        border: 0;
        width: 100%;
        padding: 10px;
        font-size: 14px;
        background: transparent;

        &:hover {
          background: var(--studionaach-secondry);
          transition: background 0.1s ease-in-out;
        }
        &:active {
          background: var(--studionaach-secondry);
        }
        &:visited {
          background: var(--studionaach-secondry);
        }
      }
    }
  }
`;


