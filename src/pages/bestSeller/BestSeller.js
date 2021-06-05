import React,{useEffect} from 'react'

import {Heading} from "../../globalStyled"
import {useSelector} from "react-redux"
import { BestSellerContainer } from "./styled";

import ProductCard from "../../components/productCard/ProductCard"

function BestSeller() {
    const productList = useSelector((state) => state.products);

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [])
    
    return (
      <BestSellerContainer>
        <Heading>Best Seller</Heading>
        <div>
          {productList.bestSeller?.map((product, index) => {
            return (
              <div>
                <ProductCard
                  key={index}
                  sku={product.sku}
                  img={product.img1}
                  productName={product.name}
                  actualPrice={product.price}
                  discountedPrice={
                    product.price - (product.price * product.discount) / 100
                  }
                />
              </div>
            );
          })}
        </div>
      </BestSellerContainer>
    );
}

export default BestSeller
