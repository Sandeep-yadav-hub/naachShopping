import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"

import AddToCartButton from "../../components/addToCartButton/AddToCartButton";

import {ProductContainer} from "./styled"
import {Heading} from "../../globalStyled"

import loading from "../../assests/images/loading.gif"

import VisibilitySensor from "react-visibility-sensor";


function Product() {
    let {id} = useParams()
    
    const productsList = useSelector(state => state.products.productsList)

    const [currentProduct,setCurrentProduct] = useState({})
    const [visibility, setVisibility] = useState(false);
    const [currentImg,setCurrentImg] = useState("")
    const [counter,setCounter] = useState(1)

    useEffect(() => {
        setCurrentProduct(productsList[id])
    }, [productsList[id]])

    useEffect(() => {
      setCurrentImg(currentProduct?.img1);
    }, [currentProduct]);

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
    
    const increment = ()=>{
      if(counter+1<=currentProduct.stock)
      setCounter(counter+1)
    }
    const decrement = ()=>{
      if(counter-1>=0){
        setCounter(counter-1)
      }
    }

    return (
      <ProductContainer>
        <div className="productImgContainer">
          <img className="productImg" src={currentImg ? currentImg : loading} />
          <div>
            <img
              className="productImg"
              onClick={() => setCurrentImg(currentProduct?.img1)}
              src={currentProduct ? currentProduct.img1 : loading}
            />
            <img
              className="productImg"
              onClick={() => setCurrentImg(currentProduct?.img2)}
              src={currentProduct?.img2 ? currentProduct?.img2 : loading}
            />
            <img
              className="productImg"
              onClick={() => setCurrentImg(currentProduct?.img3)}
              src={currentProduct?.img3 ? currentProduct?.img3 : loading}
            />
            <img
              className="productImg"
              onClick={() => setCurrentImg(currentProduct?.img4)}
              src={currentProduct?.img4 ? currentProduct?.img4 : loading}
            />
          </div>
        </div>
        <div className="productInfo">
          <Heading>{currentProduct?.name}</Heading>
          <div className="price">
            {currentProduct?.discount !== 0 && (
              <p className="oldPrice">
                Rs
                {currentProduct?.price -
                  (currentProduct?.price * currentProduct?.discount) / 100}
              </p>
            )}
            <p className="actualPrice">Rs {currentProduct?.price}</p>
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>{currentProduct?.description}</p>
            <h4>Material Used</h4>
            <p>{currentProduct?.materialUsed}</p>
            <h4>MADE IN INDIA</h4>
            <p>For Customization Click here</p>
          </div>
          <div className="addToCart">
            <div className="addToCartCounter">
              <p className="decrement noselect" onClick={() => decrement()}>
                -
              </p>
              <p className="counter">{counter}</p>
              <p className="increment noselect" onClick={() => increment()}>
                +
              </p>
            </div>
            <div className="stock">
              {currentProduct?.stock > 0 ? (
                <p className="inStock">In stock</p>
              ) : (
                <p className="outStock">Out of stock</p>
              )}
            </div>
          </div>
          {/* <button className="addToCardButton">Add to cart</button> */}
          <VisibilitySensor
            onChange={(isVisible) => {
              setVisibility(isVisible);
            }}
          >
            <div style={{opacity:"0"}}>cart</div>
          </VisibilitySensor>
          <AddToCartButton visible={visibility} qty={counter} id={currentProduct?._id} />
        </div>
      </ProductContainer>
    );
}

export default Product
