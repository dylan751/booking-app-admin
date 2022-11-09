import React from 'react';
import styles from './List.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Datatable from '../../components/Datatable/Datatable';

interface ListProps {
  columns: any;
}

const List = ({ columns }: ListProps) => {
  return (
    <div className={styles['list']}>
      <Sidebar />
      <div className={styles['listContainer']}>
        <Navbar />
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default List;
