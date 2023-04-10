import React, { useState } from 'react';
import './CartItems.scss';

export const CartItems = ({ lists }) => {
  // const [isSelectAll, setIsSelectAll] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const checkingBox = (check, product) => {
    if (check) {
      setCheckedItems([...checkedItems, product]);
      setTotalPrice(totalPrice + product.price);
    } else {
      setCheckedItems(
        checkedItems.filter(checkedItem => checkedItem !== product)
      );
      setTotalPrice(totalPrice - product.price);
    }
  };

  const selectAll = checked => {
    if (checked) {
      const idArray = [];
      lists.map(item => idArray.push(item.id));
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  };

  const deleteAll = () => {
    setCheckedItems([]);
  };

  console.log(checkedItems);
  console.log(totalPrice);
  return (
    <div className="cartItems">
      <div className="cartChoice">
        <div className="allChk">
          <input
            type="checkbox"
            className="checkbox"
            onChange={e => selectAll(e.target.checked)}
            checked={checkedItems.length === lists.length ? true : false}
          />
          <div className="allSelect">전체선택</div>
        </div>
        <div className="selectDel">
          <div className="borderLine" />
          <button className="selectChk" onClick={deleteAll}>
            선택 삭제
          </button>
        </div>
      </div>
      <ul className="listContainer">
        {lists?.map(function (product) {
          return (
            <li className="product" key={product.id}>
              <input
                type="checkbox"
                className="checkbox"
                onChange={e => checkingBox(e.target.checked, product)}
                checked={checkedItems.includes(product.id) ? true : false}
              />
              <div className="productImgName">
                <div className="imgBox">
                  <img
                    src={product.detail_image}
                    alt="제품사진"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="textBox">
                  <p>{product.name}</p>
                </div>
              </div>
              <div className="quantityBox">
                <div className="count">
                  <button onClick={() => (product.quantity -= 1)}>-</button>
                  <input type="text" defaultValue={product.quantity} />
                  <button onClick={() => (product.quantity += 1)}>+</button>
                </div>
                <div className="price">
                  <p>{product.price}</p>
                </div>
              </div>
              <div className="purchaseNow">
                <button>바로구매</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
