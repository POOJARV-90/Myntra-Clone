import React, { useState } from "react";
import "../MyntraWeb/Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios"

const Register = () => {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword:"" ,
        role: "Buyer",
      });
      const router = useNavigate();
      const handlechange = (event) => {
        setUserdata({ ...userdata, [event.target.name]: event.target.value });
      };


      const handleRole = (event) =>{
        setUserdata({...userdata,"role":event.target.value})
      }
      console.log(userdata);

      const handleSubmit = async (event) => {
        event.preventDefault();
        if (userdata.name && userdata.email && userdata.password && userdata.confirmpassword && userdata.role) {
            if (userdata.password === userdata.confirmpassword) {
                const response = await axios.post("http://localhost:8000/register", { userdata });
                if (response.data.success) {
                    setUserdata({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                    router('/Login')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
    
            } else {
                toast.error("Password and Confirm Password not Matched.")
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }

     

  return (
    <>
      <div id="login">
        <div>
          <div>
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
              width="100%"
              height="100%"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <p>
              <b>Log In or Sign Up</b>
            </p>
            <div className="input">
              <input value={userdata.name}
                     type="text"
                     onChange={handlechange}
                     name="name"
                     placeholder="Name" 
                     />
            </div>
            
            <div className="input">
              <input  value={userdata.email}
                      type="email"
                       onChange={handlechange}
                       name="email" placeholder="Email" />
            </div>
            <br />
           
            <label >Select Role : </label>
            <select id="select" onChange={handleRole}  >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
            <br />
            <div className="input">
              <input  value={userdata.password}
                      type="password"
                      onChange={handlechange}
                      name="password"
                      placeholder="enter password" />
            </div>
            <br />
            <div className="input">
            <input  value={userdata.confirmpassword}
                      type="password"
                      onChange={handlechange}
                      name="confirmpassword"
                      placeholder="Confirm password" />

            </div>
            <p className="tagline">
              By Continuing , i agree to the <b>Terms of Use</b>&
              <b>Privacy & Policy</b>
            </p>
            
            <input type="submit" value="COUNTINUE" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
