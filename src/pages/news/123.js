import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GoBackBtn from '../ui/Button/GoBackBtn/GoBackBtn';
import MainNew from './NewsPage/MainNew';
import { useSelector } from 'react-redux';

export default function NewsItemPage() {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const [commentText, setCommentText] = useState('');
    const [commentAuthor, setCommentAuthor] = useState('');
    const auth = useSelector((state) => state.users.auth);

    const currentUser = { name: 'Inkognito' };

    useEffect(() => {
        fetch(`http://localhost:3001/news/${id}`)
            .then((response) => response.json())
            .then((data) => setNewsItem(data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleCommentSubmit = () => {
        const newComment = {
            id: newsItem.comments.length + 1,
            user: {
                name: commentAuthor || currentUser.name,
            },
            text: commentText,
            date: new Date().toLocaleString(),
        };

        const updatedNewsItem = {
            ...newsItem,
            comments: [...newsItem.comments, newComment],
        };

        fetch(`http://localhost:3001/news/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedNewsItem),
        })
            .then((response) => response.json())
            .then((data) => setNewsItem(data))
            .catch((error) => console.log(error));

        setCommentText('');
        setCommentAuthor('');
    };

    const handleCommentDelete = (commentId) => {
        const updatedComments = newsItem.comments.filter((comment) => comment.id !== commentId);

        const updatedNewsItem = {
            ...newsItem,
            comments: updatedComments,
        };

        fetch(`http://localhost:3001/news/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedNewsItem),
        })
            .then((response) => response.json())
            .then((data) => setNewsItem(data))
            .catch((error) => console.log(error));
    };

    if (!newsItem) {
        return <div></div>;
    }

    return (
        <div>
            <Link to='/news'>
                <GoBackBtn />
            </Link>
            <img src={newsItem.image} alt={newsItem.title} />
            <MainNew title={newsItem.title} content={newsItem.content} />
            <h3>Комментарии:</h3>
            {newsItem.comments.map((comment) => (
                <div className='border-2 border-black dark:border-gray-300 p-4 w-[900px] min-h-[20px] hover:scale-105 duration-200 mt-4 mb-4' key={comment.id}>
                    <p>Автор: {comment.user.name}</p>
                    <p>Дата: {comment.date}</p>
                    <p className='border-2 border-black dark:border-gray-300 w-[800px]'>{comment.text}</p>
                    {auth ? (
                        <button className='px-6 py-2 rounded-3xl bg-green-100 hover:bg-green-300 duration-200 dark:bg-slate-200 dark:hover:bg-gray-400 flex flex-col items-center mt-4 mb-4' onClick={() => handleCommentDelete(comment.id)}>
                            Удалить комментарий
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className='border-2 border-black dark:border-gray-300 p-4 w-[900px] min-h-[20px] hover:scale-105 duration-200'>
                    <h4>Добавить комментарий:</h4>
                    <input className='border-2 border-black dark:border-gray-300 w-[800px] mt-4 mb-4' type='text' value={commentAuthor} placeholder='Оставьте поле пустым, если хотите быть Инкогнито' onChange={(e) => setCommentAuthor(e.target.value)} />
                    <input className='border-2 border-black dark:border-gray-300 w-[800px] mt-4 mb-4' type='text' value={commentText} placeholder='Комментарий' onChange={(e) => setCommentText(e.target.value)} />
                    <button className='px-6 py-2 rounded-3xl bg-green-100 hover:bg-green-300 duration-200 dark:bg-slate-200 dark:hover:bg-gray-400 flex flex-col items-center' onClick={handleCommentSubmit}>
                        Отправить комментарий
                    </button>
                </div>
            </div>
        </div>
    );
}