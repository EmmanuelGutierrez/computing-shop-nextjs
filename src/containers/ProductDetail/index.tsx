import React from 'react';
import ProductInfo from '../../components/ProductInfo';
import './ProductDetail.scss';

import close from '@icons/icon_close.png';
import Image from 'next/image';

const ProductDetail = (): JSX.Element => {
  return (
    <aside className="ProductDetail">
      <figure className="product-item-close">
        <Image src={close} alt="close" />
      </figure>
      <ProductInfo />
    </aside>
  );
};

export { ProductDetail };
