import styled from "styled-components"

export const Product = styled.div`
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;
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
  & > .productCard.is-visible{
    opacity: 1;
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  & > div > .productImg {
    width: 90% !important;
    margin: auto;
    padding: 5%;
  }
  & > div > .productInfo {
    padding: 20px;
    & > h1 {
      font-size: 20px;
      text-align: center;
      font-weight: 800;
      color: var(--studionaach-primary);
    }
    & > hr {
      display: block;
      width: 30%;
      border: 0;
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    & > div {
      display: flex;
      justify-content: space-around;

      & > .oldPrice {
        text-decoration: line-through;
        color: #c4c4c4;
        font-size: 16px;
      }
      & > .newPrice {
        color: var(--studionaach-primary);
        font-size: 20px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`;