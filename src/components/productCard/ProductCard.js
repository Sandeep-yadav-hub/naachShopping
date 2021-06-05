import React,{useEffect} from 'react'

import {useHistory} from "react-router-dom"

import { Product } from "./styled";
import loadingGif from "../../assests/images/loading.gif"
import jQuery from "jquery"; 


function ProductCard({sku, img,productName, actualPrice, discountedPrice }) {

  const history = useHistory()

  const handelProductView = (sku)=>{
    history.push(`/home/shop/products/${sku}`)
  }

  function isElementInViewport(el) {
    // console.log(el[0].getBoundingClientRect());
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }
  function checkInView(element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    }
  }

  useEffect(() => {
    const productCard = document.querySelectorAll(".productCard");
    
    productCard.forEach((element) => checkInView(element));

    window.addEventListener("scroll", () => {
      productCard.forEach((element) => checkInView(element));
    });
  }, []);
  
  return (
    <Product onClick={()=>handelProductView(sku)} >
      <div className="fadeInUp productCard">
        <img className="productImg" src={img ? img : loadingGif} style={{height:img?"auto":"250px"}}/>
        <div className="productInfo">
          <h1>{productName}</h1>
          <hr />
          <div>
            {actualPrice === discountedPrice ? (
              <p className="newPrice">Rs {discountedPrice}</p>
            ) : (
              <>
                <p className="oldPrice">Rs {actualPrice}</p>
                <p className="newPrice">Rs {discountedPrice}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Product>
  );
}

export default ProductCard
