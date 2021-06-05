import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { WhatsNewContainer } from "./styled";
import { Heading } from "../../globalStyled";
import ProductCard from "../../components/productCard/ProductCard";
import { useHistory } from "react-router";

function WhatsNew() {
  const history = useHistory();
  const products = useSelector((state) => state.products);
  if (products.whatsNew.length === 0) {
    history.push("/home/shop");
  }
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <WhatsNewContainer>
      <Heading>What's new</Heading>
      <div>
        {products?.whatsNew?.map((product, index) => {
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
    </WhatsNewContainer>
  );
}

export default WhatsNew;
