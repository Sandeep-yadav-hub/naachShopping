import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useSelector} from "react-redux"

import { CollectionProductContainer } from "./styled";
import {Heading} from "../../globalStyled"

import ProductCard from "../../components/productCard/ProductCard"


function CollectionProduct() {
    let { id } = useParams();
    const collectionList = useSelector(state => state.collections)
    const productList = useSelector(state => state.products.products)
    const [products, setproducts] = useState()
    const [collection, setCollection] = useState()

    useEffect(() => {
      if (productList) {
        const list = productList.filter((product) => {
          if (product.collectionCode === id) {
            return product;
          }
        });
        setproducts(list);
      }
      if (collectionList) {
        const collList = collectionList.filter((collection) => {
          if (collection._id === id) {
            return collection;
          }
        });
        setCollection(collList[0]);
      }
    }, [id, collectionList, productList]);

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);


    return (
      <CollectionProductContainer>
        <Heading>{collection?.collectionName}</Heading>
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
      </CollectionProductContainer>
    );
}

export default CollectionProduct
