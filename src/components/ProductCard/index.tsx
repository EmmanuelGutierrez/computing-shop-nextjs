import React, { useContext } from 'react';

import addToCartIcon from '@icons/bt_add_to_cart.svg';
import removeToCartIcon from '@icons/bt_remove_to_cart.svg';
import { IProduct } from '../../interfaces/IProduct';
import { AppContext, AppContextType } from '../../context/AppContext';
import styles from './ProductCard.module.scss';
import globalClasses from '@styles/globalClasses.module.scss';
import Image from 'next/image';
import { Loader } from '@componets/Loader';

const ProductCard = (prod: IProduct) => {
  const { addToCart, removeToCart, state } = useContext(AppContext) as AppContextType;

  const handleClickAdd = (p: IProduct) => {
    addToCart(p);
  };

  const handleClickRemove = (p: IProduct) => {
    removeToCart(p);
  };

  /* if (!state.cart.some((p) => p._id === payload._id)) {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  } */

  return (
    <div className={styles.ProductCard}>
      <Image src={prod.images[0].imageUrl} alt="product" width={'240px'} height={'240px'} layout="responsive" />

      <div className={styles['product-info']}>
        <div className={styles['product-info-text']}>
          <p>$ {prod.price}</p>
          <p>{prod.title}</p>
        </div>

        <figure>
          {state.cart.some((p) => p._id === prod._id) ? (
            <Image
              onClick={() => {
                handleClickRemove(prod);
              }}
              src={removeToCartIcon}
              alt="add-to-cart"
              height={35}
              width={35}
              layout="responsive"
            />
          ) : (
            <Image
              onClick={() => {
                handleClickAdd(prod);
              }}
              src={addToCartIcon}
              alt="add-to-cart"
              height={35}
              width={35}
              layout="responsive"
            />
          )}
        </figure>
      </div>
    </div>
  );
};

export { ProductCard };
