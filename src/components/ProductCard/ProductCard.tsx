import React from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { IProduct } from "../../data/Products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RootReducer } from "../../redux/root-reducer";

interface IProductCardProps {
  product: IProduct;
}
export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  //Verificando se o produto está no carrinho
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    //Iremos despachar uma action de adicionar o produto no carrinho
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }
  function handleRemoveProductFromCart() {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  }

  return (
    <S.Card>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({product.rating.rate})
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.ButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do carrinho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.ButtonWrapper>
    </S.Card>
  );
};
