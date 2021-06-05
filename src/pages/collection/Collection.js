import React,{useEffect} from 'react'
import {useSelector} from "react-redux"
import { useHistory } from "react-router";

import CollectionCard from "../../components/collectionCard/CollectionCard"

import {CollectionContainer} from "./styled"
import {Heading} from "../../globalStyled"

function Collection() {
    const history = useHistory()
    const collections = useSelector(state => state.collections)
    
    function handelCollectionProduct (id){
        history.push(`/home/shop/collections/${id}`)
    }

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);

    return (
        <CollectionContainer>
            <Heading>Collections</Heading>
            <div>
                {collections?(
                    collections.map((collection,index)=>{
                        return (
                            <div key={index} onClick={()=>handelCollectionProduct(collection._id)}>
                                <CollectionCard  img={collection.collectionImg} collectionName={collection.collectionName} description={collection.shortDescription}/>
                            </div>
                        );
                    })
                ):(
                    <CollectionCard />
                )}
            </div>
        </CollectionContainer>
    )
}

export default Collection
