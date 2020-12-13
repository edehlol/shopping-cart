import React from 'react';
import { Title, List } from './style';
import CartItem from '../CartItem';

import chair from '../../img/chair.png';

const Cart = () => {
  return (
    <div>
      <Title>CART</Title>
      <List>
        <CartItem img={chair} />

        <CartItem img={chair} />

        <CartItem img={chair} />
      </List>
    </div>
  );
};

export default Cart;
