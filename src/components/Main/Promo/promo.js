import React from 'react';
import './promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="header__login" href="#about-project">
          <span className="promo__link" title="Узнать больше">Узнать больше</span>
        </a>
        <div className='promo__bg'></div>
      </div>
    </section>
  );
}

export default Promo;
