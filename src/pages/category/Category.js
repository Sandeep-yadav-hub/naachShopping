import React ,{useEffect} from 'react'
import {useSelector} from "react-redux"

import CategoryCard from "../../components/categoryCard/CategoryCard"

import { CategoryContainer } from "./styled";
import {Heading} from "../../globalStyled"

function Category() {

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);

    const products = useSelector(state => state.products)
    return (
        <CategoryContainer>
            <Heading>Category</Heading>
            <div>
                {products?.categoryList?.map((category,index)=>{
                    return(
                        <CategoryCard key={index} img={category.img} name={category.category} categoryId={category.category} />
                    )
                })}
            </div>
        </CategoryContainer>
    )
}

export default Category
