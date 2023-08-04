import React from "react";
import "../MyntraWeb/Cart.css";

const Cart = () => {
  return (
    <>
      <div id="cartdetails">
        <div>
          <div>
            <div id="cartproductdetails">
            <div id="cart-product-added">
                      <div id="cart-product-img">
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15096882/2021/8/30/c344b1e1-76fe-4b23-8f74-d78c0ea435561630304263230-Berrylush-Black-Puff-Sleeve-Allover-Cherry-Print-Dress-25116-1.jpg" alt="" />
                      </div>
                      <div>
                        <div>
                          <p></p>{" "}
                          <span>Delivery by 14th JulFREE</span>
                        </div>
                        <span>₹.00</span>
                        <p id="abc">
                          <span>Color: Fuchsia</span> <span>Size: S</span>
                        </p>

                        <div id="sum-up">
                          <span>Quantity:</span>
                          <select name="" id="">
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                          </select>

                          <span id="total">
                            <i class="fa-regular fa-heart"></i>
                            <span>Save to wishlist</span>
                          </span>
                          <span>Remove</span>
                        </div>
                      </div>
                    </div>

                    
             
            </div>
            {/* ends here cartproductdetails */}
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
                      <td>₹2000</td>
                    </tr>
                    <tr>
                      <td>Discount On MRP</td>
                      <td style={{ color: "#03aeb8" }}>-₹1280</td>
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
                      <td>₹90</td>
                    </tr>
                  </tbody>
                </table>
                <div id="totalamt">
                  <div>
                    <div>Total Amount</div>
                    <div>₹981</div>
                  </div>
                  <div>
                    <button>PLACE ORDER</button>
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
