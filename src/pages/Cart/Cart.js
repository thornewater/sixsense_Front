import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';
import { PriceInfo } from './PriceInfo';
import './Cart.scss';

const Cart = () => {
  const [lists, setLists] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const selectAll = checked => {
    if (checked) {
      // const idArray = [];
      // lists.map(item => idArray.push(item));
      setCheckedItems(lists);
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

  const separateCartId = array => {
    const cartIdQuary = [];
    array.map(item => {
      cartIdQuary.push(item.cartId);
    });
    return cartIdQuary.join();
  };

  const selectDel = async () => {
    try {
      const res = await fetch(
        `http://10.58.52.91:3000/carts?cartId=${separateCartId(checkedItems)}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;utf-8',
            authorization: localStorage.getItem('token'),
          },
        }
      );
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

  useEffect(() => {
    fetch('http://10.58.52.91:3000/carts/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setLists(data);
        console.log(data);
      });
  }, [checkedItems]);

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
