import React from 'react'
import '../MyntraWeb/Register.css'

const Register = () => {
  return (
    <>
      <div id="login">
            <div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
                        width="100%" height="100%"/>

                </div>
                <div >

                    <p><b>Log In or Sign Up</b></p>
                    <div class="input">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div class="input">
                        <input type="number" placeholder="Mobile Number" />
                    </div>
                    <div class="input">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="input">
                        <input type="password" placeholder="enter password" />
                    </div>
                    <div class="input">
                        <input type="password" placeholder="confirm password" />
                    </div>
                    <p>By Continuing , i agree to the <b>Terms of Use</b>& <b>Privacy & Policy</b></p>
                    <button>
                        COUNTINUE
                    </button>

                </div>
            </div>
        </div>
    </>
  )
}

export default Register