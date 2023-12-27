import newsIcon1 from "../img/WNK5jqTyHJ8.jpg";
import prapor from "../img/prapor.png";
import therapist from "../img/therapist.png";
import fence from "../img/fence.png";
import skier from "../img/skier.png";
import peacekeeper from "../img/peacekeeper.png";
import mechanic from "../img/mechanic.png";
import ragman from "../img/ragman.png";
import jaeger from "../img/jaeger.png";
import lightkeeper from "../img/lightkeeper.jpg";
import {Link} from "react-router-dom";

export default function Home() {
  return (
      <main>
        <div className="home">
          <div className="head">
            <div className="description">
              <div className="site-title">
                <h2>Tar<span>Hub</span></h2>
              </div>
              <p>Новости и торговцы из игры Escape From Tarkov</p>
            </div>
            <div className="last-news">
              <Link to="/news/tech_working">
                <img src ={newsIcon1} alt="Первая новость" className="news-review"/>
                <div className="last news-title">
                  <p>Первая новость</p> <p className="news-date">25.12.23</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="traders">
            <h3>Торговцы</h3>
            <div className="traders-preview">
              <Link to="/quests/prapor" className="prapor trader-card">
                <img src={prapor} alt="prapor"/>
                  <h5>
                    Прапор
                  </h5>
                  <p>
                    Романенко Павел Егорович
                  </p>
              </Link>
              <Link to="/quests/therapist" className="therapist trader-card">
                <img src={therapist} alt="therapist"/>
                  <h5>
                    Терапевт
                  </h5>
                  <p>
                    Эльвира Хабибулина
                  </p>
              </Link>
              <Link to="/quests/fence" className="fence trader-card">
                <img src={fence} alt="fence"/>
                <h5>
                  Скупщик
                </h5>
                <p>
                  Настоящее имя неизвестно
                </p>
              </Link>
              <Link to="/quests/skier" className="skier trader-card">
                <img src={skier} alt="skier"/>
                <h5>
                  Лыжник
                </h5>
                <p>
                  Киселёв Александр Федорович
                </p>
              </Link>
              <Link to="/quests/peacekeeper" className="peacekeeper trader-card">
                <img src={peacekeeper} alt="peacekeeper"/>
                <h5>
                  Миротворец
                </h5>
                <p>
                  Тадеуш Пилсудский
                </p>
              </Link>
              <Link to="/quests/mechanic" className="mechanic trader-card">
                <img src={mechanic} alt="mechanic"/>
                <h5>
                  Механик
                </h5>
                <p>
                  Самойлов Сергей Арсеньевич
                </p>
              </Link>
              <Link to="/quests/ragman" className="ragman trader-card">
                <img src={ragman} alt="ragman"/>
                <h5>
                  Барахольщик
                </h5>
                <p>
                  Абрамян Аршавир Саркисивич
                </p>
              </Link>
              <Link to="/quests/jaeger" className="jaeger trader-card">
                <img src={jaeger} alt="jaeger"/>
                <h5>
                  Егерь
                </h5>
                <p>
                  Хартинов Иван Егорович
                </p>
              </Link>
              <Link to="/quests/lightkeeper" className="lightkeeper trader-card">
                <img src={lightkeeper} alt="lightkeeper"/>
                <h5>
                  Смотритель
                </h5>
                <p>
                  Фарит Ахмадуллович Генатулин
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
  )
}
