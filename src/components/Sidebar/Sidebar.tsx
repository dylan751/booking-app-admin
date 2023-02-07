import React from 'react';
import styles from './Sidebar.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className={styles['sidebar']}>
      <div className={styles['top']}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className={styles['logo']}>Booking Admin</span>
        </Link>
      </div>
      <hr />
      <div className={styles['center']}>
        <ul>
          <p className={styles['title']}>MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className={styles['icon']} />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className={styles['title']}>LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className={styles['icon']} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className={styles['icon']} />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className={styles['icon']} />
              <span>Rooms</span>
            </li>
          </Link>
          <Link to="/forms" style={{ textDecoration: 'none' }}>
            <li>
              <LocalShippingIcon className={styles['icon']} />
              <span>Booking Forms</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles['bottom']}>
        <div
          className={styles['colorOption']}
          onClick={() => dispatch && dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className={styles['colorOption']}
          onClick={() => dispatch && dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
