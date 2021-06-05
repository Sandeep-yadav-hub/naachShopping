import styled from "styled-components"
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  top: 0;
  & > .header {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 90px;
    box-shadow: 0px -1px 4px 4px #f0f0f0;
    & > img {
      height: 70px;
      padding-left: 20px;
      cursor: pointer;
    }
  }
`;
export const HeaderRight = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
  & > .cart {
    font-weight: 800;
    margin-right: 10px;
    font-size: 30px;
    color: var(--studionaach-primary);
    cursor: pointer;
  }
`;
export const MobileIcon = styled.div`
  display: flex;
  font-size: 1.8rem;

  & > .MuiSvgIcon-root {
    font-weight: 800;
    font-size:30px;
    color:var(--studionaach-primary);
    cursor: pointer;
  }
  
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 20;
  margin: 0;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  background: white;
  margin: auto;
  padding: 5px;
  z-index: -1;
  position: relative;
  & > .spacing {
    display: none;
    & > a {
      cursor: default;
    }
    @media screen and (min-width: 960px) {
      display: initial;
      &:hover {
        border-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 959px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 91.1vh;
    position: absolute;
    top: 110px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    justify-content: inherit;
    background-color: var(--studionaach-primary);
    list-style: none;
    margin-top: 0px;
    padding: 0;
    overflow-y: auto;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  padding: 20px;
  padding-bottom: 1rem;
  :hover {
    border: none;
    background-color: var(--studionaach-secondry);
    color: var(--studionaach-primary);
    & > a {
      color: var(--studionaach-primary);
    }
  }
  @media screen and (min-width: 960px) {
    width: initial;
    max-width: 100%;
    height: 30px;
    padding: 0;
    border-bottom: 2px solid transparent;
    display: inline-flex;
    margin-right: 15px;
    position: relative;
    :hover {
      border-bottom: 2px solid var(--studionaach-primary);
      background-color: initial;
      color: var(--studionaach-primary);
      & > a {
        color:var(--studionaach-primary);
      }
    }
  }
`;

export const NavLinks = styled(Link)`
  color: white;
  text-align: center;
  width: 100%;
  display: table;
  text-decoration: none;

  :hover {
    color: var(--studionaach-secondry);
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 960px) {
    color: var(--studionaach-primary);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem;

  }
`;

export const DropDown = styled.div`
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  top: 30px;
  width: 250px;
  padding: 5px 0px;
  & > li {
    margin-right: 0;
    width: 100%;
    padding: 5px 0px;

    & > a:hover {
      color: var(--studionaach-secondry);
    }
    &:hover {
      color: white;
    }
  }
`;
export const DropDownNavLink = styled.div`
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 100%;
  display: flex;
  flex-direction: column;
  top: 0px;
  width: 250px;
  padding: 5px 0px;
  & > li {
    margin-right: 0;
    width: 100%;
    padding: 5px 0px;

    & > a:hover {
      color: var(--studionaach-secondry);
    }
    &:hover {
      color: white;
    }
  }
`;