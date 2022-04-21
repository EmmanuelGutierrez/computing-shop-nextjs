import Image from 'next/image';
import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = () => {
  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image
          src="https://res.cloudinary.com/dcfnbbld6/image/upload/v1648077579/ndwq6yfftpzjnwe6vayx.jpg"
          alt="keyboard"
          height={70}
          width={70}
        />
      </figure>
      <p>keyboard</p>
      <p>$8000,00</p>
    </div>
  );
};

export { OrderItem };
