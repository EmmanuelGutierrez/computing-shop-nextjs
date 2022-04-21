import React from "react";
import { IInitialState } from "../hooks/useInitialState";
import { IProduct } from "../interfaces/IProduct";

type AppContextType = {
  state: IInitialState;
  addToCart: (product: IProduct) => void;
  removeToCart: (product: IProduct) => void;
  decrementCart: (product: IProduct) => void;
};

const AppContext = React.createContext<AppContextType | Object>({});

export { AppContext, AppContextType };
