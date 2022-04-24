import { useState } from 'react';
import { IInitialState } from '../interfaces/IInitialState';
import { IProduct } from '../interfaces/IProduct';
import update from 'immutability-helper';

const initialState: IInitialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: IProduct) => {
    const modPayload: IProduct = update(payload, { quantity: { $set: 1 } });
    if (state.cart.some((p) => p._id === payload._id)) {
      setState({
        ...state,
      });
    } else {
      setState({
        ...state,
        cart: [...state.cart, modPayload],
      });
    }
  };

  const incrementProduct = (payload: IProduct) => {
    const indexProdCart = state.cart.findIndex((p) => p._id === payload._id);
    const newState = update(state, {
      cart: { [indexProdCart]: { quantity: { $set: (payload.quantity as number) + 1 } } },
    });
    setState(newState);
  };

  const removeToCart = (payload: IProduct) => {
    const someProd: IProduct | undefined = state.cart.find((p) => p._id === payload._id);
    if (someProd && state.cart) {
      const newCart = state.cart.filter((p) => p._id !== payload._id);
      setState({
        ...state,
        cart: [...newCart],
      });
    }
  };

  const decrementCart = (payload: IProduct) => {
    const modPayload: IProduct = payload.quantity
      ? { ...payload, quantity: payload.quantity - 1 }
      : { ...payload, quantity: 0 };

    if (modPayload.quantity) {
      if (state.cart.some((p) => p._id === payload._id)) {
        const newCart = state.cart.map((p) => (p._id === payload._id ? modPayload : p));
        setState({
          ...state,
          cart: [...newCart],
        });
      }
    } else {
      removeToCart(payload);
    }
  };

  return {
    state,
    addToCart,
    removeToCart,
    decrementCart,
    incrementProduct,
  };
};

export { useInitialState, initialState };
