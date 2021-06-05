import React,{useState,useEffect} from 'react'

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ProductCard from "../productCard/ProductCard"; 

import {ProductCarousalContainer} from "./styled"

function ProductCarousal({productList}) {

    const [products, setproducts] = useState()
    useEffect(() => {
      setproducts(productList);
    }, [productList]);

    return (
      <ProductCarousalContainer>
        <OwlCarousel
          className="carousel"
          items={2}
          margin={40}
          lazyLoad={true}
          autoWidth={true}
          stagePadding="50px"
          // style={{ marginLeft: "30px" }}
        >
          {productList.length > 0
            ? productList.map((product, index) => {
                return (
                  <ProductCard
                    class="item"
                    sku={product.sku}
                    key={index}
                    img={product.img1}
                    productName={product.name}
                    actualPrice={product.price}
                    discountedPrice={
                      product.price - (product.price * product.discount) / 100
                    }
                  />
                );
              })
            : [...Array(4)].map((x, i) => {
                return (
                  <ProductCard
                    key={i}
                    class="item"
                    productName="######"
                    actualPrice="###"
                    discountedPrice="###"
                  />
                );
              })}
        </OwlCarousel>
      </ProductCarousalContainer>
    );
}

export default ProductCarousal
