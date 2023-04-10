import React from 'react';
import './CartItems.scss';

export const CartItems = ({ lists }) => {
  return (
    <div className="cartItems">
      <ul className="listContainer">
        {lists.map(function (product) {
          return (
            <li className="product" key={product.id}>
              <input type="checkbox" className="checkbox" />
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
                  <button>-</button>
                  <input type="text" defaultValue={product.quantity} />
                  <button>+</button>
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
