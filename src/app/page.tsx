"use client";
import { FC } from "react";
import "../scss/index.scss";

import Image from "next/image";
import Logo from "../../public/img/logo.svg";
import Telegram from "../../public/img/menu-icons/telegram.svg";
import Mail from "../../public/img/menu-icons/mail.svg";
import Github from "../../public/img/menu-icons/github.svg";
import Leetcode from "../../public/img/menu-icons/leetcode.svg";
import Linkedin from "../../public/img/menu-icons/linkedin.svg";
import HRspace from "../../public/img/projects/HRspace.jpg";
import LiknAll from "../../public/img/link-all.svg";

const Home: FC = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__container">
            <Image className="header__logo" src={Logo} alt="logo" />
            <ul className="header-lng">
              <li className="header-lng__item">
                <button className="header-lng__btn header-lng__btn_after header-lng__btn_active">
                  РУС
                </button>
              </li>
              <li className="header-lng__item">
                <button className="header-lng__btn header-lng__btn_before">
                  ENG
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="brief-info">
            <h1 className="brief-info__title title">Екатерина Рощупкина</h1>
            <h2 className="brief-info__subtitle subtitle">
              Frontend – разрабочик
            </h2>
            <p className="brief-info__text">
              Привет, меня зовут Катя, буду рада познакомиться. Я
              frontend-разработчик. Моя цель - создавать доступные и интуитивно
              понятные интерфейсы, которые облегчают жизнь пользователей и
              закроют их потребности. 
            </p>
            <div className="brief-info__btn">
              <a className="download-btn">Резюме</a>
            </div>
            <nav className="menu">
              <li className="menu__item">
                <a className="menu__link menu__link_active" href="#">
                  Обо мне
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Проекты
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Опыт
                </a>
              </li>
            </nav>

            <nav className="menu-icons">
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M30.6568 13.7172L12.9268 20.5542C11.7168 21.0402 11.7238 21.7152 12.7048 22.0162L17.2568 23.4362L27.7888 16.7912C28.2868 16.4882 28.7418 16.6512 28.3678 16.9832L19.8348 24.6842H19.8328L19.8348 24.6852L19.5208 29.3772C19.9808 29.3772 20.1838 29.1662 20.4418 28.9172L22.6528 26.7672L27.2518 30.1642C28.0998 30.6312 28.7088 30.3912 28.9198 29.3792L31.9388 15.1512C32.2478 13.9122 31.4658 13.3512 30.6568 13.7172Z" />
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M21.9991 21.1075L31.5841 14.95C31.1987 14.661 30.7308 14.5032 30.2491 14.5H13.7491C13.2674 14.5032 12.7994 14.661 12.4141 14.95L21.9991 21.1075Z" />
                    <path d="M22.405 22.63L22.2775 22.69H22.2175C22.1484 22.7209 22.0751 22.7411 22 22.75C21.9377 22.7578 21.8748 22.7578 21.8125 22.75H21.7525L21.625 22.69L11.575 16.195C11.527 16.3762 11.5018 16.5626 11.5 16.75V27.25C11.5 27.8467 11.7371 28.419 12.159 28.841C12.581 29.2629 13.1533 29.5 13.75 29.5H30.25C30.8467 29.5 31.419 29.2629 31.841 28.841C32.2629 28.419 32.5 27.8467 32.5 27.25V16.75C32.4982 16.5626 32.473 16.3762 32.425 16.195L22.405 22.63Z" />
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M30.3296 9.99963C30.3296 9.99963 28.7539 9.99963 27.1534 12.3996C26.3614 11.6069 23.9531 11.5994 23.1551 11.5994C22.3541 11.5994 19.9474 11.6069 19.1546 12.3996C17.5541 9.99963 15.9821 9.99963 15.9821 9.99963C15.1264 12.1476 15.7961 13.6049 15.9574 13.9994C15.1579 14.7996 14.3546 15.5999 14.3546 19.5996C14.3546 23.5994 17.2631 25.6056 20.7581 25.9994C20.3089 26.3901 19.9579 27.5991 19.9579 28.3994C19.0601 28.7991 16.5619 29.1831 15.1579 26.7996C15.1579 26.7996 14.3576 25.1999 12.7579 25.1999C12.7579 25.1999 11.1581 25.0491 12.7579 26.0001C12.7579 26.0001 13.5581 26.8004 14.3576 28.4001C14.3576 28.4001 15.5794 31.7421 19.9579 30.8001C19.9669 32.1014 19.9579 34.0004 19.9579 34.0004H26.3539V28.4001C26.3539 27.7671 26.0044 26.3901 25.5536 26.0001C29.0486 25.6064 31.9534 23.6001 31.9534 19.6004C31.9534 15.6006 31.1531 14.8004 30.3536 14.0001C30.5164 13.6049 31.1846 12.1476 30.3296 9.99963Z" />
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <g clip-path="url(#clip0_2044_7142)">
                      <path d="M32 21.355C32 20.613 31.436 20.009 30.74 20.009H20.676C19.98 20.009 19.416 20.613 19.416 21.355C19.416 22.097 19.979 22.701 20.676 22.701H30.74C31.436 22.702 32 22.098 32 21.355Z" />
                      <path d="M13.482 25.187L17.795 29.548C18.768 30.527 20.113 31 21.598 31C23.083 31 24.428 30.488 25.403 29.506L27.991 26.869C28.501 26.355 28.483 25.504 27.952 24.969C27.421 24.434 26.577 24.416 26.068 24.93L23.392 27.537C22.93 28.004 22.29 28.199 21.583 28.199C20.876 28.199 20.237 28.004 19.773 27.537L15.475 23.174C15.012 22.707 14.779 22.024 14.779 21.311C14.779 20.598 15.012 19.954 15.475 19.487L19.76 15.107C20.223 14.64 20.876 14.462 21.582 14.462C22.288 14.462 22.928 14.657 23.391 15.124L26.067 17.73C26.577 18.245 27.421 18.227 27.952 17.692C28.483 17.156 28.501 16.305 27.991 15.791L25.403 13.155C24.754 12.509 23.932 12.039 23.011 11.825L22.977 11.818L25.424 9.315C25.936 8.801 25.918 7.949 25.387 7.414C24.856 6.879 24.011 6.862 23.5 7.376L13.482 17.476C12.509 18.458 12 19.813 12 21.311C12 22.809 12.509 24.207 13.482 25.187Z" />
                    </g>

                    <clipPath id="clip0_2044_7142">
                      <rect
                        width="24"
                        height="24"
                        transform="translate(10 7)"
                      />
                    </clipPath>
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M10 13.1973C10 12.4251 10.2703 11.7881 10.8108 11.2862C11.3513 10.7843 12.0541 10.5334 12.9189 10.5334C13.7683 10.5334 14.4556 10.7804 14.9807 11.2746C15.5212 11.7843 15.7915 12.4483 15.7915 13.2668C15.7915 14.0081 15.529 14.6258 15.0039 15.12C14.4633 15.6296 13.7529 15.8845 12.8726 15.8845H12.8494C12 15.8845 11.3127 15.6296 10.7876 15.12C10.2625 14.6104 10 13.9695 10 13.1973ZM10.3012 33.4667V17.9925H15.444V33.4667H10.3012ZM18.2934 33.4667H23.4363V24.8261C23.4363 24.2856 23.4981 23.8686 23.6216 23.5752C23.8378 23.0501 24.166 22.6061 24.6062 22.2432C25.0463 21.8803 25.5984 21.6989 26.2625 21.6989C27.9923 21.6989 28.8571 22.8648 28.8571 25.1968V33.4667H34V24.5945C34 22.3089 33.4595 20.5754 32.3784 19.3939C31.2973 18.2125 29.8687 17.6218 28.0927 17.6218C26.1004 17.6218 24.5483 18.4789 23.4363 20.1931V20.2395H23.4131L23.4363 20.1931V17.9925H18.2934C18.3243 18.4866 18.3398 20.0232 18.3398 22.6023C18.3398 25.1813 18.3243 28.8028 18.2934 33.4667Z" />
                  </svg>
                </a>
              </li>
            </nav>
          </div>
          <div className="content">
            <div className="about-me">
              <h3 className="about-me__title titele-p">Обо мне</h3>
              <p className="about-me__text">
                Я разработчик с 10 летним опытом работы в сфере ИТ. За это время
                я прошла большой путь от бизнес-аналитика до senior
                BI-разработчика (QlikView и Qlik Sense). Я всегда стремлюсь
                делать классные и клиентоориентированные продукты. Так в 2022
                году я приняла решение развиваться в веб разработке чтобы
                улучшить один из своих продуктов для руководства.
              </p>
              <p className="about-me__text">
                Сейчас я работаю с HTML, CSS, JavaScript, React, TypeScript и
                SCSS. Верстаю в соответствии с концепцией Pixel Perfect и
                использую БЭМ подход. Могу написать backend для своих проектов
                на Node.js, MongoDB и использую Postman для отладки проекта.
              </p>
              <p className="about-me__text">
                Люблю учиться и стремлюсь к постоянному профессиональному
                развитию, изучению новых технологий и лучших практик в сфере
                frontend разработки.
              </p>
              <p className="about-me__text">
                Готова внести свой вклад в создание качественных продуктов для
                ваших клиентов и пользователей :)
              </p>
            </div>
            <div className="projects">
              <h3 className="projects__title titele-p">Мои проекты</h3>
              <ul className="projects-container">
                <li className="project-card">
                  <a className="project-card__link" href="#">
                    <Image
                      className="project-card__img"
                      src={HRspace}
                      alt="project icon"
                    />
                    <div className="project-card__content">
                      <h2 className="project-card__title link-icon">
                        Микросервис билдера заявки – HRSpace
                      </h2>
                      <div className="project-card__about">
                        <p className="project-card__text text">
                          Проект для HRSpace (hrspace.hh.ru) «Микросервис
                          билдера заявки для поиска рекрутеров».
                        </p>
                        <p className="project-card__text text">
                          Цели сервиса: дать заказчикам возможность размещать
                          заявку на подбор по трем моделям оплаты. Рекрутерам –
                          откликаться и вести переписку с клиентами в рамках
                          внутреннего чата, направлять резюме и регистрировать
                          вышедшего сотрудника (дата выхода и прохождение
                          испытательного срока).
                        </p>
                      </div>
                      <ul className="chips">
                        <li className="chips__item">Java Script</li>
                        <li className="chips__item">React</li>
                        <li className="chips__item">TypeScript</li>
                        <li className="chips__item">SCSS</li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ul>
              <a className="projects__all link-icon" href="#">
                Посмотреть все проекты
              </a>
            </div>

            <div className="portfolio-container">
              <h3 className="portfolio-container__title titele-p">Опыт</h3>
              <ul className="portfolio">
                <li className="portfolio__item">
                  <p className="portfolio__period">2023 — настоящее время</p>
                  <div className="portfolio__content">
                    <h3 className="portfolio__title">
                      Frontend-разработчик – Фриланс
                    </h3>
                    <div className="portfolio__about">
                      <p className="portfolio__text">
                        Проект для HRSpace (hrspace.hh.ru) «Микросервис билдера
                        заявки для поиска рекрутеров»: разработка кастомных форм
                        на JavaScript / TypeScript и с использованием библиотеки
                        Formik.
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
                    <ul className="chips">
                      <li className="chips__item">Java Script</li>
                      <li className="chips__item">React</li>
                      <li className="chips__item">TypeScript</li>
                      <li className="chips__item">SCSS</li>
                    </ul>
                  </div>
                </li>
                <li className="portfolio__item">
                  <p className="portfolio__period">2020 — настоящее время</p>
                  <div className="portfolio__content">
                    <h3 className="portfolio__title">
                      Главный инженер по разработке, трайб «Забота о клиентах» –
                      Сбер
                    </h3>
                    <div className="portfolio__about">
                      <p className="portfolio__text">
                        Разработка отчетности в системе бизнес-анализа (BI)
                        QlikView и Qlik Sense (включая библиотеку VizLib).
                        Разработка приложений по полному циклу включая анализ
                        источников, формирование скриптов загрузки,
                        проектирование модели данных, создание визуализации.
                        Создание и развитие процессов управления данными и их
                        качеством. Разработка ETL-процедур (Tasks in Qlik).
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
                      Руководитель проектов, трайб «Корпоративные клиенты 360» –
                      Сбер
                    </h3>
                    <div className="portfolio__about">
                      <div className="portfolio__text">
                        Владелец продукта команды (12 человек): ведение и
                        приоритизация бэклога; синхронизация работ с другими
                        командами; проработка архитектуры (концептуальной и
                        solution), согласование архитектур; вывод продуктов в
                        промышленную эксплуатацию.
                      </div>
                      <div className="portfolio__text">
                        Достижения:
                        <ul className="portfolio-list">
                          <li className="portfolio-list__item">
                            Собрана и запущена команда в соответствии с
                            принципами Agile
                          </li>
                          <li className="portfolio-list__item">
                            Сокращен Т2М по выводу продуктов в промышленную
                            эксплуатацию (с месяца до 2 недель)
                          </li>
                          <li className="portfolio-list__item">
                            Одновременная работа с 10 заказчиками
                          </li>
                          <li className="portfolio-list__item">
                            В 2017 году команда признана самой
                            клиентоориентированой командой трайба
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a className="portfolio__all link-icon" href="#">
                Посмотреть резюме полностью
              </a>
            </div>
          </div>

          <footer className="footer">
            <h3 className="footer__title">Связаться со мной</h3>
            <nav className="footer__menu menu-icons">
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M30.6568 13.7172L12.9268 20.5542C11.7168 21.0402 11.7238 21.7152 12.7048 22.0162L17.2568 23.4362L27.7888 16.7912C28.2868 16.4882 28.7418 16.6512 28.3678 16.9832L19.8348 24.6842H19.8328L19.8348 24.6852L19.5208 29.3772C19.9808 29.3772 20.1838 29.1662 20.4418 28.9172L22.6528 26.7672L27.2518 30.1642C28.0998 30.6312 28.7088 30.3912 28.9198 29.3792L31.9388 15.1512C32.2478 13.9122 31.4658 13.3512 30.6568 13.7172Z" />
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M21.9991 21.1075L31.5841 14.95C31.1987 14.661 30.7308 14.5032 30.2491 14.5H13.7491C13.2674 14.5032 12.7994 14.661 12.4141 14.95L21.9991 21.1075Z" />
                    <path d="M22.405 22.63L22.2775 22.69H22.2175C22.1484 22.7209 22.0751 22.7411 22 22.75C21.9377 22.7578 21.8748 22.7578 21.8125 22.75H21.7525L21.625 22.69L11.575 16.195C11.527 16.3762 11.5018 16.5626 11.5 16.75V27.25C11.5 27.8467 11.7371 28.419 12.159 28.841C12.581 29.2629 13.1533 29.5 13.75 29.5H30.25C30.8467 29.5 31.419 29.2629 31.841 28.841C32.2629 28.419 32.5 27.8467 32.5 27.25V16.75C32.4982 16.5626 32.473 16.3762 32.425 16.195L22.405 22.63Z" />
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M30.3296 9.99963C30.3296 9.99963 28.7539 9.99963 27.1534 12.3996C26.3614 11.6069 23.9531 11.5994 23.1551 11.5994C22.3541 11.5994 19.9474 11.6069 19.1546 12.3996C17.5541 9.99963 15.9821 9.99963 15.9821 9.99963C15.1264 12.1476 15.7961 13.6049 15.9574 13.9994C15.1579 14.7996 14.3546 15.5999 14.3546 19.5996C14.3546 23.5994 17.2631 25.6056 20.7581 25.9994C20.3089 26.3901 19.9579 27.5991 19.9579 28.3994C19.0601 28.7991 16.5619 29.1831 15.1579 26.7996C15.1579 26.7996 14.3576 25.1999 12.7579 25.1999C12.7579 25.1999 11.1581 25.0491 12.7579 26.0001C12.7579 26.0001 13.5581 26.8004 14.3576 28.4001C14.3576 28.4001 15.5794 31.7421 19.9579 30.8001C19.9669 32.1014 19.9579 34.0004 19.9579 34.0004H26.3539V28.4001C26.3539 27.7671 26.0044 26.3901 25.5536 26.0001C29.0486 25.6064 31.9534 23.6001 31.9534 19.6004C31.9534 15.6006 31.1531 14.8004 30.3536 14.0001C30.5164 13.6049 31.1846 12.1476 30.3296 9.99963Z" />
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <g clip-path="url(#clip0_2044_7142)">
                      <path d="M32 21.355C32 20.613 31.436 20.009 30.74 20.009H20.676C19.98 20.009 19.416 20.613 19.416 21.355C19.416 22.097 19.979 22.701 20.676 22.701H30.74C31.436 22.702 32 22.098 32 21.355Z" />
                      <path d="M13.482 25.187L17.795 29.548C18.768 30.527 20.113 31 21.598 31C23.083 31 24.428 30.488 25.403 29.506L27.991 26.869C28.501 26.355 28.483 25.504 27.952 24.969C27.421 24.434 26.577 24.416 26.068 24.93L23.392 27.537C22.93 28.004 22.29 28.199 21.583 28.199C20.876 28.199 20.237 28.004 19.773 27.537L15.475 23.174C15.012 22.707 14.779 22.024 14.779 21.311C14.779 20.598 15.012 19.954 15.475 19.487L19.76 15.107C20.223 14.64 20.876 14.462 21.582 14.462C22.288 14.462 22.928 14.657 23.391 15.124L26.067 17.73C26.577 18.245 27.421 18.227 27.952 17.692C28.483 17.156 28.501 16.305 27.991 15.791L25.403 13.155C24.754 12.509 23.932 12.039 23.011 11.825L22.977 11.818L25.424 9.315C25.936 8.801 25.918 7.949 25.387 7.414C24.856 6.879 24.011 6.862 23.5 7.376L13.482 17.476C12.509 18.458 12 19.813 12 21.311C12 22.809 12.509 24.207 13.482 25.187Z" />
                    </g>

                    <clipPath id="clip0_2044_7142">
                      <rect
                        width="24"
                        height="24"
                        transform="translate(10 7)"
                      />
                    </clipPath>
                  </svg>
                </a>
              </li>
              <li className="menu-icons__item">
                <a className="menu-icons__link" href="#">
                  <svg
                    className="menu-icons__img"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                  >
                    <path d="M10 13.1973C10 12.4251 10.2703 11.7881 10.8108 11.2862C11.3513 10.7843 12.0541 10.5334 12.9189 10.5334C13.7683 10.5334 14.4556 10.7804 14.9807 11.2746C15.5212 11.7843 15.7915 12.4483 15.7915 13.2668C15.7915 14.0081 15.529 14.6258 15.0039 15.12C14.4633 15.6296 13.7529 15.8845 12.8726 15.8845H12.8494C12 15.8845 11.3127 15.6296 10.7876 15.12C10.2625 14.6104 10 13.9695 10 13.1973ZM10.3012 33.4667V17.9925H15.444V33.4667H10.3012ZM18.2934 33.4667H23.4363V24.8261C23.4363 24.2856 23.4981 23.8686 23.6216 23.5752C23.8378 23.0501 24.166 22.6061 24.6062 22.2432C25.0463 21.8803 25.5984 21.6989 26.2625 21.6989C27.9923 21.6989 28.8571 22.8648 28.8571 25.1968V33.4667H34V24.5945C34 22.3089 33.4595 20.5754 32.3784 19.3939C31.2973 18.2125 29.8687 17.6218 28.0927 17.6218C26.1004 17.6218 24.5483 18.4789 23.4363 20.1931V20.2395H23.4131L23.4363 20.1931V17.9925H18.2934C18.3243 18.4866 18.3398 20.0232 18.3398 22.6023C18.3398 25.1813 18.3243 28.8028 18.2934 33.4667Z" />
                  </svg>
                </a>
              </li>
            </nav>
            <div className="footer__btn">
              <a className="download-btn download-btn_no-fill">Резюме</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
