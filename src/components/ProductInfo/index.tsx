import React from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
const ProductInfo = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/dcfnbbld6/image/upload/v1648077579/ndwq6yfftpzjnwe6vayx.jpg"
        alt="keyboard"
      />
      <div className="ProductInfo">
        <p>$8000,00</p>
        <p>Keyboard</p>
        <h3>Description</h3>
        <p>
          Redragon K530 Draconic 60% Compact RGB Wireless Mechanical Keyboard, 61 Keys Tenkeyless Designed 5.0 Bluetooth
          Gaming Keyboard with Tactile Brown Switches and 16.8 Million RGB Lighting for PC, Tablet, Cell Phone
        </p>
        <button className="primary-button button add-to-cart-button">
          <img src={addToCart} alt="add-to-cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
