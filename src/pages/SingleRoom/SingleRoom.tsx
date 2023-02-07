import React from 'react';
import styles from './SingleRoom.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Chart/Chart';
import useFetch from '../../hooks/useFetch';
import ListRoomNumber from '../../components/Table/ListRoomNumber';

const SingleHotel = () => {
  const id = location.pathname.split('/')[2];
  const { data, loading } = useFetch<any>(
    `${process.env.REACT_APP_API_ENDPOINT}/rooms/${id}`,
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

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
              {/* <img
                src={data.photos ? data.photos[0] : ''}
                alt=""
                className={styles['itemImg']}
              /> */}
              <div className={styles['details']}>
                <h1 className={styles['itemTitle']}>{data.title}</h1>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Price:</span>
                  <span className={styles['itemValue']}>{data.price}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Max people:</span>
                  <span className={styles['itemValue']}>{data.maxPeople}</span>
                </div>
                <div className={styles['detailItem']}>
                  <span className={styles['itemKey']}>Description:</span>
                  <span className={styles['itemValue']}>
                    {data.description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['right']}>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className={styles['bottom']}>
          <h1 className={styles['title']}>Rooms</h1>
          <ListRoomNumber roomNumbers={data.roomNumbers} />
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
