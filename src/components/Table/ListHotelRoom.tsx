import React from 'react';
import styles from './ListHotelRoom.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import '../../style/dark.module.scss';

const ListHotelRoom = () => {
  const hotelId = location.pathname.split('/')[2];
  const { data } = useFetch<any>(
    `${process.env.REACT_APP_API_ENDPOINT}/hotels/room/${hotelId}`,
  );

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/rooms/${id}`);
  };

  const roomPhotos = [
    {
      img: 'http://res.cloudinary.com/di7a7sbbn/image/upload/v1668413532/upload/uihypk8l9hvx3a82da0m.jpg',
    },
    {
      img: 'http://res.cloudinary.com/di7a7sbbn/image/upload/v1668413805/upload/wn7vd9nf4dprm4h8fecf.jpg',
    },
    {
      img: 'http://res.cloudinary.com/di7a7sbbn/image/upload/v1668414040/upload/jmolhxwkeev9typf8d5q.jpg',
    },
    {
      img: 'http://res.cloudinary.com/di7a7sbbn/image/upload/v1668414219/upload/e3yqmajckk6sfdhpk301.jpg',
    },
    {
      img: 'http://res.cloudinary.com/di7a7sbbn/image/upload/v1668785785/upload/sgg9j5xxioecrfgnj8rt.jpg',
    },
  ];
  return (
    <TableContainer component={Paper} className={styles['table']}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles['tableCell']}>
              <div>Room ID</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>Title</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>Description</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>Price</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>Max people</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((room, index) => (
            <TableRow key={room._id}>
              <TableCell className={styles['tableCell']}>
                <div
                  className={styles['cellWrapper']}
                  onClick={() => handleNavigate(room._id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={roomPhotos[index].img}
                    alt=""
                    className={styles['image']}
                  />
                  {room._id}
                </div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div>{room.title}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div>{room.description}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div>{room.price}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div>{room.maxPeople}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListHotelRoom;
