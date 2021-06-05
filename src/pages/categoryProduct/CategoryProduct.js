import React,{useState,useEffect} from 'react'

import { useParams } from 'react-router';
import {useSelector} from "react-redux"

import { CategoryProductContainer } from "./styled";
import {Heading} from "../../globalStyled"

import ProductCard from "../../components/productCard/ProductCard";

function CategoryProduct() {
    let {category} = useParams()
    const productList = useSelector((state) => state.products.products);
    const [products, setproducts] = useState();

    useEffect(() => {
      if (productList) {
        const list = productList.filter((product) => {
          if (product.category === category) {
            return product;
          }
        });
        setproducts(list);
      }
    }, [category, productList]);

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);

    return (
      <CategoryProductContainer>
        <Heading>{category}</Heading>
        <div>
          {products?.map((product, index) => {
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
      </CategoryProductContainer>
    );
}

export default CategoryProduct
