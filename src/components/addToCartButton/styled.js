import styled from "styled-components"

export const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.visible ? "initial" : "fixed")};
  margin-top: ${(props) => (props.visible && "30px" )};
  bottom: 0;
  left: 0;
  border-radius: ${(props) => (props.visible && "5px" )};
  /* padding: 10px; */

  @media screen and (min-width: 768px) {
    position: initial;
    margin-top: 50px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background: var(--studionaach-primary-gradient);
  border-radius: ${(props) => (props.visible && "5px")};

  @media screen and (min-width: 960px) {
    :hover {
      background: var(--studionaach-primary-gradient-transition);
    }
  }
  @media screen and (min-width: 768px) {
    width: initial;
    height: initial;
    border-radius: 5px;
    border: 0;
    padding: 10px 50px;
  }
`;