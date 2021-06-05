import React from 'react'

import { ButtonContainer,Button } from "./styled";

function AddToCartButton({qty,id,visible}) {

    const addToCart = (qty,id)=>{
        console.log(qty,id)
    }
    return (
      <ButtonContainer visible={visible}>
        <Button visible={visible} onClick={() => addToCart(qty, id)}>Add to cart</Button>
      </ButtonContainer>
    );
}

export default AddToCartButton
