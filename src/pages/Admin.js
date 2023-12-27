import { Link } from "react-router-dom";
import trash from "../img/trash.png";

export default function Admin() {
    return (
        <main>
            <div className="admin">
                <div className="head__admin">
                    <div className="description">
                        <div className="site-title">
                            <h2>Комментарии</h2>
                        </div>
                    </div>
                    <div className="list">
                        <section className="comment-container">
                            <div className="comment " data-id="1">
                                <div className="comment__content">
                                    <div className="comment__header">
                                        <div className="comment__username">
                                            focsit
                                        </div>
                                        <div className="comment__header-dot">

                                        </div>
                                    </div>
                                    <div className="comment__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus enim expedita minima modi odio omnis quo tempore vel?
                                            Accusantium beatae commodi dicta fugiat incidunt modi similique tempora ut vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-del">
                                <Link to="#">
                                    <img src={trash} alt="Первая новость" className="article-image" />
                                </Link>
                            </div>
                        </section>
                        <section className="comment-container">
                            <div className="comment " data-id="1">
                                <div className="comment__content">
                                    <div className="comment__header">
                                        <div className="comment__username">
                                            focsit
                                        </div>
                                        <div className="comment__header-dot">

                                        </div>
                                    </div>
                                    <div className="comment__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus enim expedita minima modi odio omnis quo tempore vel?
                                            Accusantium beatae commodi dicta fugiat incidunt modi similique tempora ut vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-del">
                                <Link to="#">
                                    <img src={trash} alt="Первая новость" className="article-image" />
                                </Link>
                            </div>
                        </section>
                        <section className="comment-container">
                            <div className="comment " data-id="1">
                                <div className="comment__content">
                                    <div className="comment__header">
                                        <div className="comment__username">
                                            focsit
                                        </div>
                                        <div className="comment__header-dot">

                                        </div>
                                    </div>
                                    <div className="comment__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus enim expedita minima modi odio omnis quo tempore vel?
                                            Accusantium beatae commodi dicta fugiat incidunt modi similique tempora ut vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-del">
                                <Link to="#">
                                    <img src={trash} alt="Первая новость" className="article-image" />
                                </Link>
                            </div>
                        </section>
                        <section className="comment-container">
                            <div className="comment " data-id="1">
                                <div className="comment__content">
                                    <div className="comment__header">
                                        <div className="comment__username">
                                            focsit
                                        </div>
                                        <div className="comment__header-dot">

                                        </div>
                                    </div>
                                    <div className="comment__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus enim expedita minima modi odio omnis quo tempore vel?
                                            Accusantium beatae commodi dicta fugiat incidunt modi similique tempora ut vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-del">
                                <Link to="#">
                                    <img src={trash} alt="Первая новость" className="article-image" />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}