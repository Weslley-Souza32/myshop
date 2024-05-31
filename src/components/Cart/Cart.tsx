import React from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { FiTrash } from "react-icons/fi";
import { IProduct } from "../../data/Products";

interface ICartProps {
  showCart: boolean;
  cart: IProduct[];
}

export const Cart: React.FC<ICartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - $:{product.price}
            <S.ButtonRemoveProduct
              data-testId="remover"
              onClick={() =>
                dispatch({ type: "cart/remove-product", payload: product })
              }
            >
              <FiTrash />
            </S.ButtonRemoveProduct>
          </S.CartProductItem>
        ))}
      </S.CartProductList>
      <S.CartTotal data-testId="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
