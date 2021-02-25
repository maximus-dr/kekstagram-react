import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './Login.module.scss';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };


  return (
    <section className={s.login}>
      <div>
        <h2>Log In</h2>
        {error && <div>{error}</div>}

        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email:</label>
          <input 
            type="text"
            name="email"
            required
            value={email}
            onChange={onEmailChange}
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            name="password"
            required
            value={password}
            onChange={onPasswordChange}
          />

          <button type="submit">
            Log In
          </button>
        </form>

      </div>
      <div>
        <Link to="/">Вернуться на главную</Link>
      </div>
      <div>
        Нужен аккаунт? <Link to="signup">Sign Up</Link>
      </div>
    </section>
  )
}
