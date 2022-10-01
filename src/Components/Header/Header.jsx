import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";

function Header({ setListFilter, listProduct, inputValue, setInputValue }) {
  function handleInput(event) {
    event.preventDefault();
    const filter = listProduct.filter((product) => {
      if (
        product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        product.category.toLowerCase().includes(inputValue.toLowerCase())
      )
        return product;
    });
    setListFilter(filter);
  }
  return (
    <div className="header__container">
      <div className="header__content">
        <img className="header__logo" src={logo} alt="" />
        <form onSubmit={handleInput} action="">
          <input
            value={inputValue}
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  );
}
export default Header;
