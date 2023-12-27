import React, { useState } from 'react';
import {Link, useMatch, useParams, useResolvedPath} from 'react-router-dom';
import data from '../../server/db.json';
import CommentList from '../../components/comment-list';

export default function NewsItem() {
  // Получаем id из URL
  let { id } = useParams();
  const [commentText, setCommentText] = useState('');

  // Найти новость по id. Обратите внимание, что id из useParams будет строкой
  // Поэтому мы используем `Number(id)` для преобразования в число, если ваш `id` - числовое значение
  const newsItem = data.news.find((item) => item.id === Number(id));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  // Если новость не найдена, возвращаем сообщение об ошибке
  if (!newsItem) {
    return <div>Новость не найдена</div>;
  }
  const handleCommentSubmit = (event) => {
    event.preventDefault();

    // Предотвращение отправки пустого комментария
    if (commentText.trim() === '') {
      return;
    }

    // Здесь вы можете выполнить AJAX запрос или использовать другие способы отправки комментария на сервер
    // Ниже приводится пример с использованием fetch API
    fetch('http://localhost:3002/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: commentText }),
    })
      .then((response) => {
        if (response.ok) {
          // Очистка поля ввода после успешной отправки комментария
          setCommentText('');
          console.log('Комментарий отправлен');
        } else {
          console.log('Не удалось отправить комментарий');
        }
      })
      .catch((error) => {
        console.log('Произошла ошибка:', error);
      });
  };


  // Отображаем детали новости
  return (
    <main>
      <ul className="breadcrumbs">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="">{newsItem.title}</CustomLink>
      </ul>
      <div className="main-container">
        <section className="page-header">
          <h1 className="title">{newsItem.title}</h1>
        </section>
        <div className="article-page">
          <div className="article-page__content">
            <div className="article-page__preview">
              <img src={newsItem.image} alt={newsItem.title} />
              <p className="article__date">{newsItem.date}</p>
            </div>
            <div>
              {newsItem.description}
            </div>
          </div>
        </div>
        <div>
        <CommentList />
        </div>
      </div>
    </main>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
  );
}