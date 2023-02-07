import React from 'react';
import styles from './Navbar.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useContext } from 'react';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className={styles['navbar']}>
      <div className={styles['wrapper']}>
        <div className={styles['search']}>
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className={styles['items']}>
          <div className={styles['item']}>
            <LanguageOutlinedIcon className={styles['icon']} />
            English
          </div>
          <div className={styles['item']}>
            <DarkModeOutlinedIcon
              className={styles['icon']}
              onClick={() => dispatch && dispatch({ type: 'TOGGLE' })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
