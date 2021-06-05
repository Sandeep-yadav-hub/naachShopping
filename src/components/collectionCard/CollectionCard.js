import React from 'react'

import {CollectionCardContainer} from "./styled"
import { ReadMore } from "../../pages/home/styled";


import loadingGif from "../../assests/images/loading.gif"
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";


function CollectionCard({ img, collectionName, description }) {
  return (
    <CollectionCardContainer >
        <img className="productImg" src={img ? img : loadingGif} style={{ minHeight: img ? "auto" : "200px" }}/>
        <div className="collectionInfo">
            <h1>{collectionName ? collectionName : "########"}</h1>
            <p>{description ? description : "#######################"}</p>
        </div>
        <ReadMore style={{marginBottom:"20px"}}>
            <span style={{marginLeft:"5%"}}>Explore</span>
            <ArrowForwardOutlinedIcon />
        </ReadMore>
    </CollectionCardContainer>
  );
}

export default CollectionCard
