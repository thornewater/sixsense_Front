import React from 'react';
import './ProductList.scss';
import NameBar from './components/NameBar/NameBar';
import SortBar from './components/SortBar/SortBar';
import GoodList from './components/GoodList/GoodList';
import ChangeBtn from './components/ChangeBtn/ChangeBtn';

const ProductList = () => {
  // useEffect(() => {
  //   fetch('', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
  //     body: JSON.stringify({
  //       title: 'df',
  //       content: '서버에 요청할때 담아서 보내는 정보',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);
  return (
    <div className="productList">
      <div className="categoryBanner">
        <h1 className="categoryBannerTitle">Incense</h1>
      </div>
      <div className="inner">
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
