import React from 'react';
import { api } from '../../api';
import './Product.scss';

export const Product = ({
  product,
  onChangeProps,
  setLists,
  checkedItems,
  checkingBox,
}) => {
  const totalPrice = () => {
    if (product.discountRate > 0) {
      const discountPrice =
        product.productPrice - product.productPrice * product.discountRate;
      return discountPrice * product.productQuantity;
    } else {
      return product.productPrice * product.productQuantity;
    }
  };

  const addIncreaseHandler = async e => {
    e.preventDefault();
    const newQuantity = product.productQuantity + 1;
    await patchQuantity(product.cartId, newQuantity);
    onChangeProps(product.productId, 'productQuantity', newQuantity);
  };

  const subDecreaseHandler = async e => {
    e.preventDefault();
    if (product.productQuantity < 2) {
      return;
    } else {
      const newQuantity = product.productQuantity - 1;
      await patchQuantity(product.cartId, newQuantity);
      onChangeProps(product.productId, 'productQuantity', newQuantity);
    }
  };

  async function patchQuantity(cartId, productQuantity) {
    const res = await fetch(`${api.carts}`, {
      method: 'PATCH',
      body: JSON.stringify({
        cartId: cartId,
        quantity: productQuantity,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      credentials: 'include',
    });
    if (!res) {
      throw new Error(`HTTP error! status : ${res.status}`);
    }
  }

  return (
    <li className="product" key={product.productId}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={e => checkingBox(e.target.checked, product)}
        checked={
          checkedItems.some(item => item.productId === product.productId)
            ? true
            : false
        }
      />
      <div className="productImgName">
        <div className="imgBox">
          <img
            src={product.productImages[0]}
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
