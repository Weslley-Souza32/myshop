import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  padding: 0 2rem;
  margin: 0 auto;
  height: 60px;
`;

export const StyledTitle = styled.h1`
  color: #fff;
`;

interface IAuthButton {
  isLogged: boolean;
}
export const AuthButton = styled.button<IAuthButton>`
  border: none;
  height: 40px;
  padding: 0 1.7rem;
  border-radius: 5px;
  background-color: ${(props) => (props.isLogged ? "darkred" : "darkgreen")};
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const CartButton = styled.button`
  border: none;
  height: 40px;
  padding: 0 1.7rem;
  border-radius: 5px;
  background-color: darkviolet;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
