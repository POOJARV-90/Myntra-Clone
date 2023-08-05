import React, { useContext, useEffect, useState } from 'react';
import '../MyntraWeb/Singleproduct.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Authcontext } from './Context/Authcontext';

const Singleproduct = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const router = useNavigate();
  const { state } = useContext(Authcontext);
  const [isProductExist, setIsProductExist] = useState(false);
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    category: "Other",
  });
  const [allowUpdate, setAllowUpdate] = useState(false);

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true);
      setProducts(productFromDB);
    } else {
      setIsProductExist(false);
    }
  }, []);

  useEffect(() => {
    if (isProductExist) {
      if (id && products.length) {
        const res = products.find((pro) => pro.id == id);
        setSingle(res);
      }
    }
  }, [id, products]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    // console.log(user, "uzer");
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addCart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == currentUserEmail) {
          users[i]?.cart?.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      alert("Product successfully added to cart!");
      router("/Multipleproduct");
    } else {
      alert("You can't add a product before logging in!");
    }
  }


  function uptoDate() {
    setAllowUpdate(true);
  }

  function closeUpate() {
    setAllowUpdate(false);
  }

  function handleChange(e) {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  }
  function selectRole(e) {
    setProductData({ ...productData, ["category"]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const allProduct = JSON.parse(localStorage.getItem("Products"));
    for (let i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id === id) {
        allProduct[i].image = productData.image;
        allProduct[i].name = productData.name;
        allProduct[i].price = productData.price;
        allProduct[i].category = productData.category;
        single.image = productData.image;
        single.name = productData.name;
        single.price = productData.price;
        single.category = productData.category;

        localStorage.setItem("Products", JSON.stringify(allProduct));
        setProductData({ name: "", price: "", image: "", category: "Other" });
       alert("Product Updated!");
      }
    }
  }
  return (
    <div id="Main">
       
      <div>
        <p>Home / Clothing </p>
      </div>
      <div id="product">
        <div>
          <div>
            <img src={single.image} alt="" />
           
          </div>
          <div>
          <img src={single.image} alt="" />
          </div>
          <div>
          <img src={single.image} alt="" />
          </div>
          <div>
          <img src={single.image} alt="" />
          </div>
          {/* ... Add more images */}
        </div>
        <div id="info">
          <div>
            <h3>{single.category}</h3>
            <p style={{ color: '#80828d' }}>{single.name}</p>
            <div id="ratingbox">
              <div><b>4.3</b><i className="fa-solid fa-star" style={{ color: '#79ae88' }}></i></div>
              <div>861 rating</div>
            </div>
          </div>
          <div>
            <p>
              <span><strong>₹{single.price}</strong></span>
              <span>MPR <s>₹2599</s></span>
              <span id="color"><strong>(45% OFF)</strong></span> <br />
              <strong style={{ color: '#79ae88', fontSize: 'small' }}>inclusive of all taxes</strong>
            </p>
            <h5>SELECT SIZE<button id="button-sig">SIZE CHART &gt;</button> </h5>
            <div>

                        <div>39</div>
                        <div>40</div>
                        <div>42</div>
                        <div>44</div>
                        <div>46</div>

                    </div>
            <div>
            {userData?.role === "Seller" ? (<div>
                <i className="fa-solid fa-bag-shopping"></i>
                <b  onClick={uptoDate}>EDIT PRODUCT</b>
              </div>): (<div   onClick={addCart} >
                <i className="fa-solid fa-bag-shopping"></i>
                <b>ADD TO BAG</b>
                {/* //ADDCART */}
              </div>)

               }
              
              <div>
                <i className="fa-regular fa-heart"></i>
                WISHLIST
              </div>
            </div>
          </div>
          <div>
            <h5>DELIVERY OPTIONS <i className="fa-solid fa-truck-arrow-right"></i></h5>
            {/* ... Add delivery options */}
            {/* ... Other product details */}
            <div>
                        <input type="text" placeholder="Enter pincode"/><button>Check</button>

                    </div>

                    <p class="fontsizesmall">Please enter PIN code to check delivery time & Pay on Delivery Availability
                    </p>



                    <div>

                        <span>100% Original Products</span> <br/>
                        <span>Pay on delivery might be available</span> <br/>
                        <span>Easy 14 days returns and exchanges</span><br/>
                        <span>Try & Buy might be available</span>
                    </div>
          </div>
          <div id="details">
            <h5>PRODUCT DETAILS <i className="fa-regular fa-rectangle-list"></i></h5>
            <small>
              <p>Navy Blue and Burgundy checked casual shirt, has a spread <br />collar, long sleeves, button placket, curved hem, and 1 patch <br /> pocket</p>
            </small>
            <h5>Size & Fit</h5>
            <small>
              <p>Slim fit <br />
                The model (height 6') is wearing a size 40</p>
            </small>
            <h5>Material & Care</h5>
            <small>
              <p>Material: 100% Cotton<br />
                Machine Wash</p>
            </small>
            <h5>Specifications</h5>
            <div>
              <div>
                <div>
                  <p>Sleeve Length</p>
                  <p>Long Sleeves</p>
                </div>
                {/* ... Add more specifications */}
              </div>
            </div>
          </div>
          <div id="userrating">
            <div id="rating">
              <div>
                <div>
                  <h5>RATING <i className="fa-regular fa-star"></i></h5>
                </div>
                <div>
                  <div>4.3</div>
                  <div><i className="fa-solid fa-star"></i></div>
                </div>
                <div><small> Verified Buyers</small></div>
              </div>
              <div>
                <p>5 &#9733;  <progress value="60" max="100"></progress></p>
                <p>4 &#9733; <progress value="50" max="100"></progress></p>
                <p>3 &#9733; <progress value="50" max="100"></progress></p>
                <p>2 &#9733; <progress value="50" max="100"></progress></p>
                {/* ... Add more star ratings */}
              </div>
            </div>
           
          </div>
          <div id="review">
            <h6>Customer Photos (84)</h6>
            <div>
              <div><img src="https://assets.myntassets.com/h_200,q_75,w_200,c_thumb,fl_progressive/assets/images/2022/4/2/bd28a647-a394-43bc-87c7-79a87e93087e1648870585917-IMG20220327220734.jpg" alt="Customer 1" /></div>
              {/* ... Add more customer photos */}
            </div>
            <h6>Customer Reviews (574)</h6>
            <div>
              <p>Material Quality is awesome. And the color of the shirt is exactly what's featured in the
                catalog. And it's somewhat long than I expected but it fits well with any sort of WROGN
                jeans. Grab it guys... ❤️</p>
              <div><img src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/12/9/33dd315e-2385-40c9-befb-34edac67d76a1607521330248-IMG_20201209_190812.jpg" alt="Customer Review" /></div>
              <div><span>Kunal Ghosh</span><span>6 Dec 2020</span></div>
            </div>
          </div>
        </div>
      </div>
      <div id="similarproduct">
        <h4></h4>
        <div>
          {/* ... Add similar products */}
        </div>
      </div>
      <> {allowUpdate ? (
        <div  className="update-form-container" style={{marginTop:"1px solid grey"}}>
           <p style={{textAlign:"right", color:"black", fontWeight:"700"}} onClick={closeUpate}>X</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
              
                
              
                {/* <legend>Fill your Details</legend> */}
                <label>Product Name:</label>
                <br />
                <input
                  style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                    border: "1px solid grey"
                  }}
                  type="text"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                />
                <br />

                <label>Product Price :</label>
                <br />
                <input
                  style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                    border: "1px solid grey"
                  }}
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                />
                <br />
                <label>Product Category :</label>
                  
                <select
                  id="select"
                  onChange={selectRole}
                >
                  <option value="Other">Other</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                  <option value="Electronics">Electronics</option>
                </select>
                <br />
                <label>Product Image :</label>
                <br />
                <input
                  style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                    border: "1px solid grey"
                  }}
                  type="text"
                  name="image"
                  value={productData.image}
                  onChange={handleChange}
                />
                <br />
                <input
                  style={{border:"2px solid #ff3e6c",fontSize:"17px",padding:"2%",borderRadius:"25px"}}
                  type="submit"
                  value="Update Product"
                 
                />
               
                  
            </form>
          </div>
        </div>
      ) : null}</>
    </div>
  );
};

export default Singleproduct;
