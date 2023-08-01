import React from 'react';
import './promo.css';
import {Link} from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="header__login" href="#about-project">
              <button className="promo__link" type="button" aria-label="Узнать больше" title="Узнать больше">Узнать больше</button>
          </a>
        <div className='promo__bg'></div>
      </div>
    </section>
  );
};

export default Promo;
