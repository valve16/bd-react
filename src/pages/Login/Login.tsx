
// import useAuth from '../hooks/useAuth';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { setAuth } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const from = location.state?.from?.pathname || '/'

//   return (
//     <>
//       <div>Login</div>
//       <button type={'button'} onClick={() => {
//         setAuth(true)
//         navigate(from, { replace: true });
//       }}>Login</button>
//     </>
//   )
// }

// export default Login

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';  // Подключаем CSS файл
import logo_img from '../../images/secret_logo.png'
import d1 from '../../images/d1.png'
import d2 from '../../images/Gimnastka.png'
import d3 from '../../images/d2.png'

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Состояния для логина и пароля
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Проверка на наличие данных
    if (login && password) {
      setAuth(true);  // Здесь вы можете также добавить логику проверки данных
      navigate(from, { replace: true });
    } else {
      alert('Пожалуйста, введите логин и пароль');
    }
  };

  return (
    <div className='login-page'>
      <div className='left-container'>
        <img src={logo_img} alt="Logo" className="logo-image" />
        <div className='left-container__text-about'>
          <li>Этот сайт создан для того, чтобы:</li>
          <li>усвоить программу обучения</li>
          <li>следить за своей успеваемостью</li>
          <li>быть в курсе всех событий</li>
        </div>
        <div className='left-container__dance-section'>
          <img src={d1} className='dance__element'></img>
          <img src={d2} className='dance__element'></img>
          <img src={d3} className='dance__element'></img>
        </div>
      </div>
      <div className='right-container'>
        <div className="login-container">
          <h2 className='login__main-text'>Вход в личный кабинет</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="login">Логин:</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">Войти</button>
            <div className='text-link'>
              <a href="https://example.com">Забыли пароль?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;