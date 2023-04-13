import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://10.58.52.91:3000/products/${location.search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setGoodList(data));
  }, [offset, limit, isSorted]);

  const categoryFilter = goodList => {
    const filterArray = [];
    goodList.map(item => filterArray.push(item.catagoryId));
    return filterArray.join();
  };

  const [cartInfo, setCartInfo] = useState({});
  // const { productId, quantity } = cartInfo;
  console.log(cartInfo);
  const goToCart = productId => {
    console.log(productId);
    fetch(`http://10.58.52.91:3000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY4MTM1MzI5NX0.0wHFSR9MKEZx2ZcrtipxU3i83e6-eQ5DwFq-EDeaVRM',
      },
      body: JSON.stringify({
        productId: productId,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(data => setCartInfo(data), navigate('/cart'));
  };

  return (
    <div className="productList">
      <div className="categoryBanner">
        <h1 className="categoryBannerTitle">Incense</h1>
      </div>
      <div className="inner">
        <div className="container">
          <NameBar isSorted={isSorted} setIsSorted={setIsSorted} />
          <SortBar goodList={goodList} categoryFilter={categoryFilter} />
          <GoodList
            limit={limit}
            offset={offset}
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
