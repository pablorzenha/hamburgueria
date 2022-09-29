import React from "react";
import { toast } from "react-toastify";
import "./styles.css";
function CartTotal({ setEmpty, listCart, setListCart }) {
  function handleRemoveAll() {
    setListCart([]);
    setEmpty(true);
    toast("Produtos removidos");
  }
  return (
    <div className="price__container">
      <div>
        <p>Total</p>
        <p>
          R${" "}
          {listCart
            .reduce((acc, act) => acc + act.price * act.qtd, 0)
            .toFixed(2)}
        </p>
      </div>
      <button onClick={handleRemoveAll}>Remover todos</button>
    </div>
  );
}

export default CartTotal;
