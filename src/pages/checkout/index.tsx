import React from 'react';
import { OrderItem } from '../../components/OrderItem';
import styles from './Checkout.module.scss';

const Checkout = (): JSX.Element => {
  return (
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
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
