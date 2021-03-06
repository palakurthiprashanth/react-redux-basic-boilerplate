import { ActionTypes } from '../../constants/ActionTypes';

const intialState = {
  products: []
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
