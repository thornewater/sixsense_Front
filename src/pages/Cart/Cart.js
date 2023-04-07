import React, { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch('/public/data/cart.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  return (
    <div className="cart">
      <section className="cartBanner">
        <div className="cartTitle">
          <h2 className="titleText">장바구니</h2>
        </div>
      </section>
      <section className="cartInner">
        <div className="cartList">
          <div className="cartChoice">
            <div className="allChk">
              <input type="checkbox" className="checkbox" />
              <div className="allSelect">전체선택</div>
            </div>
            <div className="selectDel">
              <div className="borderLine" />
              <button className="selectChk">선택 삭제</button>
            </div>
          </div>
          <ul className="listContainer">
            <li className="product">
              <input type="checkbox" className="checkbox" />
              <div className="productImgName">
                <div className="imgBox">
                  <img />
                </div>
                <div className="textBox">
                  <p>일단 아무거나</p>
                </div>
              </div>
              <div className="quantityBox">
                <div className="count">
                  <button>-</button>
                  <input type="text" value="1" />
                  <button>+</button>
                </div>
                <div className="price">
                  <p>15000원</p>
                </div>
              </div>
              <div className="purchaseNow">
                <button>바로구매</button>
              </div>
            </li>
          </ul>
          <div className="orderBtnContainer">
            <div className="upperBtnBox">
              <button>선택상품 주문</button>
              <button>선택상품 선물하기</button>
            </div>
            <div className="bottomBtnBox">
              <button>전체상품 주문하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
