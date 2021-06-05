import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: var(--studionaach-primary-gradient);
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-top: 100px;

  & > .footerNavigation {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    & > h2 {
      font-size: 20px;
      color: white;
      font-weight: 500;
    }
    & > a {
      color: white;
      font-size: 16px;
      margin: 5px 0px;
      text-decoration: none;
    }
  }
  & > .brandBrief {
    & > h1 {
      font-size: 20px;
      margin-bottom: 30px;
      color: white;
      font-weight: 500;
    }
    & > p {
      font-size: 14px;
      margin-bottom: 20px;
      color: white;
      line-height: 175%;
    }
    & > div {
      width: 20%;
      display: flex;
      justify-content: space-between;
    }
  }
  @media screen and (min-width:768px){
    &>.footerNavigation{
      margin-top: initial;
      margin-left: 50px;
    }
  }
`;