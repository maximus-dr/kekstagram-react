import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss';
import { login } from '../../../store/actions/authActions';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const authError = useSelector(state => state.auth.loginError);
  const loadingStatus = useSelector(state => state.auth.status);

  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);

  const canSubmit = Boolean(email) && Boolean(password);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // Clear input fields in case of success
  // Redirect to main page
  useEffect(() => {
    if (loadingStatus === 'success') {
      setEmail('');
      setPassword('');
      history.push('/');
    }
  }, [loadingStatus, history]);

  // Clean up error warning by unmounting
  useEffect(() => {
    if (loadingStatus === 'error') {
      return () => dispatch({ type: 'CLEANUP_LOGIN_ERROR'});
    }
  });

  return (
    <section className="login">
      <div>
        <h2 className="login__title">Log In</h2>
        {authError && <div className="login__error">{authError.message}</div>}

        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email:<sup>*</sup></label>
          <input 
            type="text"
            name="email"
            required
            value={email}
            onChange={onEmailChange}
            placeholder="test@email.com"
          />

          <label htmlFor="password">Password:<sup>*</sup></label>
          <input 
            type="password"
            name="password"
            required
            value={password}
            onChange={onPasswordChange}
            placeholder="password"
          />

          <button className="login__submit" type="submit" disabled={!canSubmit}>
            {
              loadingStatus === 'loading'
                ? 'Loading...'
                : 'Log In'
            }
          </button>
        </form>

      </div>
      <div className="login__footer">
        <div>
          <span>Нужен аккаунт? </span>
          <Link className="login__to-signup" to="signup">Sign Up</Link>
        </div>
        <div>
          <Link className="login__to-main" to="/">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  )
}
