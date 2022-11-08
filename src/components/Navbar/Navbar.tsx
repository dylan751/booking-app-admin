import React from 'react';
import styles from './Navbar.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
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
          <div className={styles['item']}>
            <FullscreenExitOutlinedIcon className={styles['icon']} />
          </div>
          <div className={styles['item']}>
            <NotificationsNoneOutlinedIcon className={styles['icon']} />
            <div className={styles['counter']}>1</div>
          </div>
          <div className={styles['item']}>
            <ChatBubbleOutlineOutlinedIcon className={styles['icon']} />
            <div className={styles['counter']}>2</div>
          </div>
          <div className={styles['item']}>
            <ListOutlinedIcon className={styles['icon']} />
          </div>
          <div className={styles['item']}>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles['avatar']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
