import React from 'react';
import './CartItems.scss';
import { Product } from './Product';

export const CartItems = ({
  lists,
  setLists,
  selectAll,
  selectDel,
  checkingBox,
  onChangeProps,
  checkedItems,
  setCheckedItems,
}) => {
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
