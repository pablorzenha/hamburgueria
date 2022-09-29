import React from "react";
import CartTotal from "./CartTotal";
import "./styles.css";

function Cart({ setEmpty, empty, listCart, children, setListCart }) {
  return (
    <div className="cart__container">
      <div className="cart__header">
        <h4>Carrinho de compras</h4>
      </div>
      {empty ? (
        <div className="emptyCart__container">
          <h5>Sua sacola está vazia</h5>
          <p>Adicione itens.</p>
        </div>
      ) : (
        <>
          <ul className="cartList__container">{children}</ul>
          <CartTotal
            setEmpty={setEmpty}
            setListCart={setListCart}
            listCart={listCart}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
