import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './SignUp.module.scss';


export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onPasswordConfirmChange = e => setPasswordConfirm(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };


  return (
    <section className={s.signup}>
      <div>
        <h2>Sign Up</h2>

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

          <label htmlFor="password-confirm">Confirm Password:</label>
          <input 
            type="password"
            name="password-confirm"
            required
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
          />

          <button type="submit">
            Sign Up
          </button>
        </form>

      </div>
      <div>
        <Link to="/">Вернуться на главную</Link>
      </div>
      <div>
        Уже есть аккаунт? Log In
      </div>
    </section>
  )
}
