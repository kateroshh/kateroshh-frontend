"use client";
import { FC, useEffect, useState } from "react";
import mainApi from "../utils/MainApi";

type TSkill = {
  name: string;
}[];

const Home: FC = () => {
  const [skills, setSkills] = useState<TSkill>([]);

  useEffect(() => {
    Promise.all([mainApi.getSkill()])
      .then(([data]) => {
        setSkills(data);
      })
      .catch((err) => {
        console.log("Ошибка получения данных", err);
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Мой супер сайт</h1>
      {skills.map((skill, index) => (
        <p key={index}>{skill.name}</p>
      ))}
    </main>
  );
};

export default Home;
