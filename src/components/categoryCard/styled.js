import styled from "styled-components"

export const CategoryCardContainer = styled.div`
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  margin: auto;
  border-radius: 5px;
  overflow: hidden;

  & > .categoryImg {
    width: 90% !important;
    margin: auto;
    padding: 5%;
  }
  & > .categoryInfo {
    padding:20px;
    & > h1 {
      font-size: 20px;
      text-align: center;
      font-weight: 800;
      color: var(--studionaach-primary);
    }
    
  }
  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`;