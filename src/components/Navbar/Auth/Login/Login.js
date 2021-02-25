import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './Login.module.scss';
import { login } from '../../../../store/actions/authActions';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const dispatch = useDispatch();
  const history = useHistory();
  const authError = useSelector(state => state.auth.error);
  const loadingStatus = useSelector(state => state.auth.status);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (loadingStatus === 'success') {
      setEmail('');
      setPassword('');
      history.push('/');
    }
  }, [loadingStatus, history]);


  return (
    <section className={s.login}>
      <div>
        <h2>Log In</h2>
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

          <button type="submit">
            {
              loadingStatus === 'loading'
                ? 'Loading'
                : 'Log In'
            }
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
