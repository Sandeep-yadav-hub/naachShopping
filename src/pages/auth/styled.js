import styled from "styled-components"

export const AuthContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  & > .brandlogo {
    display: none;
  }
  & > .auth {
    width: 80%;
    margin: auto;
    box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
      margin-bottom: 10px;
      font-size: 12px;
      color: grey;
      & > span {
        color: var(--studionaach-primary);
      }
    }
    
    & > .MuiSvgIcon-root {
      font-size: 80px;
      color: grey;
    }
  }
  @media screen and (min-width: 960px) {
    margin-top: 200px;
  }
  @media screen and (min-width: 768px) {
    & > .brandlogo {
      width: 45%;
      display: initial;
      & > img {
        width: 100%;
        margin: auto;
      }
    }
    & > .auth {
      width: 45%;
      &>img{
          display: none;
      }
    }
  }
`;
export const AuthCard = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & > form {
    width: 100%;
    margin-bottom: 15px;
    & > .MuiFormControl-root {
      width: 100%;
      margin-bottom: 10px;
      .MuiInputLabel-root {
        transform: translate(14px, 15px) scale(1);
      }
      .MuiFormLabel-root.Mui-focused {
        color: var(--studionaach-primary);
      }
      .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--studionaach-primary);
      }
      .MuiInputLabel-root.MuiInputLabel-shrink {
        transform: translate(14px, -6px) scale(0.75);
      }
      input {
        padding: 12.5px 14px;
      }
    }
    & > .error {
      color: #dc3545;
      font-size:12px;
      margin-bottom:10px;
      padding-left: 5px;

    }
    & > button {
      margin-top: 20px;
      display: inline-block;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      background: var(--studionaach-primary-gradient);
      transition: color 0.15s ease-in-out, background 0.5s ease-in-out;
      border: 0;
      color: white;
      cursor: pointer;
      width: 100px;
      margin-left: 50%;
      transform: translateX(-50%);

      /* &: {
        background: var(--studionaach-primary-gradient-transition);
      } */
      &:active {
        background: var(--studionaach-primary-gradient-transition);
      }
    }
  }
`;