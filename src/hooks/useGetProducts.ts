import { useEffect, useState } from 'react';
import axios from 'axios';
import { responseData } from '../interfaces/IAxiosRes';
import { IProduct } from '../interfaces/IProduct';

const useGetProducts = (API: string) => {
  const vacio: Array<IProduct> = [];
  const [products, setProducts] = useState(vacio);

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.request<responseData<IProduct[]>>({ url: API });
      if (res.data.data) {
        setProducts(res.data.data);
      }
    };
    axiosData();
  }, [API]);

  return products;
};

export { useGetProducts };
