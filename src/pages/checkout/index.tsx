import { AppContext, AppContextType } from '@context/AppContext';
import Head from 'next/head';
import React, { useContext } from 'react';
import { OrderItem } from '../../components/OrderItem';
import styles from './Checkout.module.scss';

const Checkout = (): JSX.Element => {
  const { state } = useContext(AppContext) as AppContextType;
  const { cart } = state;
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>19/02/22</span>
                <span>6 articles</span>
              </p>
              <p>$37000,00</p>
            </div>

            {cart.length > 0 ? <OrderItem /> : 'No products in the cart'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
