import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
};

export default App;
