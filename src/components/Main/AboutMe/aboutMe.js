import React from "react";
import './aboutMe.css';
import avatar from '../../../images/photo_2023-07-11_23-50-50.jpg';

function AboutMe() {
  return (
      <section className="student">
        <h2 className="student__header">Студентка</h2>
        <div className="student__about">
          <div className="student__container">
            <h2 className="student__name">Наталья</h2>
            <h3 className="student__profession">Начинающий фронтенд-разработчик, 28 лет</h3>
            <p className="student__info">Я родилась в Оренбургской области, в г. Гае, пять лет жила и училась в г. Оренбурге в Оренбургском Государственном Университете на кафедре Маркетинга, Коммерции и Рекламы.
                Потом переехала в Москву и начала работать в бухгалтерской сфере. Сейчас проживаю в г. Екатеринбург и все также работаю бухгалтером. Год назад решила попробовать себя в IT-сфере и активно начала обучаться профессии "веб-разработчик".
                В свободное время люблю смотреть фильмы, аниме, кататься на велосипеде, плавать в бассейне и, конечно же, кодить.
            </p>
            <a href="https://github.com/Nataliorigin" className="student__github-link" rel="noreferrer" target="_blank">Github</a>
          </div>
          <img className="student__photo" src={avatar} alt="Личное фото" />
        </div>
      </section>
  );
}

export default AboutMe;
