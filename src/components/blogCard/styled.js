import styled from "styled-components"

export const BlogCardContainer = styled.div`
  width: 90%;
  height: 350px;
  object-fit: cover;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  margin: auto;
  margin-bottom: 40px;
  cursor: pointer;
  & > .blogDate {
    position: absolute;
    right: 5px;
    margin: 5px;
    color:white;
  }
  & > div:before {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(64, 64, 64, 1) 100%
    );
    object-fit: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }
  & > div:after {
    content: "";
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 1) 0%,
      rgba(64, 64, 64, 1) 100%
    );
    object-fit: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
  & > div {
    position: absolute;
    bottom: 0;

    & > h1 {
      position: relative;
      padding: 8px 5px 10px 8px;
      /* background: rgba(0, 0, 0, 0.6); */
      color: white;
      font-size: 22px;
      font-weight: 500;
      margin: 5px 0px;
      display: inline-flex;
    }
    & > h1:after {
      content: "";
      height: 3px;
      background: var(--studionaach-primary);
      width: 100%;
      /* display: block; */
      position: absolute;
      bottom: 0;
    }

    & > p {
      position: relative;
      padding: 0px 8px;
      color: white;
      font-size: 14px;
      margin: 5px 0px 15px;
    }
  }

  @media screen and (min-width: 960px) {
    margin: 10px;
    width: 250px;
    & > div {
      position: absolute;
      bottom: ${({ show }) => show && "0"};
      top: ${({ show }) => (!show ? "85%" : "")};
      animation: ${({ show }) => show && "showInfoBlog 0.4s ease-in-out"};
    }
    & > div > h1:after {
      display: ${({ show }) => show ? "block":"none"};
      width: ${({ show }) => show && "100%"};
      animation: ${({ show }) => show && "increaseWidth 0.4s ease-in-out "};
    }
  }
`;