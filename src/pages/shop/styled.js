import styled from "styled-components"

export const ShopContainer = styled.div`
    margin-top: 140px;
    @media screen and (min-width:960px){
      margin-top:180px;
    }
    
`;
export const BestSellerContainer = styled.div`
  margin-top: 100px;

  .carousel {
    .owl-stage {
      padding: 40px;
    }
  }
`;
export const WhatsNewContainer = styled.div`
  margin-top: 100px;

  .carousel {
    .owl-stage {
      padding: 40px;
    }
  }
  @media screen and (min-width: 768px) {
    & > .carousel {
      margin-top: 50px;
    }
  }
`;
export const CollectionContainer = styled.div`
  .carousel {
    .owl-stage {
      .owl-item {
        width: 100vw !important;
      }
    }
  }
  .collectionBanner {
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    min-height: 50vh;
    margin-top:50px;

    .collectionDescription {
      width: 95%;
      position: absolute;
      bottom: 5%;
      left: 0;
      right: 0;
      margin: auto;
      background: var(--studionaach-primary-opacity);
      border-radius: 5px;

      & > div {
        position: relative;
        padding: 10px;
        & > h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 500;
          color: white;
        }
        & > p {
          line-height: 150%;
          font-size: 14px;
          color: white;
        }
        & > button {
          cursor: pointer;
          padding: 12px 25px;
          border-radius: 5px;
          border: 0;
          color: var(--studionaach-primary);
        }
      }
    }
    @media screen and (min-width: 960px) {
      .collectionDescription {
        width: 45%;
        height: 90%;
        bottom: 20px;
        right: 20px;
        left: initial;
        & > div {
          & > h1 {
            font-size: 28px;
          }

          & > button {
            margin-top: 50px;
          }
        }
      }
    }
  }
`;