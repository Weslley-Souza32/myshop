import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles"; //O componente estilizado sera acesso tipo um objeto S.Nome do meu estilo
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/User-Slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rooterReducer: RootReducer) => rooterReducer.cartReducer
  );
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState<boolean>(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "Weslley Junio",
          email: "weslley@gmail.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }
  // function handleUserAuth() {
  //   //usuario não esta logado
  //   if (user === null) {
  //     //Despachar a action de login
  //     dispatch({
  //       type: "user/login",
  //       payload: {
  //         name: "Weslley Junio",
  //         email: "weslley@gmail.com",
  //       },
  //     });
  //   } else {
  //     dispatch({
  //       type: "user/logout",
  //     });
  //   }
  // }
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.StyledTitle>MyShop.</S.StyledTitle>
        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
};
