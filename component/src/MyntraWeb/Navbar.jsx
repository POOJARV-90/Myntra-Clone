import React, { useContext, useEffect, useState } from "react";
import "../MyntraWeb/Navbar.css";
import { Authcontext } from "./Context/Authcontext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userdata, setUserdata] = useState();
  const [display, setDisplay] = useState(false);
  const { state } = useContext(Authcontext);
  console.log(state,"state")
  const router = useNavigate();
  useEffect(() => {
    if (state?.user) {
      setUserdata(state?.user);
    } else {
      setUserdata({});
    }
  }, [state]);
  const handleMouseEnter = () => {
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setDisplay(false);
  };

  console.log(userdata,"userdata ");

  return (
    <>
      <div id="navbar">
        <div id="logo" onClick={() => router("/")}>
          <div>
            <img
              src="https://gumlet.assettype.com/afaqs%2F2021-01%2F51966c7c-de5b-4092-ac03-e1f5e6152b32%2Fmyntra.png?auto=format%2Ccompress&w=640&dpr=1.0"
              alt=""
            />{" "}
          </div>
        </div>
        <div id="sections">
          <div onClick={() => router("/Multipleproduct")}> MEN </div>
          <div>WOMEN </div>
          <div>KIDS</div>
          <div>HOME LIVING</div>
          <div>BEAUTY</div>
          <div>STUDIO</div>
        </div>
        <div id="search">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </div>
          <div>
            <input type="text" placeholder="search here" />
          </div>
        </div>
        <div id="icons">
          <div onMouseEnter={handleMouseEnter}>
            <i className="fa-regular fa-user"></i>
            <p>Profile</p>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <p>Wishlist</p>
          </div>
          <div onClick={() => router("/Cart")}>
            <i className="fa-solid fa-bag-shopping"></i>
            <p>Cart</p>
          </div>
          
          {userdata?.role == "Seller" && (
          <div onClick={() => router("/Addproduct")}>
          <i className="fa-solid fa-plus"></i>
          <p> <small>Add product</small> </p>
          </div>
           )}
        </div>
        {display && (<div id="menudown" onMouseLeave={handleMouseLeave}>
          <h5>wellcome</h5>
          <p>To access account and manage orders</p>
          {userdata?.email?  (<span style={{color:"rgb(180, 21, 87)", fontSize:"15px" ,fontWeight:"600"}} > { userdata?.name} </span>) :  (<button  onClick={() => router("/Login")} id="menu-down-button">sign in / sign up</button>) }

          <div>
            <p>Orders</p>
            <p>Wishlist</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
            <p>Myntra Insider</p>
          </div>

          <div>
            <p> Myntra Credite</p>
            <p>Coupons</p>
            <p>Saved Cards</p>
            <p>Saved VPA</p>
            <p>Saved Addresses</p>
          

          </div>

          {userdata?.email ?

          <div>
            <p onClick={() => router("/Profile")}>Edit profile</p>
            <p  >LOG OUT</p>
          </div> : null
          
        }

          
        </div>)}

        
      </div>
    </>
  );
};

export default Navbar;
