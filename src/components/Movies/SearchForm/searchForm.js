import React from "react";
import './searchForm.css';

function SearchForm() {
  return (
    <section className="seach">
      <form className="seach__container">
        <input className="seach__input" type="text" placeholder="Фильм" required/>
        <button className="seach__button" title="Найти"></button>
      </form>
      <div className="seach__switch">
        <input type="checkbox" className="seach__checkbox" />
        <h3 className="seach__checkbox-name">Короткометражки</h3>
      </div>
      <div className="seach__line"></div>
    </section>
  );
};

export default SearchForm;
