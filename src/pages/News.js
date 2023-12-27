import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import data from '../server/db.json';

export default function News() {
  return (
    <main>
      <ul className="breadcrumbs">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/news">News</CustomLink>
      </ul>
      <div className="main-container">
        <section className="page-header">
          <h1 className="title">Новости</h1>
        </section>
        <div className="news-list">
          {data.news.map((item) => (
            <Link to={`/news/${item.id}`} key={item.id}>
              <img src={item.image} alt={item.title} className="news-review" />
              <div className="news-title">{item.title}</div>
              <div className="news-content">{item.content}</div>
              <p className="news-date">{item.date}</p>
            </Link>
          ))}
        </div>
      </div>
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
