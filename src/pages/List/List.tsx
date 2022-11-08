import React from 'react';
import styles from './List.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Datatable from '../../components/Datatable/Datatable';

const List = () => {
  return (
    <div className={styles['list']}>
      <Sidebar />
      <div className={styles['listContainer']}>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
