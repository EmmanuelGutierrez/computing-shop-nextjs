import { config } from 'config/config';
import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { useGetProducts } from '../../hooks/useGetProducts';
import style from './ProductList.module.scss';

/* API= http://localhost:4001/ */
const API_PROD = `${config.API}products/`;
console.log(config.API);

const ProductList = (): JSX.Element => {
  const products = useGetProducts(API_PROD);
  return (
    <main className={style.ProductList}>
      <div className={style['cards-container']}>
        {products.map((prod) => (
          <ProductCard key={prod._id} {...prod} />
        ))}
      </div>
    </main>
  );
};

export { ProductList };
