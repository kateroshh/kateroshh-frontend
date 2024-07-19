"use client";
import { FC } from "react";
import "./Portfolio.scss";

import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio: FC = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title title-p">Опыт</h3>
      <ul className="portfolio-cards">
        <PortfolioCard />
        {/* <li className="portfolio__item">
          <p className="portfolio__period">2023 — настоящее время</p>
          <div className="portfolio__content">
            <h3 className="portfolio__title">Frontend-разработчик – Фриланс</h3>
            <div className="portfolio__about">
              <p className="portfolio__text">
                Проект для HRSpace (hrspace.hh.ru) «Микросервис билдера заявки
                для поиска рекрутеров»: разработка кастомных форм на JavaScript
                / TypeScript и с использованием библиотеки Formik.
              </p>
              <p className="portfolio__text">
                Ссылка на проект:
                <a
                  className="portfolio__link"
                  href="https://github.com/Space-HR/hr-space-frontend"
                >
                  https://github.com/Space-HR/hr-space-frontend
                </a>
              </p>
            </div>
            <Chips />
          </div>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__period">2020 — настоящее время</p>
          <div className="portfolio__content">
            <h3 className="portfolio__title">
              Главный инженер по разработке, трайб «Забота о клиентах» – Сбер
            </h3>
            <div className="portfolio__about">
              <p className="portfolio__text">
                Разработка отчетности в системе бизнес-анализа (BI) QlikView и
                Qlik Sense (включая библиотеку VizLib). Разработка приложений по
                полному циклу включая анализ источников, формирование скриптов
                загрузки, проектирование модели данных, создание визуализации.
                Создание и развитие процессов управления данными и их качеством.
                Разработка ETL-процедур (Tasks in Qlik).
              </p>
              <p className="portfolio__text">
                Разработка расширений на JavaScript, HTML, CSS.
              </p>
            </div>
          </div>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__period">2017 — 2020</p>
          <div className="portfolio__content">
            <h3 className="portfolio__title">
              Руководитель проектов, трайб «Корпоративные клиенты 360» – Сбер
            </h3>
            <div className="portfolio__about">
              <div className="portfolio__text">
                Владелец продукта команды (12 человек): ведение и приоритизация
                бэклога; синхронизация работ с другими командами; проработка
                архитектуры (концептуальной и solution), согласование
                архитектур; вывод продуктов в промышленную эксплуатацию.
              </div>
              <div className="portfolio__text">
                Достижения:
                <ul className="portfolio-list">
                  <li className="portfolio-list__item">
                    Собрана и запущена команда в соответствии с принципами Agile
                  </li>
                  <li className="portfolio-list__item">
                    Сокращен Т2М по выводу продуктов в промышленную эксплуатацию
                    (с месяца до 2 недель)
                  </li>
                  <li className="portfolio-list__item">
                    Одновременная работа с 10 заказчиками
                  </li>
                  <li className="portfolio-list__item">
                    В 2017 году команда признана самой клиентоориентированой
                    командой трайба
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
      <a className="portfolio__all link-icon" href="#">
        Посмотреть резюме полностью
      </a>
    </div>
  );
};

export default Portfolio;
