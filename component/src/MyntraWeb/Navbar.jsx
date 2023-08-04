import React from 'react'
import "../MyntraWeb/Navbar.css"

const Navbar = () => {

  return (
    <>
     <div id="navbar">
            <div id="logo">
                <div><img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F51966c7c-de5b-4092-ac03-e1f5e6152b32%2Fmyntra.png?auto=format%2Ccompress&w=640&dpr=1.0" alt="" />     </div>
               
            </div>
            <div id="sections">
                <div>  MEN </div>
                <div >WOMEN </div>
                <div>KIDS</div>
                <div>HOME LIVING</div>
                <div>BEAUTY</div>
                <div>STUDIO</div>



            </div>
            <div id="search">
                <div><i className="fa-solid fa-magnifying-glass"></i> </div>
                <div>
                    <input type="text" placeholder='search here' />
                </div>



            </div>
            <div id="icons">

                <div>
                <i className="fa-regular fa-user"></i>
                <p>Profile</p>
                </div>
                <div>
                <i className="fa-regular fa-heart"></i>
                <p>Wishlist</p>
                </div>
                <div>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Cart</p>
                </div>
            
            </div>




        </div>
    </>
    
  )
}

export default Navbar