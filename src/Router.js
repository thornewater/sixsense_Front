import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Gift from './pages/Gift/Gift';
import Main from './pages/Main/Main';
import Payment from './pages/Payment/Payment';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProductList/" element={<ProductList />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Gift" element={<Gift />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
