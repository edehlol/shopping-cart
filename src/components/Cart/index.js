import React from 'react';
import { Container, Title, List, TotalPrice, Total, Price, Checkout, ShopLink } from './style';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';

import chair from '../../img/chair.png';

const Cart = () => {
  return (
    <Container>
      <Title>CART</Title>
      <List>
        <CartItem img={chair} />
        <CartItem img={chair} />
      </List>
      <TotalPrice>
        <Total>Total</Total>
        <Price>1500</Price>
      </TotalPrice>

      <Checkout />
      <Link to="/shop">
        <ShopLink>Continue Shopping</ShopLink>
      </Link>
    </Container>
  );
};

export default Cart;
