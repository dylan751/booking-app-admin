import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.module.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch && dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/login`,
        credentials,
      );

      if (res.data.isAdmin) {
        dispatch &&
          dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
        navigate('/');
      } else {
        dispatch &&
          dispatch({
            type: 'LOGIN_FAILURE',
            payload: { message: 'You are not admin!' },
          });
      }
    } catch (err: any) {
      dispatch &&
        dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div className={styles['login']}>
      <div className={styles['login__container']}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleInputChange}
          className={styles['login__container__input']}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleInputChange}
          className={styles['login__container__input']}
        />
        <button
          className={styles['login__container__login-btn']}
          onClick={handleLogin}
          disabled={loading}
        >
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
