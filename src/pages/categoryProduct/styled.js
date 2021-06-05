import styled from "styled-components"

export const CategoryProductContainer = styled.div`
  margin-top: 150px;
  & > div {
    padding: 30px;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }

  @media screen and (min-width: 768px) {
    & > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 960px) {
    margin-top: 200px;
    & > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1200px) {
    & > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;