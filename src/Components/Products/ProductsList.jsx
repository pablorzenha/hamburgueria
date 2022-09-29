import React from "react";
import "./styles.css";

function ProductsList({ setListFilter, listFilter, inputValue, children }) {
  return (
    <div className="list__container">
      {listFilter.length > 0 && (
        <div className="search__container">
          <h1>Resultado da busca para: "{inputValue}"</h1>
          <button onClick={() => setListFilter([])}>Remover busca</button>
        </div>
      )}
      <ul className="list__product">{children}</ul>
    </div>
  );
}

export default ProductsList;
