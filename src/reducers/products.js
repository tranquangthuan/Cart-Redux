import * as types from "../constants/ActionTypes";
var initialState = [
  {
    id: 1,
    name: "Iphone 6",
    image:
      "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-6-32gb-cu-like-new-didongviet.jpg",
    description: "Iphone 6",
    price: 500,
    inventory: 10,
    rating : 4
  },
  {
    id: 2,
    name: "Samsung Note 10",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-400x400.jpg",
    description: "Samsung Note 10",
    price: 600,
    inventory: 20,
    rating : 3
  },
  {
    id: 3,
    name: "Samsung Note 20",
    image:
      "https://images.samsung.com/sg/smartphones/galaxy-note20/buy/001-note20series-productimage-mo-720.jpg",
    description: "Samsung Note 20",
    price: 1500,
    inventory: 10,
    rating : 5
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      return [...state];

    default:
      return state;
  }
};

export default products;
