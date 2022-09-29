import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ setEmpty, listCart, listFilter, listProduct, setListCart }) {
  function handleAdd(product) {
    const sameProduct = listCart.some((item) => item === product);
    if (!sameProduct) {
      product.qtd = 1;
      setListCart([product, ...listCart]);
      setEmpty(false);
      toast("Add");
    } else {
      const mapProduct = listCart.map((item) => {
        if (product.name === item.name) {
          item.qtd++;
          return item;
        } else {
          return item;
        }
      });
      console.log(mapProduct);
      setListCart([...mapProduct]);
      setEmpty(false);
      toast("Add");
    }
  }

  return listFilter.length > 0
    ? listFilter.map((product) => (
        <li key={product.name}>
          <div className="header__imageContainer">
            <img src={product.img} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>R$ {product.price.toFixed(2)}</p>
          <button onClick={() => handleAdd(product)} id={product.id}>
            Adicionar
          </button>
        </li>
      ))
    : listProduct.map((product) => (
        <li key={product.name}>
          <div className="header__imageContainer">
            <img src={product.img} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>R$ {product.price.toFixed(2)}</p>
          <button onClick={() => handleAdd(product)} id={product.id}>
            Adicionar
          </button>
        </li>
      ));
}

export default Product;
