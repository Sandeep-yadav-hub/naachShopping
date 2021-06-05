import React from 'react'
import { useHistory } from 'react-router';

import {CategoryCardContainer} from "./styled"
import loadingGif from "../../assests/images/loading.gif"

function CategoryCard({name,img,categoryId}) {
    const history = useHistory()
    const handelCategoryView = (categoryId)=>{
        history.push(`/home/shop/category/${categoryId}`)
    }

    return (
      <CategoryCardContainer onClick={() => handelCategoryView(categoryId)}>
        <img
          className="categoryImg"
          src={img ? img : loadingGif}
          style={{ height: img ? "auto" : "250px" }}
        />
        <div className="categoryInfo">
          <h1>{name}</h1>
        </div>
      </CategoryCardContainer>
    );
}

export default CategoryCard
