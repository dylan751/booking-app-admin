import React from 'react';
import { createContext, useReducer } from 'react';
import DarkModeReducer from './DarkModeReducer';

interface DarkModeContextProps {
  darkMode: boolean;
  dispatch?: React.Dispatch<any>;
}

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext =
  createContext<DarkModeContextProps>(INITIAL_STATE);

export const DarkModeContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
