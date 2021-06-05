import React, { useState } from "react";

import { AuthContainer, AuthCard } from "./styled";
import { Heading } from "../../globalStyled";
import BrandLogo from "../../assests/brand logo/brandLogoWhite.JPG";
import { TextField } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

function Auth() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handelAuth = (e) => {
    e.preventDefault();
    console.log(email, password);
    if(!email){
        setErrorEmail(true);
    }else{
        
        setErrorEmail(false);
    }
    if(!password){
        setErrorPassword(true);
    }else{
        setErrorPassword(false);
    }
  };

  return (
    <AuthContainer>
      <div className="brandlogo">
        <img src={BrandLogo} alt="Brand Logo" />
      </div>
      <div className="auth">
        {/* <PersonIcon /> */}
        <img src={BrandLogo} style={{ maxWidth: "150px" }} alt="Brand Logo" />

        <Heading style={{ marginBottom: "30px", marginTop: "10px" }}>
          Sign in
        </Heading>
        <AuthCard>
          <form onSubmit={(e) => handelAuth(e)}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              label="Email"
              variant="outlined"
            />
            <p className="error" style={{display:errorEmail?"block":"none"}}>*Please fill the Email Address field</p>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              label="Password"
              variant="outlined"
            />
            <p className="error" style={{display:errorPassword?"block":"none"}}>*Please fill this field</p>
            <button type="submit">Sign up</button>
          </form>
        </AuthCard>
        <p>
          Forgot your <span>Password ?</span>
        </p>
        <p>
          Dont have a Account? <span>Sign Up</span>
        </p>
      </div>
    </AuthContainer>
  );
}

export default Auth;
