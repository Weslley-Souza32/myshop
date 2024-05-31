import { Provider } from "react-redux";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import "./styles/global.css";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductsList />
    </Provider>
  );
}

export default App;
