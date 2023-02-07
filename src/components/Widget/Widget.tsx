import React from 'react';
import styles from './Widget.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

interface WidgetProps {
  type: 'user' | 'hotel' | 'room' | 'form';
}

const Widget = ({ type }: WidgetProps) => {
  const { data: count } = useFetch<number>(
    `${process.env.REACT_APP_API_ENDPOINT}/${type}s/count`,
  );

  let rowData;

  //temporary
  const diff = 20;

  switch (type) {
    case 'user':
      rowData = {
        title: 'USERS',
        link: 'See all users',
        icon: (
          <PersonOutlinedIcon
            className={styles['icon']}
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'hotel':
      rowData = {
        title: 'HOTELS',
        link: 'View all hotels',
        icon: (
          <ShoppingCartOutlinedIcon
            className={styles['icon']}
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case 'room':
      rowData = {
        title: 'ROOMS',
        link: 'View hotel rooms',
        icon: (
          <MonetizationOnOutlinedIcon
            className={styles['icon']}
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case 'form':
      rowData = {
        title: 'FORMS',
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className={styles['icon']}
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={styles['widget']}>
      <div className={styles['left']}>
        <span className={styles['title']}>{rowData.title}</span>
        <span className={styles['counter']}>{count}</span>
        <Link to={`/${type}s`} style={{ textDecoration: 'none' }}>
          <span className={styles['link']}>{rowData.link}</span>
        </Link>
      </div>
      <div className={styles['right']}>
        <div className={`${styles['percentage']} ${styles['positive']}`}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {rowData.icon}
      </div>
    </div>
  );
};

export default Widget;
