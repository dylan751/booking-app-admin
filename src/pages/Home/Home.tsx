import React from 'react';
import styles from './Home.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';

const Home = () => {
  return (
    <div className={styles['home']}>
      <Sidebar />
      <div className={styles['homeContainer']}>
        <Navbar />
        <div className={styles['widgets']}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className={styles['charts']}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className={styles['listContainer']}>
          <div className={styles['listTitle']}>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
