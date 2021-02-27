import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import s from './SignUp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from './../../../store/actions/authActions';


export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const authError = useSelector(state => state.auth.signupError);
  const loadingStatus = useSelector(state => state.auth.status);

  const onEmailChange = e => {
    setEmail(e.target.value);
    setError(null);
  };
  const onPasswordChange = e => {
    setPassword(e.target.value);
    setError(null);
  };
  const onPasswordConfirmChange = e => {
    setPasswordConfirm(e.target.value);
    setError(null);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }
    dispatch(signUp(email, password));
  };
  
  // Clear input fields in case of success
  // Redirect to main page
  useEffect(() => {
    if (loadingStatus === 'success') {
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setError(null);
      history.push('/');
    }
  }, [loadingStatus, history]);

  // Clean up error warning by unmounting
  useEffect(() => {
    if (loadingStatus === 'error') {
      return () => dispatch({ type: 'CLEANUP_SIGN_UP_ERROR' });
    }
  });


  return (
    <section className={s.signup}>
      <div>
        <h2>Sign Up</h2>
        {error && <div>{error}</div>}
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
            {
              loadingStatus === 'loading'
                ? 'Loading...'
                : 'Sign Up'
            }
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
