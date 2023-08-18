import React from "react";
import './portfolio.css';
import arrow from '../../../images/font-main.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links-list">
        <li className="portfolio__links">
          <a href="https://github.com/Nataliorigin/how-to-learn" className="portfolio__link" rel="noreferrer"
             target="_blank">
            <h3 className="portfolio__link-name">Статичный сайт</h3>
            <img className="portfolio__link-icon" src={arrow} alt="Стелка"/>
          </a>
        </li>
        <li className="portfolio__links">
          <a href="https://github.com/Nataliorigin/russian-travel" className="portfolio__link" rel="noreferrer"
             target="_blank">
            <h3 className="portfolio__link-name">Адаптивный сайт</h3>
            <img className="portfolio__link-icon" src={arrow} alt="Стелка"/>
          </a>
        </li>
        <li className="portfolio__links">
          <a href="https://github.com/Nataliorigin/react-mesto-api-full-gha" className="portfolio__link"
             rel="noreferrer" target="_blank">
            <h3 className="portfolio__link-name">Одностраничное приложение</h3>
            <img className="portfolio__link-icon" src={arrow} alt="Стелка"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
