import React from 'react';
import styles from './ListUserBooking.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch from '../../hooks/useFetch';
import { Hotel } from '../../models/Hotel';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface ListUserBookingProps {
  data: any;
}

const ListUserBooking = ({ data }: ListUserBookingProps) => {
  const { data: hotelData } = useFetch<Hotel>(
    `${process.env.REACT_APP_API_ENDPOINT}/hotels/${data?.hotelId}`,
  );

  console.log('Hotel data', hotelData);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/hotels/${id}`);
  };
  const hotelPhotos = [
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
              <div>Hotel ID</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>Start date</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>End date</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div>Pric</div>e
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div> Special Request</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((form, index) => (
            <TableRow key={form._id}>
              <TableCell className={styles['tableCell']}>
                <div
                  className={styles['cellWrapper']}
                  onClick={() => handleNavigate(form.hotelId)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={hotelPhotos[index % 5].img}
                    alt=""
                    className={styles['image']}
                  />
                  {form.hotelId}
                </div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div> {`${format(new Date(form.startDate), 'EE, d MMM')}`}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div> {`${format(new Date(form.endDate), 'EE, d MMM')}`}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div> ${form.price}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div> {form.specialRequest}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListUserBooking;
