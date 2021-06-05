import styled from "styled-components"

export const CollectionContainer = styled.div`
  margin-top: 150px;
  & > div {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    width: 95%;
    margin: auto;
    margin-top: 50px;
  }

  @media screen and (min-width: 768px) {
    & > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;