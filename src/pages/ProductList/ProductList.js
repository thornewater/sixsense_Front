import React from 'react';
import './ProductList.scss';
// import SubLnb from './components/SubLnb/SubLnb';
import NameBar from './components/NameBar/NameBar';
import SortBar from './components/SortBar/SortBar';
import GoodList from './components/GoodList/GoodList';
import ChangeBtn from './components/ChangeBtn/ChangeBtn';

const ProductList = () => {
  return (
    <div className="productList">
      <div className="catBanner">
        <h1 className="catBannerTitle">Incense</h1>
      </div>
      <div className="inner">
        {/* <SubLnb /> */}
        <div className="container">
          <NameBar />
          <SortBar />
          <GoodList />
          <ChangeBtn />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
