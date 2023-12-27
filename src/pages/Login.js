import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [isLoginView, setIsLoginView] = useState(true);
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSignup = async () => {
        if (!email || !password || !confirmPassword) {
            alert('Пожалуйста заполните поля!');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
    
        const registrationData = {
            email: email,
            password: password
        };
    
        try {
            const response = await fetch('http://localhost:3002/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });
    
            if (response.ok) {
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                alert('Аккаунт создан!');
                navigate('/login');
            } else {
                // Обработка ошибки, если сервер не смог обработать запрос
                setError('Ошибка при регистрации.');
                console.error('Ошибка сервера:', response.statusText);
            }
        } catch (error) {
            // Обработка ошибки сети или отказа связи
            setError('Ошибка сети при попытке регистрации.');
            console.error('Ошибка сети:', error);
        }
    };
    

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginView) {
        try {
            const response = await fetch('http://localhost:3002/users');
            const users = await response.json();
            const user = users.find(
                (user) =>
                    user.email === credentials.email &&
                    user.password === credentials.password
            );

            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('role', user.role); 
                alert(`Вы успешно вошли как ${user.role}!`); 
                navigate('/');
                window.location.reload(false); 
            } else {
                setError('Неправильный логин или пароль');
            }
        } catch (error) {
            setError('Ошибка при авторизации. Пожалуйста, попробуйте снова.');
        }
    }
}; 

    return (
        <main>
            <div className="acontainer">
                <input type="checkbox" id="check" onChange={() => setIsLoginView(!isLoginView)} />
                {isLoginView ? (
                    <div className="login form">
                        <header>Login</header>
                        <form action="#" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                name="email"
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                onChange={handleInputChange}
                                required
                            />
                            <input type="submit" className="button" value="Login" />
                        </form>
                        <div className="signup">
                            <span className="signup">Don't have an account?
                                <label htmlFor="check">Signup</label>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="registration form">
                        <header>Signup</header>
                        <form>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <input
                                type="button"
                                className="button"
                                value="Signup"
                                onClick={handleSignup}
                            />
                        </form>
                        <div className="signup">
                            <span className="signup">Already have an account?
                                <label htmlFor="check">Login</label>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Login;