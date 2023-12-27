import React, { useState } from 'react';
import { Link, useMatch, useParams, useResolvedPath } from 'react-router-dom';
import data from '../../server/db.json';
import CommentList from '../../components/comment-list';

export default function QuestItem() {
  let { id } = useParams();
  const [commentText, setCommentText] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  // Достаем квест из данных
  const questItem = data.quests.find((item) => item.id === Number(id));

  // Если квест не найден, возвращаем сообщение об ошибке
  if (!questItem) {
    return <div>Квест не найден</div>;
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    // Предотвращение отправки пустого комментария
    if (commentText.trim() === '') {
      return;
    }

    fetch('http://localhost:3002/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: commentText }),
    })
      .then((response) => {
        if (response.ok) {
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

  return (
    <main>
      <ul className="breadcrumbs">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/quests">Quests</CustomLink>
        <CustomLink to="">{questItem.content}</CustomLink>
      </ul>
      <div className="quest-container">
        <section className="page-header">
          <h1 className="title">{questItem.trader} - {questItem.content}</h1>
        </section>
        <div className="quest-page">
          <div className="quest-page__content">
            <div className="quest-page__preview">
              <img src={questItem.image} alt={`Квест ${questItem.content}`} />
            </div>
            <div>
              <h3>Цели</h3>
              <p>{questItem.goals}</p>
              <h3>Описание</h3>
              <p>{questItem.description}</p>
              <h3>Награда</h3>
              <p>{questItem.awards}</p>
            </div>
          </div>
        </div>
      </div>
      <CommentList/>
    </main>
  );
}

// CustomLink будет работать так же, как и в исходном примере
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