import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { CartPovider } from './provider/cart/cart.context';

import './index.css';
import App from './App';

ReactDOM.render(
  <CartPovider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </CartPovider>,
  document.getElementById('root')
);
