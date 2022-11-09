import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Single from './pages/Single/Single';
import NewUser from './pages/NewUser/NewUser';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import styles from './style/dark.module.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { AuthContext } from './context/AuthContext';
import { hotelColumns, userColumns } from './datatablesource';
import NewHotel from './pages/NewHotel/NewHotel';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
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
                    <List columns={userColumns} />
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
                    <NewUser inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
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
                    <NewHotel />
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
