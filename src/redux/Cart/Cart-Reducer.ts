import { IProduct } from "../../data/Products";

interface ICartState {
  cart: IProduct[];
}

const initialState: ICartState = {
  cart: [],
};
interface ICartAction {
  type: string;
  payload: IProduct;
}

export function cartReducer(state = initialState, action: ICartAction) {
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "cart/remove-product":
      const producToRemove = action.payload;
      const productFiltered = state.cart.filter(
        (product) => product.id !== producToRemove.id
      );
      return {
        ...state,
        cart: productFiltered,
      };
    default:
      return state;
  }
}
