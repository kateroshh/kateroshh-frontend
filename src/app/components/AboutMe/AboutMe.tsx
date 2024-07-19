"use client";
import { FC } from "react";
import "./AboutMe.scss";

const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <h3 className="about-me__title title-p">Обо мне</h3>
      <p className="about-me__text">
        Я разработчик с 10 летним опытом работы в сфере ИТ. За это время я
        прошла большой путь от бизнес-аналитика до senior BI-разработчика
        (QlikView и Qlik Sense). Я всегда стремлюсь делать классные и
        клиентоориентированные продукты. Так в 2022 году я приняла решение
        развиваться в веб разработке чтобы улучшить один из своих продуктов для
        руководства.
      </p>
      <p className="about-me__text">
        Сейчас я работаю с HTML, CSS, JavaScript, React, TypeScript и SCSS.
        Верстаю в соответствии с концепцией Pixel Perfect и использую БЭМ
        подход. Могу написать backend для своих проектов на Node.js, MongoDB и
        использую Postman для отладки проекта.
      </p>
      <p className="about-me__text">
        Люблю учиться и стремлюсь к постоянному профессиональному развитию,
        изучению новых технологий и лучших практик в сфере frontend разработки.
      </p>
      <p className="about-me__text">
        Готова внести свой вклад в создание качественных продуктов для ваших
        клиентов и пользователей :)
      </p>
    </div>
  );
};

export default AboutMe;
