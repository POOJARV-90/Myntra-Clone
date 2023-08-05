import React, { useContext, useEffect, useState } from 'react'
import '../MyntraWeb/Profile.css'
import { Authcontext } from './Context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { state, login  } = useContext(Authcontext);

  const router = useNavigate();
  const [userData, setUserData] = useState({});
  console.log(userData, "abc");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    if (!currentUser) {
      router("/login");
    }
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    if (currentUser && allUsers) {
      for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
          setUserData(allUsers[i]);
        }
      }
    }
  }, []);

  function handleChange(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value })
}

  function handleSubmit(event) {
    event.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    for (var i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
        allUsers[i].name = userData.name;
        allUsers[i].password = userData.password;
        currentUser.password = userData.password;
        currentUser.name = userData.name;
      }
    }

    login(currentUser);
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
    localStorage.setItem("Users", JSON.stringify(allUsers));
    setUserData({})
    alert("Profile updated.");
  }

  return (
    <>
      <div id="Profile">

<div id="div">

    <div>
        <h4>Account</h4>

        <span>{state?.userData?.name} </span>

    </div>

    <div id="profilepage">
        {/* <!-- LEFT --> */}

        <div>
            <div>


                <div>Overview</div>
                <div>
                    <h5>ORDERS</h5>
                    <div>Orders & Returns</div>
                </div>
                <div>
                    <h5>CREDIT</h5>
                    <div>Coupans</div>
                    <div>MyntraCredit</div>
                    <div>Myncash</div>
                </div>
                <div>
                    <h5>ACCOUNT</h5>
                    <div><strong  style= {{color:'#14cda8'}}>Profile</strong></div>
                    <div>Saved Cards</div>
                    <div>Addresses</div>
                    <div>Myntra Insiders</div>

                </div>
                <div>
                    <h5>LEGAL</h5>
                    <div>Terms of Use</div>
                    <div>Privacy Policies</div>


                </div>



            </div>


        </div>

        {/* <!-- RIGHT --> */}
        <div>

            <div id='edit-pro'>
                <p>Profile Details</p>
                <form onSubmit={handleSubmit}>
                <label>Change Name</label><br />
                <input type='text' value={userData.name} name="name" onChange={handleChange} /><br />
                <label>Change Password</label><br />
                <input type='text' value={userData.password} name="password" onChange={handleChange} /><br />
                <input className='button-pro' type='submit'/>
               </form>
             


            </div>


        </div>

    </div>

</div>



</div>
    </>
  )
}

export default Profile