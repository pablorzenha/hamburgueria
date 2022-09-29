import React from "react";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartProduct({ resetAll, setEmpty, listCart, setListCart }) {
  function handleRemove(event) {
    // toast("Produto removido.");
    const findProduct = listCart.find(
      (item) => item.id === Number(event.target.id)
    );
    const filter = listCart.filter(
      (product) => product.id !== Number(event.target.id)
    );
    if (listCart.length === 1 && findProduct.qtd === 1) {
      setListCart([]);
      setEmpty(true);
    } else if (findProduct.qtd > 1) {
      findProduct.qtd--;
      setListCart([findProduct, ...filter]);
    } else {
      setListCart(filter);
    }
    toast("Produto removido");
  }
  return listCart.map((product, index) => (
    <li key={index} className="cartProduct__container">
      <img
        src={product.img}
        alt={product.name}
        className="cartProduct__image"
      />

      <div className="product__description">
        <h3>
          {product.qtd}x {product.name}
        </h3>
        <p>{product.category}</p>
      </div>
      <button onClick={handleRemove} id={product.id} className="btn__remove">
        Remover
      </button>
    </li>
  ));
}

export default CartProduct;
