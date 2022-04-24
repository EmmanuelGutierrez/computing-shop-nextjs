import React, { useContext } from 'react';
import { ShoppingCartItem } from '../../components/ShoppingCartItem';

import arrow from '@icons/flechita.svg';
import { AppContext, AppContextType } from '../../context/AppContext';
import { IProduct } from '../../interfaces/IProduct';
import Image from 'next/image';
import style from './ShoppingCart.module.scss';
import globalClasses from '@styles/globalClasses.module.scss';
import Link from 'next/link';

interface props {
  activeState: boolean;
}
interface productQ extends IProduct {
  quantity: number;
}

const ShoppingCart = (props: props): JSX.Element => {
  const { state } = useContext(AppContext) as AppContextType;

  let total = 0;
  state.cart.map((item) => {
    const p = item as productQ;
    total += p.price * p.quantity;
  });

  return (
    <aside className={`${style.ShoppingCart} ${props.activeState && style.active}`}>
      <div className={style['title-container']}>
        <Image src={arrow} alt="arrow" />
        <p className={style.title}>Shopping cart</p>
      </div>
      <div className={style['my-order-content']}>
        {state.cart.map((p) => (
          <ShoppingCartItem key={`CartItem${p._id}`} {...p} />
        ))}
        <div className={style.order}>
          <p>
            <span>Total</span>
          </p>
          <p>$ {total}</p>
        </div>
        <Link href={'/checkout'} passHref>
          <button
            className={`${globalClasses['primary-button']}  ${globalClasses.button}  ${style['add-to-cart-button']}`}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { ShoppingCart };
