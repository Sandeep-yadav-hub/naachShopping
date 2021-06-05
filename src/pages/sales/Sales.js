import React ,{useEffect} from 'react'

import {useSelector} from "react-redux"
import {SalesContainer} from "./styled"
import {Heading} from "../../globalStyled"
import ProductCard from "../../components/productCard/ProductCard"
import { useHistory } from 'react-router'


function Sales() {
    const history = useHistory()
    const products = useSelector(state => state.products)
    if(products.sales.length===0){
        history.push("/home/shop")
    }
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);

    return (
      <SalesContainer>
        <Heading>Sales</Heading>
        <div>
          {products?.sales?.map((product, index) => {
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
      </SalesContainer>
    );
}

export default Sales
