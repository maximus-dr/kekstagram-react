import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignUp.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from './../../../store/actions/authActions';


export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const authError = useSelector(state => state.auth.signupError);
  const loadingStatus = useSelector(state => state.auth.status);

  const canSubmit = Boolean(name) && Boolean(email) && Boolean(password) && Boolean(passwordConfirm);

  const onNameChange = e => {
    setName(e.target.value);
  }

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
    <section className="signup">
      <div>
        <h2 className="signup__title">Sign Up</h2>

        {error && <div className="signup__error">{error}</div>}
        {authError && <div className="signup__error">{authError.message}</div>}


        <form onSubmit={onSubmit}>

          <label htmlFor="name">
            Name:<sup>*</sup>
          </label>
          <input 
            type="text"
            name="name"
            required
            value={name}
            onChange={onNameChange}
            placeholder="name"
          />

          <div className="signup__label-wrap">
            <label htmlFor="email">
              Email:<sup>*</sup>
            </label>
            <span className="signup__note">
              (Можно несуществующий)
            </span>
          </div>
          <input 
            type="text"
            name="email"
            required
            value={email}
            onChange={onEmailChange}
            placeholder="test@email.com"
          />

          <div className="signup__label-wrap">
            <label htmlFor="password">
              Password:<sup>*</sup>
            </label>
            <span className="signup__note">
              (Не менее 6 символов)
            </span>
          </div>
          <input 
            type="password"
            name="password"
            required
            value={password}
            onChange={onPasswordChange}
            placeholder="password"
          />

          <label htmlFor="password-confirm">
            Confirm Password:<sup>*</sup>
          </label>
          <input 
            type="password"
            name="password-confirm"
            required
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
            placeholder="confirm password"
          />

          <button className="signup__submit" type="submit" disabled={!canSubmit}>
            {
              loadingStatus === 'loading'
                ? 'Loading...'
                : 'Sign Up'
            }
          </button>
        </form>

      </div>
      <div className="signup__footer">
        <div>
          <span>Уже есть аккаунт? </span>
          <Link className="signup__to-login" to="login">Log In</Link>
        </div>
        <div>
          <Link className="signup__to-main" to="/">на главную</Link>
        </div>
      </div>
    </section>
  )
}
