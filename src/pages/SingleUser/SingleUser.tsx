import React from 'react';
import styles from './SingleUser.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Chart/Chart';
import ListHotelRoom from '../../components/Table/ListHotelRoom';
import useFetch from '../../hooks/useFetch';

const SingleUser = () => {
  const id = location.pathname.split('/')[2];
  const { data } = useFetch<any>(
    `${process.env.REACT_APP_API_ENDPOINT}/users/${id}`,
  );
  console.log(data);

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
                src={
                  data.img ? data.img : 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'
                }
                alt=""
                className={styles['itemImg']}
              />
              <div className={styles['details']}>
                <h1 className={styles['itemTitle']}>{data.username}</h1>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Email:</span>
                  <span className={styles['itemValue']}>{data.email}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Country:</span>
                  <span className={styles['itemValue']}>{data.country}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>City:</span>
                  <span className={styles['itemValue']}>{data.city}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Phone number:</span>
                  <span className={styles['itemValue']}>{data.phone}</span>
                </div>
                {data.isAdmin && (
                  <div className={styles['detailItem']}>
                    <span className={styles['itemKeyAdmin']}>Admin</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles['right']}>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className={styles['bottom']}>
          <h1 className={styles['title']}>{`${data.username}'s booking`}</h1>
          <ListHotelRoom />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
