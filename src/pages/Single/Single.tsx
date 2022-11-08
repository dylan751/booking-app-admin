import React from 'react';
import styles from './Single.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Chart/Chart';
import List from '../../components/Table/Table';

const Single = () => {
  return (
    <div className={styles['single']}>
      <Sidebar />
      <div className={styles['singleContainer']}>
        <Navbar />
        <div className={styles['top']}>
          <div className={styles['left']}>
            <div className={styles['editButton']}>Edit</div>
            <h1 className={styles['title']}>Information</h1>
            <div className={styles['item']}>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className={styles['itemImg']}
              />
              <div className={styles['details']}>
                <h1 className={styles['itemTitle']}>Jane Doe</h1>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Email:</span>
                  <span className={styles['itemValue']}>janedoe@gmail.com</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Phone:</span>
                  <span className={styles['itemValue']}>+1 2345 67 89</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Address:</span>
                  <span className={styles['itemValue']}>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Country:</span>
                  <span className={styles['itemValue']}>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['right']}>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className={styles['bottom']}>
          <h1 className={styles['title']}>Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
