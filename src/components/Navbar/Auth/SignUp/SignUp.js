import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './SignUp.module.scss';
import { signUp } from './../../../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';


export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [confirmError, setConfirmError] = useState(null);


  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onPasswordConfirmChange = e => setPasswordConfirm(e.target.value);
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error);

  const onSubmit = e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setConfirmError('Passwords do not match');
    }

    dispatch(signUp(email, password));
    
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setConfirmError(null);
  };


  return (
    <section className={s.signup}>
      <div>
        <h2>Sign Up</h2>
        {confirmError && <div>{confirmError}</div>}
        {authError && <div>{authError.message}</div>}


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
        Уже есть аккаунт? <Link to="login">Log In</Link>
      </div>
    </section>
  )
}
