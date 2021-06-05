import styled from "styled-components"

export const ProductContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  & > .productImgContainer {
    width: 90%;
    margin: auto;
    & > img {
      max-width: 100%;
      border-radius: 5px;
    }
    & > div {
      margin-top: 20px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      & > img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        margin: auto;
      }
      & > img:first-child {
        margin-left: 0;
      }
      & > img:last-child {
        margin-right: 0;
      }
    }
  }
  & > .productInfo {
    width: 90%;
    margin: auto;
    margin-top: 30px;
    & > .price {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 15px;

      & > .oldPrice {
        font-size: 22px;
        text-decoration: line-through;
        color: #c4c4c4;
        margin: 0;
      }
      & > .actualPrice {
        margin: 0;
        font-size: 24px;
        color: var(--studionaach-primary);
      }
    }
    & > .description {
      background: rgba(245, 211, 193, 0.4);
      padding: 1rem;
      border-radius: 5px;
      margin-top: 40px;
      & > h4 {
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
      }
      & > p {
        text-align: center;
        font-size: 12px;
        line-height: 150%;
        margin-bottom:10px;
      }
    }
    & > .addToCart {
      display: flex;
      align-items: center;
      margin-top:50px;
      & > .addToCartCounter {
        flex: 1;
        display: flex;
        height: 40px;
        justify-content: center;
        p {
          margin: 0;
        }
        & > .decrement {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          font-size: 18px;
          background: #fff;
          border: 2px solid #b0410a;
          border-top-left-radius: 5px !important;
          border-bottom-left-radius: 5px !important;
          cursor: pointer;
        }
        & > .increment {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          font-size: 18px;
          background: #fff;
          border: 2px solid #b0410a;
          border-top-right-radius: 5px !important;
          border-bottom-right-radius: 5px !important;
          cursor: pointer;
        }
        & > .counter {
          width: 15%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f4f4f4;
          border-top: 2px solid #b0410a;
          border-bottom: 2px solid #b0410a;
        }
      }
      & > .stock {
        flex: 1;
        display: flex;
        justify-content: center;
        & > .outStock {
          border: 2px solid red;
          font-size: 18px;
          width: 120px;
          padding: 5px;
          text-align: center;
          border-radius: 5px !important;
        }
        & > .inStock {
          border: 2px solid green;
          font-size: 18px;
          width: 120px;
          padding: 5px;
          text-align: center;
          border-radius: 5px !important;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    & > .productImgContainer {
      width: 45%;
    }
    & > .productInfo {
      width: 45%;
      margin-top: 0;
      & > h1 {
        margin-top: 0;
      }
      & > .description {
        margin-top: 20px;
        /* padding-top: 0.1rem;
        padding-bottom: 0.1rem; */
      }
    }
  }
  @media screen and (min-width: 960px) {
    margin-top: 230px;
  }
`;