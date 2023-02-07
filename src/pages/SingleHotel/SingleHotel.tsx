import React from 'react';
import styles from './SingleHotel.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Chart/Chart';
import ListRoom from '../../components/Table/Table';
import useFetch from '../../hooks/useFetch';

const SingleHotel = () => {
  const id = location.pathname.split('/')[2];
  const { data } = useFetch<any>(
    `${process.env.REACT_APP_API_ENDPOINT}/hotels/${id}`,
  );

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
                src={data.photos ? data.photos[0] : ''}
                alt=""
                className={styles['itemImg']}
              />
              <div className={styles['details']}>
                <h1 className={styles['itemTitle']}>{data.name}</h1>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>City:</span>
                  <span className={styles['itemValue']}>{data.city}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Title:</span>
                  <span className={styles['itemValue']}>{data.title}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Address:</span>
                  <span className={styles['itemValue']}>{data.address}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Cheapest price:</span>
                  <span className={styles['itemValue']}>${data.cheapestPrice}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['right']}>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className={styles['bottom']}>
          <h1 className={styles['title']}>Hotel rooms</h1>
          <ListRoom />
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
