import React, { useEffect } from 'react';
import { createContext, useReducer } from 'react';

interface AuthContextProps {
  user: any;
  loading: boolean;
  error: any;
  dispatch?: React.Dispatch<any>;
}

const INITIAL_STATE: AuthContextProps = {
  user: JSON.parse(localStorage.getItem('user') || '{}') || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext<AuthContextProps>(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { user: null, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { user: action.payload, loading: false, error: null };
    case 'LOGIN_FAILURE':
      return { user: null, loading: false, error: action.payload };
    case 'LOGOUT':
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Store user information into localStorage as stringified JSON
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
