import React,{useState} from 'react'

import {RegisterContainer,RegistrationCard} from "./styled"
import {Heading} from "../../globalStyled"
import BrandLogo from "../../assests/brand logo/brandLogoWhite.JPG"
import {TextField} from "@material-ui/core"
import PersonIcon from "@material-ui/icons/Person";



function Registration() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const handelRegistration = (e)=>{
        e.preventDefault()
        console.log(email,password,confirmPassword)
    }

    return (
      <RegisterContainer>
        <div className="brandlogo">
          <img src={BrandLogo} alt="Brand Logo" />
        </div>
        <div className="register">
            {/* <PersonIcon /> */}
            <img src={BrandLogo} style={{maxWidth:"150px"}} alt="Brand Logo" />

            <Heading style={{marginBottom:"30px",marginTop:"10px"}}>Sign up</Heading>
            <RegistrationCard>
                <form onSubmit={(e)=>handelRegistration(e)}>
                    <TextField onChange={(e)=>setEmail(e.target.value)} value={email} id="email" type="email" label="Email" variant="outlined" />
                    <TextField onChange={(e)=>setPassword(e.target.value)} value={password} id="password" type="password" label="Password" variant="outlined" />
                    <TextField onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} id="confirmPassword" type="password" label="Confirm password" variant="outlined" />
                    <button type="submit">Sign up</button>
                </form>
            </RegistrationCard>
            <p>Already have a Account? <span>Sign in</span></p>
        </div>
      </RegisterContainer>
    );
}

export default Registration
