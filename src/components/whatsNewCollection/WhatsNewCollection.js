import React,{useEffect,useState} from 'react'

import {useSelector} from "react-redux"

import { WhatsNewContainer } from "./styled";
import {IntroContainer,Intro,Tag} from "../../pages/home/styled"
import {Heading} from "../../globalStyled"

import ProductCarousal from "../productCarousal/ProductCarousal";

import loading from "../../assests/images/loading.gif";



function WhatsNewCollection({collections,productList}) {
    const [newInStore, setNewInStore] = useState();
    const [whatsNew, setWhatsNew] = useState([]);


    useEffect(() => {
      setNewInStore(collections[collections.length - 1]);
    }, [collections[collections.length - 1], productList]);

    useEffect(() => {
      if (productList?.products && newInStore?._id) {
        try {
          var collectionProduct = productList.products.filter((product) => {
            return product && product.collectionCode === newInStore._id;
          });
          setWhatsNew(collectionProduct);
        } catch (error) {
          console.log(error);
        }
      }
    }, [newInStore]);

    

    return (
      <WhatsNewContainer className="slider">
        <Heading style={{ marginBottom: "40px" }}>New in Store</Heading>
        {newInStore && (
        <>
          <IntroContainer className="slider">
            <div className="newInStoreIntroContainer slide">
              <img
                className="newInStoreBanner"
                src={newInStore?.collectionSmallImg}
                alt="Studio Naach New in Store"
              />
              <Tag style={{ bottom: "50px", right: "10px" }}>
                {newInStore?.collectionName.split(" ")[0]}{" "}
                {newInStore?.collectionName.split(" ")[1]}
              </Tag>
            </div>
            <Intro className="newInStoreIntro">
              <h1 className="newInStoreHeading">
                {" "}
                {newInStore?.collectionName}{" "}
              </h1>
              <p className="newInStoreDescription">
                {newInStore?.shortDescription}
              </p>
            </Intro>
          </IntroContainer>
          {whatsNew && <ProductCarousal productList={whatsNew} />}
        </>
        )}
      </WhatsNewContainer>
    );
}

export default WhatsNewCollection

