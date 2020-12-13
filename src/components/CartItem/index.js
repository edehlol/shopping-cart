import React from 'react';
import {
  Product,
  Thumbnail,
  ProductInfo,
  Title,
  Description,
  PriceAndQuantity,
  Price,
  Quantity,
} from './style';

const CartItem = ({ img }) => {
  return (
    <Product>
      <Thumbnail src={img} />
      <ProductInfo>
        <Title>Chair</Title>
        <Description>Volume Filler</Description>
      </ProductInfo>
      <PriceAndQuantity>
        <Price>500</Price>
        <Quantity />
      </PriceAndQuantity>
    </Product>
  );
};

export default CartItem;
