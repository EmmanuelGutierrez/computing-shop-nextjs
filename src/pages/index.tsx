import type { NextPage } from 'next';
import { ProductList } from '@containers/ProductList';

const Home: NextPage = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

export default Home;
