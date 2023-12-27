import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import questData from '../../server/db.json';

export default function Tech_working() {
  // Предполагаем, что вы хотите выбрать новость с id 3
  const quest = questData.news.find(news => news.id === 1);

  // Убедитесь, что новость существует
  if (!quest) {
    return <p>Новость не найдена</p>;
  }

  // Деструктуризируем данные новости
  const { title, description, image, date: goals, content } = quest;

  return (
    <main>
      <ul className="breadcrumbs">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/news">News</CustomLink>
          <CustomLink to="">Технические работы</CustomLink>
        </ul>
      <div className="main-container">
        <section className="page-header">
          <h1 className="title">{title}</h1> {/* использование заголовка новости */}
        </section>
        <div className="article-page">
          <div className="article-page__content">
            <div className="article-page__preview">
              <img src={image} alt={title}/> {/* ссылка на изображение новости */}
              <p className="article__date">{goals}</p> {/* дата публикации */}
            </div>
            <div>
              {description} {/* полное описание новости */}
            </div>
          </div>
        </div>
      </div>
      <section className="news-comments-section">
      </section>
    </main>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
  )
}

