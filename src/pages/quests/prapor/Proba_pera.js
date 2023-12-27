import {Link, useMatch, useResolvedPath} from "react-router-dom";
import newsIcon1 from '../../../img/WNK5jqTyHJ8.jpg';

export default function Proba_pera() {
  return (
      <main>
        <ul className="breadcrumbs">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/quests">Quests</CustomLink>
          <CustomLink to="">Проба пера</CustomLink>
        </ul>
        <div className="main-container">
          <section className="page-header">
            <h1 className="title">Квест Прапора <span>«Проба пера»</span></h1>
          </section>
          <div className="quest-column">
            <div className="quest-main-column">
              <section className="quest-description">
                <div className="quest-description-heading">
                  <div className="quest-description-left">
                    <div className="quest-description-line">
                      <h3>Выдает:</h3>
                      <span> Прапор </span>
                    </div>
                  </div>
                  <div className="quest-description-right">
                    <img className="quest-main-image" src={newsIcon1} loading="lazy" alt="main-image"/>
                  </div>
                </div>
              </section>
              <section className="quest-goals">
                <div className="quest-goals-content">
                  <h2>Цели квеста</h2>
                  <div className="quest-goals-grid">
                    <div className="quest-goals-goal">
                      <p>Убить 5 диких по всей территории Таркова</p>
                    </div>
                    <div className="quest-goals-goal">
                      <p>Найти и передать ружья МР-133</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="quest-sub-column">
              <section className="quest-awards">
                <div className="quest-awards-content">
                  <h2>Награда за квест</h2>
                  <div className="quest-awards-grid">
                    <div className="quest-awards-text">
                      <h3>EXP: </h3>
                      <p> +1700 Опыта </p>
                    </div>
                    <div className="quest-awards-text">
                      <h3>REP: </h3>
                      <p> +0.02 Репутации у Прапора </p>
                    </div>
                    <div className="quest-awards-text">
                      <h3>Add: </h3>
                      <p> +0.01 Репутации у Егеря, 15000 рублей </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <section className="quest-comments-section">
          <div className="comments-section _not_logged">
            <div className="comments-section__title">
              6 комментариев
            </div>
            <div className="comments-section__form">
              <button datatype="login" className="comments-section__login-button">
                Авторизуйтесь
              </button>, чтобы добавить комментарий
            </div>
          </div>
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
