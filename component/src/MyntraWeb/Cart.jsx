import React, { useEffect, useState } from "react";
import "../MyntraWeb/Cart.css";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email === user.email &&
          allUsers[i].password === user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
      alert("Please login to watch all cart products.");
      router("/Login");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
      var totalprice = 0;
      for (var i = 0; i < userCart.length; i++) {
        totalprice += parseInt(userCart[i].price);
      }
      setFinalPrice(totalprice);
    }
  }, [userCart]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user) {
      if (user?.role === "Seller") {
        alert("Access granted only to Buyer.");
        router("/");
      }
    } else {
      alert("You are not a Logged in user.");
      router("/Login");
    }
  }, []);

  function checkout() {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email === user.email &&
          allUsers[i].password === user.password
        ) {
          allUsers[i].cart = [];
          break;
        }
      }
      localStorage.setItem("Users", JSON.stringify(allUsers));
    }
    setFinalPrice([]);
    setUserCart([]);
    alert("Your products will be delivered soon. Thank you for shopping!");
  }

  return (
    <>
      <div id="cartdetails">
        <div>
          <div>
            {userCart.length > 0 ? (
              <div id="cartproductdetails">
                {userCart.map((pro) => (
                  <div id="cart-product-added" key={pro.id}>
                    <div id="cart-product-img">
                      <img src={pro.image} alt="" />
                    </div>
                    <div>
                      <div>
                        <p>mcmbcbzcn</p>{" "}
                        <span>Delivery by 14th Jul FREE</span>
                      </div>
                      <p>{pro.name}</p>
                      <span>₹ {pro.price}</span>

                      <p id="abc">
                        <span>Color: Fuchsia</span> <span>Size: S</span>
                      </p>

                      <div id="sum-up">
                        <span>
                          Quantity:
                          <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                          </select>
                        </span>
                        <span>Remove</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div id="cartproductdetails">
                <h3 style={{color:"#f73c4f" , textAlign:"center"}}> <br />   No products in the cart</h3>
                <img src="https://cdn.dribbble.com/users/324185/screenshots/15805709/after-login-no-product-on-cart-2_10.14.19_pm_1x.jpg" alt="" />
              </div>
            )}
          </div>
          {/* =============================== */}
          <div>
            <div id="placeorder">
              <div>
                <h5> COUPON</h5>
                <div>
                  <p>
                    <i className="fa-solid fa-tag"></i>Apply Coupons
                  </p>
                  <button>APPLY</button>
                </div>
              </div>
              <div>
                <h5> SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</h5>
                <input type="checkbox" /> <label htmlFor=""> Support Us</label>
                <div>
                  <div>10₹</div>
                  <div>20₹</div>
                  <div>30₹</div>
                </div>
                <h4>Know More</h4>
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "small",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                  }}
                >
                  PRICE DETAILS(1 items)
                </h5>
                <table id="total">
                  <tbody>
                    <tr>
                      <td>Total MRP</td>
                      <td>₹ {finalprice}</td>
                    </tr>
                    <tr>
                      <td>Discount On MRP</td>
                      <td style={{ color: "#03aeb8" }}>
                        ₹ {finalprice - 200}
                      </td>
                    </tr>
                    <tr>
                      <td>Coupon Discount</td>
                      <td>Apply Coupons</td>
                    </tr>
                    <tr>
                      <td>
                        Convenience fee{" "}
                        <b style={{ color: "#FF3F6C" }}>know more</b>
                      </td>
                      <td>90</td>
                    </tr>
                  </tbody>
                </table>
                <div id="totalamt">
                  <div>
                    <div>Total Amount</div>
                    <div>₹ {finalprice - 200 - 90}</div>
                  </div>
                  <div>
                    <button onClick={checkout}>PLACE ORDER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
