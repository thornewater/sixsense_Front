import React from 'react';
import './Product.scss';

export const Product = ({
  product,
  onChangeProps,
  setLists,
  checkedItems,
  checkingBox,
}) => {
  const totalPrice = () => {
    if (product.discount_rate > 0) {
      const discountPrice =
        product.price - product.price * product.discount_rate;
      return discountPrice * product.quantity;
    } else {
      return product.price * product.quantity;
    }
  };

  const addIncreaseHandler = e => {
    e.preventDefault();
    onChangeProps(product.id, 'quantity', product.quantity + 1);
  };
  const subDecreaseHandler = e => {
    e.preventDefault();
    if (product.quantity < 2) {
      return;
    } else {
      onChangeProps(product.id, 'quantity', product.quantity - 1);
    }
  };

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
          <button onClick={subDecreaseHandler}>-</button>
          <div className="productQuantityBox">
            <p>{product.quantity}</p>
          </div>
          <button onClick={addIncreaseHandler}>+</button>
        </div>
        <div className="price">
          <p>{totalPrice()}</p>
        </div>
      </div>
      <div className="purchaseNow">
        <button>바로구매</button>
      </div>
    </li>
  );
};
