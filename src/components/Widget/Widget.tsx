import React from 'react';
import styles from './Widget.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

interface WidgetProps {
  type: 'user' | 'order' | 'earning' | 'balance';
}

const Widget = ({ type }: WidgetProps) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
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
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
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
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className={styles['icon']}
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
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
        <span className={styles['title']}>{data.title}</span>
        <span className={styles['counter']}>
          {data.isMoney && '$'} {amount}
        </span>
        <span className={styles['link']}>{data.link}</span>
      </div>
      <div className={styles['right']}>
      <div className={`${styles['percentage']} ${styles['positive']}`}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
