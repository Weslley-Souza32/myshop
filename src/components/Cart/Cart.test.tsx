import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { Products } from "../../data/Products";
import userEvent from "@testing-library/user-event";

//Obtendo dois produtos do carrinho do nosso array de produtos
const cart = Products.slice(0, 2);

//Mock: torna algo (como uma biblioteca) em fake. Neste caso esta tornando a biblioteca redux em fake.
const mockDispatch = jest.fn();
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});
describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list");

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElement = screen.getAllByRole("listitem");
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElement.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it("should remove product when remove button is clicked", () => {
    render(<Cart showCart={true} cart={[cart[0]]} />);

    const removeProductButtonElement = screen.getByTestId("remover");

    userEvent.click(removeProductButtonElement);

    expect(mockDispatch).toHaveBeenCalled();
  });
});
