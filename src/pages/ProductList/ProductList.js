// ProductList.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import './ProductList.scss';
import NameBar from './components/NameBar/NameBar';
import { useSearchParams } from 'react-router-dom';
import SortBar from './components/SortBar/SortBar';
import GoodList from './components/GoodList/GoodList';
import ChangeBtn from './components/ChangeBtn/ChangeBtn';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [goodList, setGoodList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [cartInfo, setCartInfo] = useState({});
  const location = useLocation();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${api.products}/${location.search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setGoodList(data.response));
  }, [offset, limit, isSorted, searchParams]);

  const categoryFilter = goodList => {
    const filterArray = [];
    goodList.map(item => filterArray.push(item.categoryId));
    return filterArray.join();
    // console.log(filterArray);
  };

  // const { productId, quantity } = cartInfo;
  const goToCart = productId => {
    fetch(`${api.carts}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId: productId,
        quantity: 1,
      }),
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setCartInfo(data);
        navigate('/cart');
      });
  };

  return (
    <div className="productList">
      <div className="categoryBanner">
        <h1 className="categoryBannerTitle">Incense</h1>
      </div>
      <div className="inner">
        <div className="container">
          <NameBar isSorted={isSorted} setIsSorted={setIsSorted} />
          <SortBar
            goodList={goodList}
            categoryFilter={categoryFilter}
            setSearchParams={setSearchParams}
          />
          <GoodList
            searchParams={searchParams}
            goodList={goodList}
            setGoodList={setGoodList}
            goToCart={goToCart}
          />
          <ChangeBtn
            setSearchParams={setSearchParams}
            offset={offset}
            searchParams={searchParams}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
