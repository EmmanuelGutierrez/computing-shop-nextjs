import React, { ChangeEvent, ChangeEventHandler, useContext } from 'react';

import iconClose from '@icons/icon_close.png';
import { IProduct } from '../../interfaces/IProduct';
import { AppContext, AppContextType } from '../../context/AppContext';
import style from './ShoppingCartItem.module.scss';
import globalClasses from '@styles/globalClasses.module.scss';
import Image from 'next/image';

const ShoppingCartItem = (props: IProduct) => {
  const { images, title, price, quantity } = props;
  const { addToCart, decrementCart } = useContext(AppContext) as AppContextType;

  const handleIncrementClick = (prod: IProduct) => {
    addToCart(prod);
  };
  const handleDecrementClick = (prod: IProduct) => {
    decrementCart(prod);
  };

  return (
    <div className={style.ShoppingCartItemContainer}>
      <div className={style.ShoppingCartItem}>
        <figure>
          <Image src={images[0].imageUrl} alt={title} height={70} width={70} />
        </figure>
        <p>{title}</p>
        <p>$ {quantity && price * quantity}</p>

        {/* <img
          src={iconClose}
          alt="close"
          onClick={() => {
            removeToCart(props);
          }}
        /> */}
      </div>
      <div className={style.inputNumber}>
        {props.quantity === 1 ? (
          <button
            className={`${globalClasses['button']} ${globalClasses['primary-button']} ${globalClasses['tertiary-button']}`}
            onClick={() => {
              handleDecrementClick(props);
            }}
          >
            x
          </button>
        ) : (
          <button
            className={`${globalClasses['button']} ${globalClasses['primary-button']}`}
            onClick={() => {
              handleDecrementClick(props);
            }}
          >
            -
          </button>
        )}
        <input type="number" disabled value={quantity} />

        <button
          className={`${globalClasses['button']} ${globalClasses['primary-button']}`}
          onClick={() => {
            handleIncrementClick(props);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export { ShoppingCartItem };
