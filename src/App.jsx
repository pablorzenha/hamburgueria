import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import CartProduct from "./Components/Cart/CartProduct";
import Header from "./Components/Header/Header";
import Product from "./Components/Products/Product";
import ProductsList from "./Components/Products/ProductsList";
import api from "./Services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [listProduct, setListProduct] = useState([]);
  const [listCart, setListCart] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listFilter, setListFilter] = useState([]);
  const [empty, setEmpty] = useState(true);
  useEffect(() => {
    api
      .get("")
      .then((response) => setListProduct(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <Header
        setListFilter={setListFilter}
        listProduct={listProduct}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="main__container">
        <ProductsList
          listCart={listCart}
          setListFilter={setListFilter}
          inputValue={inputValue}
          listFilter={listFilter}
        >
          <Product
            setEmpty={setEmpty}
            listCart={listCart}
            listFilter={listFilter}
            listProduct={listProduct}
            setListCart={setListCart}
          />
        </ProductsList>

        <Cart
          setEmpty={setEmpty}
          empty={empty}
          listCart={listCart}
          setListCart={setListCart}
        >
          <CartProduct
            setEmpty={setEmpty}
            listCart={listCart}
            setListCart={setListCart}
          />
        </Cart>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
