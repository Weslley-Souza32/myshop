import React from "react";
import * as S from "./styles";
import { ProductCard } from "../ProductCard/ProductCard";
import { Products } from "../../data/Products";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
