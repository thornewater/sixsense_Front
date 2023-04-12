import React, { useState } from 'react';
import './ProductList.scss';
import NameBar from './components/NameBar/NameBar';
import { useSearchParams } from 'react-router-dom';
import SortBar from './components/SortBar/SortBar';
import GoodList from './components/GoodList/GoodList';
import ChangeBtn from './components/ChangeBtn/ChangeBtn';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [goodList, setGoodList] = useState([]);
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  // const categoryFilter = goodList => {
  //   const filterArray = [];
  //   goodList.map(item => filterArray.push(item.catagoryId));
  //   return filterArray.join();
  // };

  const [sortIncDec, setSortIncDec] = useState('productId');

  return (
    <div className="productList">
      <div className="categoryBanner">
        <h1 className="categoryBannerTitle">Incense</h1>
      </div>
      <div className="inner">
        <div className="container">
          <NameBar />
          <SortBar goodList={goodList} />
          <GoodList
            limit={limit}
            offset={offset}
            searchParams={searchParams}
            goodList={goodList}
            setGoodList={setGoodList}
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
