import React, { useState } from 'react';
import './CartItems.scss';
import { Product } from './Product';

export const CartItems = ({ lists, setLists }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const selectAll = checked => {
    if (checked) {
      const idArray = [];
      lists.map(item => idArray.push(item.id));
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  };

  const checkingBox = (check, product) => {
    if (check) {
      setCheckedItems([...checkedItems, product.id]);
    } else {
      setCheckedItems(
        checkedItems.filter(checkedItem => checkedItem !== product.id)
      );
    }
  };

  const onChangeProps = (id, key, value) => {
    setLists(prevState => {
      return prevState.map(items => {
        if (items.id === id) {
          return { ...items, [key]: value };
        } else {
          return { ...items };
        }
      });
    });
  };

  const selectDel = () => {
    setLists(prevState => {
      return prevState.filter(items => {
        return !checkedItems.includes(items.id);
      });
    });
  };

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
          <button className="selectChk" onClick={selectDel}>
            선택 삭제
          </button>
        </div>
      </div>
      <ul className="listContainer">
        {lists.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
              setLists={setLists}
              checkedItems={checkedItems}
              checkingBox={checkingBox}
              onChangeProps={onChangeProps}
            />
          );
        })}
      </ul>
    </div>
  );
};
