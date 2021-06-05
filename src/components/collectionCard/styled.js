import styled from "styled-components"

export const CollectionCardContainer = styled.div`
  width: 300px;
  border-radius: 5px;
  min-height: 100%;

  overflow: hidden;
  margin-bottom: 50px;
  cursor: pointer;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.05);
  margin: auto;

  & > img{
    max-width: 90%;
    padding: 5%;
  }

  & > .collectionInfo {
    padding: 0 5%;

    & > h1 {
      font-size: 20px;
      text-align: left;
      font-weight: 800;
      color: var(--studionaach-primary);
    }
    & > p {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 960px) {
    width: 95%;
    min-height: 100%;
    margin: auto;
  }
`;