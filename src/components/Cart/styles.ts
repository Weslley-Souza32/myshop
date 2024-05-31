import styled from "styled-components";

interface IContainerProps {
  showCart: boolean;
}
export const Container = styled.aside<IContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-370px")};
  width: 300px;
  height: 100vh;
  background-color: #fff;
  padding: 1rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
`;
export const Title = styled.h1``;

export const CartProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2rem 0;
  list-style: none;
`;
export const CartProductItem = styled.li``;

export const CartTotal = styled.strong``;

export const ButtonRemoveProduct = styled.button`
  background: #fff;
  border: none;
  width: 30px;
  height: 30px;
  padding: 5px 0;
  text-align: center;
  color: violet;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 50%;
`;
