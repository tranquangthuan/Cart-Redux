import * as Types from "../constants/ActionTypes";
var data = JSON.parse(localStorage.getItem("cart"));
var initialState = data ? data : [];

const products = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findIndexInCart(state, product);
      if (index === -1) {
        state.push({
          product,
          quantity,
        });
      } else {
        state[index].quantity += quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];

    case Types.DELETE_PRODUCT_IN_CART:
      index = findIndexInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
      state = state ? state : [];
      return [...state];
    case Types.UPDATE_QUANTITY_IN_CART:
      index = findIndexInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

var findIndexInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        return i;
      }
    }
  }

  return index;
};

export default products;
