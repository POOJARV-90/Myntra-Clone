import React from 'react'
import '../MyntraWeb/Profile.css'

const Profile = () => {
  return (
    <>
      <div id="Profile">

<div id="div">

    <div>
        <h4>Account</h4>

        <span>Pooja Vishwakarma </span>

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

            <div>
                <p>Profile Details</p>

                <table>
                    <tbody>

                        <tr>
                            <td>Full Name</td>
                            <td>Pooja Vishwakarma</td>


                        </tr>


                        <tr>
                            <td>Mobile Number</td>
                            <td> 8286268288</td>


                        </tr>


                        <tr>
                            <td>Email ID </td>
                            <td> poojarv366@gmail.com</td>


                        </tr>


                        <tr>
                            <td>Gender </td>
                            <td> FEMALE</td>

                        </tr>

                        <tr>
                            <td>Date of Birth </td>
                            <td> not added</td>

                        </tr>

                        <tr>
                            <td>Location</td>
                            <td> not added</td>

                        </tr>

                        <tr>
                            <td>Alternate Mobile</td>
                            <td> not added</td>

                        </tr>

                        <tr>
                            <td>Hint Name</td>
                            <td> not added</td>

                        </tr>


                    </tbody>


                </table>

                <div>
                    <button id="button">EDIT</button>


                </div>


            </div>


        </div>

    </div>

</div>



</div>
    </>
  )
}

export default Profile