import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { Authcontext } from './Context/Authcontext';

const Login = () => {
    const {state , login} = useContext(Authcontext)

    const [userdata, setUserdata] = useState({ email: "", password: "" ,role :""});
    const router = useNavigate();
  
    const hangleChange = (event) => {
      setUserdata({ ...userdata, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userdata.email && userdata.password) {
          const users = JSON.parse(localStorage.getItem("Users")); //access to LS
    
          var flag = false;
          for (var i = 0; i < users.length; i++) {
            if (
              users[i].email == userdata.email &&
              users[i].password == userdata.password
            ) {
              flag = true;
              localStorage.setItem(("CurrentUser"),JSON.stringify( users[i]));
              login(users[i]);
              alert("login succesfull")
              setUserdata({email:"",password:"",role :""  })
              router("/");
              break;
            }
          }
          if (flag == false) {
               alert("Please check credentials.");   //RETURN
          }
          
        } else {
          alert("Please submit all details");
        }
      };
    
  return (
    <>
      <div id="login">
            <div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
                        width="100%" height="100%"/>

                </div>
                <form  onSubmit={handleSubmit}>

                    <p><b>Log In or Sign Up</b></p>
                    
                    <div class="input">
                        <input type="email" name="email" onChange={hangleChange} value={userdata.email}  placeholder="Email" />
                    </div>
                    <div class="input">
                        <input type="password" name="password" onChange={hangleChange} value={userdata.password}  placeholder="enter password" />
                    </div>
                   
                    <p className='tagline'>By Continuing , i agree to the <b>Terms of Use</b>& <b>Privacy & Policy</b> <br /> <br />
                    Haven't Registerd yet <b onClick={() => router("/Register")}>Click here</b>
                    </p>
                    

                    <input type="submit" value="LOGIN"/>

                </form>
            </div>
        </div>
    </>
  )
}

export default Login