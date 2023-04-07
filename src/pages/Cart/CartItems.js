import React from 'react';
import './CartItems.scss';

export const CartItems = ({ lists }) => {
  return (
    <div className="CartItems">
      <ul className="listContainer">
        {lists.map(function (item) {
          return (
            <li className="product" key={item.id}>
              <input type="checkbox" className="checkbox" />
              <div className="productImgName">
                <div className="imgBox">
                  <img
                    src={item.detail_image}
                    alt="제품사진"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="textBox">
                  <p>{item.name}</p>
                </div>
              </div>
              <div className="quantityBox">
                <div className="count">
                  <button>-</button>
                  <input type="text" defaultValue={item.quantity} />
                  <button>+</button>
                </div>
                <div className="price">
                  <p>{item.price}</p>
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
