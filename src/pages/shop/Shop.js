import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useHistory} from "react-router-dom"

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ProductCarousal from "../../components/productCarousal/ProductCarousal";
import WhatsNewCollection from "../../components/whatsNewCollection/WhatsNewCollection";

import {
  CollectionContainer,
  ShopContainer,
  BestSellerContainer,
} from "./styled";
import {Heading} from "../../globalStyled"

function Shop() {
    const history = useHistory()
    const products = useSelector(state => state.products)
    const collections = useSelector(state => state.collections)

    function handelCollectionProduct({e,id}) {
      e.preventDefault()
      history.push(`/home/shop/collections/${id}`);
    }
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);

    return (
      <ShopContainer>
        <CollectionContainer>
          <Heading>Collections</Heading>
          <OwlCarousel
            className="carousel"
            items={1}
            margin={40}
            lazyLoad={true}
            autoWidth={true}
            stagePadding="50px"
            loop={true}
            autoplay={true}
            autoplayTimeout={2000}
            autoplayHoverPause={true}
          >
            {collections?.map((collection, index) => {
              return (
                <div
                  key={index}
                  class="collectionBanner item"
                  style={{
                    backgroundImage: `url(${collection.collectionImg})`,
                    backgroundPosition:"50% 50%"
                  }}
                >
                  <div className="collectionDescription">
                    <div>
                      <h1>{collection.collectionName}</h1>
                      <p>{collection.shortDescription}</p>
                      <button onClick={e=>handelCollectionProduct({id:collection._id,e})}>SHOP NOW</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </CollectionContainer>
        <BestSellerContainer>
          <Heading style={{ marginBottom: "40px" }}>Our Best Seller's</Heading>
          {products && <ProductCarousal productList={products.bestSeller} />}
        </BestSellerContainer>
        <WhatsNewCollection
          collections={collections}
          productList={products}
        />
      </ShopContainer>
    );
}

export default Shop
