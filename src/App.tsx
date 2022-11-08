import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Single from './pages/Single/Single';
import New from './pages/New/New';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import styles from './style/dark.module.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useContext(AuthContext);

    // Check if the user is {} => Navigate to /login
    if (Object.keys(user).length === 0 && user.constructor === Object) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div
      className={
        darkMode ? `${styles['app']} ${styles['dark']}` : `${styles['app']}`
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={productInputs} title="Add New Product" />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
