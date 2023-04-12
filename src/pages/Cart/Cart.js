import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';
import { PriceInfo } from './PriceInfo';
import './Cart.scss';

const Cart = () => {
  const [lists, setLists] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.91:3000/carts/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY4MTIyMDY5Nn0.jcEr96OmCN5gv239vBcOYsUv8mXmrV0Oodn1tfcWG8A',
      },
    })
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  const selectAll = checked => {
    if (checked) {
      const idArray = [];
      lists.map(item => idArray.push(item));
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  };

  const checkingBox = (check, product) => {
    if (check) {
      setCheckedItems([...checkedItems, product]);
    } else {
      setCheckedItems(
        checkedItems.filter(
          checkedItem => checkedItem.productId !== product.productId
        )
      );
    }
  };

  const onChangeProps = (id, key, value) => {
    setLists(prevState => {
      return prevState.map(items => {
        if (items.productId === id) {
          return { ...items, [key]: value };
        } else {
          return { ...items };
        }
      });
    });
  };

  const selectDel = async () => {
    try {
      const res = await fetch(`http://10.58.52.91:3000/carts`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;utf-8',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY4MTE4MTg0OX0.esY9cBvk1sdSNDQnAKHhwHlwjBd-fd3Pv2jITJctvEw',
        },
      });
      if (res.ok) {
        setLists(prevState => {
          return prevState.filter(items => {
            return !checkedItems.includes(items.productId);
          });
        });
        setCheckedItems([]);
      } else {
        throw new Error('서버오류!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <section className="cartBanner">
        <div className="cartTitle">
          <h2 className="titleText">장바구니</h2>
        </div>
      </section>
      <section className="cartInner">
        <div className="cartList">
          <CartItems
            lists={lists}
            setLists={setLists}
            selectAll={selectAll}
            checkingBox={checkingBox}
            onChangeProps={onChangeProps}
            selectDel={selectDel}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
          <div className="orderBtnContainer">
            <div className="upperBtnBox">
              <button>
                <Link
                  to="/Payment"
                  className="linkBtnStyle"
                  state={checkedItems}
                >
                  선택상품 주문
                </Link>
              </button>
              <button>
                <Link to="/Gift" className="linkBtnStyle" state={checkedItems}>
                  선택상품 선물하기
                </Link>
              </button>
            </div>
            <div className="bottomBtnBox">
              <button>
                <Link to="/Payment" className="linkBtnStyle" state={lists}>
                  전체상품 주문하기
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="priceInfoBox">
          <PriceInfo lists={lists} checkedItems={checkedItems} />
        </div>
      </section>
    </div>
  );
};

export default Cart;
