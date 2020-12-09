import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, List, ListItem, CartIcon } from './styles';

const NavigationBar = () => {
  return (
    <Header>
      <Nav>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/shop">Shop</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </ListItem>
        </List>
      </Nav>
    </Header>
  );
};

export default NavigationBar;
