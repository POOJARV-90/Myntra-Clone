import React, { useEffect, useState } from 'react'
import "../MyntraWeb/Multipleproduct.css"
import { useNavigate } from 'react-router-dom';

const Multipleproduct = () => {
    const [isProductsExist, setIsProductsExist] = useState(false);
    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        const productsFromDb = JSON.parse(localStorage.getItem("Products"))
        if (productsFromDb?.length) {
            setIsProductsExist(true);
            setProducts(productsFromDb)
        } else {
            setIsProductsExist(false)
            setProducts([])
        }
    }, [])

    const tosingleproduct = (id) =>{
        console.log(id,"id")
          router(`/Singleproduct/${id}`)
    }

    console.log(products, " - products")


  return (
    <>
       <div id="main-mulpro">
            <div>
                <span>HomeKids  / </span> <span>Clothing / </span> <span>Wear Online Store</span>
                <h4> Kids Wear Online Store
                </h4>
            </div>
            <div id="body-multiple">
                <div id="left-multiple">
                    <div>
                        <h3>FILTERS</h3>
                    </div>
                     
                    <div>
                        <div><span> CATEGORIES</span> <i className="fa-solid fa-magnifying-glass"></i></div> 
                        
                        <input type="checkbox" id="checkbox"/><label>Tops</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Dresses</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Tshirts</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Shorts</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Hair Accessory</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Leggings</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Clothing Set</label> <br />
                        <input type="checkbox" id="checkbox"/><label>Shirts</label> <br />
                    </div>
                    <div>

                        <div><span> BRAND</span> <i class="fa-solid fa-magnifying-glass"></i></div>
                        <input type="checkbox" id="checkbox"/><label >V-Mart</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Gini and Jony</label> <br />
                        <input type="checkbox" id="checkbox"/><label >max</label> <br />
                        <input type="checkbox" id="checkbox"/><label >NUSYL</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Aye Candy</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Pantaloons Junior</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Bodycare Kids</label><br />
                        <input type="checkbox" id="checkbox"/><label >YK</label> <br />


                    </div>

                    <div>
                        <div> <span> PRICE</span> <i className="fa-solid fa-magnifying-glass"></i></div>
                        <input type="checkbox" id="checkbox"/><label >Rs. 89 to Rs. 19317</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Rs. 19317 to Rs. 38545</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Rs. 38545 to Rs. 57773</label> <br />
                        <input type="checkbox" id="checkbox"/><label >Rs. 57773 to Rs. 77001</label>  <br />


                    </div>
                    <div>
                        <div><span> COLOR</span> <i className="fa-solid fa-magnifying-glass"></i></div>
                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label> Green</label><br />
                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label>Black</label><br />
                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label>Blue</label><br />
                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>

                        <label>Red</label><br />
                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label>Yellow</label><br />

                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label>Pink</label><br />

                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label>Grey</label><br />

                        <input type="checkbox" />
                        <span style={{backgroundColor :'green'}}></span>
                        <label>Lavender</label><br />



                    </div>

                    <div>
                        <div><span> DISCOUNT RANGE</span> <i class="fa-solid fa-magnifying-glass"></i></div>
                        <input type="checkbox" id="checkbox"/><label >10% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >20% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >30% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >40% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >10% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >20% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >30% and above</label> <br />
                        <input type="checkbox" id="checkbox"/><label >40% and above</label> <br />


                    </div>




                </div>
                <div id="right">
                    <div>

                        <div><span>Bundles
                        {/* style="border: none; color: gray;"  style="border: none;"*/}
                                <select style={{border: 'none' , color : 'gray'}} >
                                    <option ></option>
                                </select>


                            </span>

                            <span>Country Of Origin
                                <select >
                                    <option ></option>
                                </select>
                            </span><span>Size
                                <select >
                                    <option ></option>
                                </select>
                            </span>
                        </div>

                        <div>
                            <div>
                                <span>Sort by:<b>Recommended</b></span>
                                <select style={{border:"none"}}>
                                    <option></option>
                                </select>
                            </div>


                        </div>

                    </div>

                    <div>

                    {!isProductsExist ? <div>No products</div>
                        :
                        <>
                         {products && products.map((pro) =>(
                            <div  onClick={() => tosingleproduct(pro.id)} id='single-pro' key={pro.name}  >
                             <img src={pro.image} />
                            <p>{pro.name}
                               
                             
                                </p>
                            <p> {pro.category}
                            </p>
                            <span> Rs.{pro.price} </span> <span><s>Rs.1849</s></span><span>  (40% OFF)</span>

                        </div>
                         ))}
                        
                        </>

                        

                    }

        

                    </div>



                </div>


            </div>


        </div>
    </>
  )
}

export default Multipleproduct