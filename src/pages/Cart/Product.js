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
    if (product.productDiscountRate > 0) {
      const discountPrice =
        product.productPrice -
        product.productPrice * product.productDiscountRate;
      return discountPrice * product.productQuantity;
    } else {
      return product.productPrice * product.productQuantity;
    }
  };

  const addIncreaseHandler = e => {
    e.preventDefault();
    onChangeProps(
      product.productId,
      'productQuantity',
      product.productQuantity + 1
    );
  };
  const subDecreaseHandler = e => {
    e.preventDefault();
    if (product.productQuantity < 2) {
      return;
    } else {
      onChangeProps(
        product.productId,
        'productQuantity',
        product.productQuantity - 1
      );
    }
  };

  return (
    <li className="product" key={product.productId}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={e => checkingBox(e.target.checked, product)}
        checked={checkedItems.includes(product.productId) ? true : false}
      />
      <div className="productImgName">
        <div className="imgBox">
          <img
            src={product.productimages[0]}
            alt="제품사진"
            style={{ width: '100%' }}
          />
        </div>
        <div className="textBox">
          <p>{product.productName}</p>
        </div>
      </div>
      <div className="quantityBox">
        <div className="count">
          <button onClick={subDecreaseHandler}>-</button>
          <div className="productQuantityBox">
            <p>{product.productQuantity}</p>
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
