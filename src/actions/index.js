import * as Types from "../constants/ActionTypes";

export const addToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity,
  };
};

export const changeMessage = (message) => {
  return {
    type: Types.CHANGE_MESSAGE,
    message,
  };
};

export const deleteProductInCart = (product) => {
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    product,
  };
};

export const updateQuantityInCart = (product, quantity) => {
  return {
    type: Types.UPDATE_QUANTITY_IN_CART,
    product,
    quantity,
  };
};
