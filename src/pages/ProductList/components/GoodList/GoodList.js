import React from 'react';
import './GoodList.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

const GoodList = () => {
  return (
    <div className="goodList">
      <div className="goodListItem">
        <div className="image">
          <img className="data" src="/images/incense.jpeg" alt="data" />
          <img className="in" src="/images/in.jpeg" alt="data" />
          <AiOutlineShoppingCart className="hoverCart" />
        </div>
        <p className="item">CLOSET / FIG</p>
        <p className="price"> 25,000 WON</p>
        <div>
          <AiOutlineHeart className="heart" />
          <span className="count">1</span>
        </div>
      </div>

      <div className="goodListItem">
        <div className="image">
          <img className="data" src="/images/incense.jpeg" alt="data" />
          <img className="in" src="/images/in.jpeg" alt="data" />
          <AiOutlineShoppingCart className="hoverCart" />
        </div>
        <p className="item">CLOSET / FIG</p>
        <p className="price"> 25,000 WON</p>
        <div>
          <AiOutlineHeart className="heart" />
          <span className="count">1</span>
        </div>
      </div>

      <div className="goodListItem">
        <div className="image">
          <img className="data" src="/images/incense.jpeg" alt="data" />
          <img className="in" src="/images/in.jpeg" alt="data" />
          <AiOutlineShoppingCart className="hoverCart" />
        </div>
        <p className="item">CLOSET / FIG</p>
        <p className="price"> 25,000 WON</p>
        <div>
          <AiOutlineHeart className="heart" />
          <span className="count">1</span>
        </div>
      </div>

      <div className="goodListItem">
        <div className="image">
          <img className="data" src="/images/incense.jpeg" alt="data" />
          <img className="in" src="/images/in.jpeg" alt="data" />
          <AiOutlineShoppingCart className="hoverCart" />
        </div>
        <p className="item">CLOSET / FIG</p>
        <p className="price"> 25,000 WON</p>
        <div>
          <AiOutlineHeart className="heart" />
          <span className="count">1</span>
        </div>
      </div>

      <div className="goodListItem">
        <div className="image">
          <img className="data" src="/images/incense.jpeg" alt="data" />
          <img className="in" src="/images/in.jpeg" alt="data" />
          <AiOutlineShoppingCart className="hoverCart" />
        </div>
        <p className="item">CLOSET / FIG</p>
        <p className="price"> 25,000 WON</p>
        <div>
          <AiOutlineHeart className="heart" />
          <span className="count">1</span>
        </div>
      </div>

      <div className="goodListItem">
        <div className="image">
          <img className="data" src="/images/incense.jpeg" alt="data" />
          <img className="in" src="/images/in.jpeg" alt="data" />
          <AiOutlineShoppingCart className="hoverCart" />
        </div>
        <p className="item">CLOSET / FIG</p>
        <p className="price"> 25,000 WON</p>
        <div>
          <AiOutlineHeart className="heart" />
          <span className="count">1</span>
        </div>
      </div>
    </div>
  );
};

export default GoodList;
