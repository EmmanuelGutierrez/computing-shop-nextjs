import { IInitialState } from '@interfaces/IInitialState';
import React from 'react';
import { IProduct } from '../interfaces/IProduct';

export type AppContextType = {
  state: IInitialState;
  addToCart: (product: IProduct) => void;
  removeToCart: (product: IProduct) => void;
  decrementCart: (product: IProduct) => void;
  incrementProduct: (product: IProduct) => void;
};

export const AppContext = React.createContext<AppContextType | undefined>(undefined);
