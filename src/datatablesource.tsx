import React from 'react';
import styles from './components/Datatable/Datatable.module.scss';

export const userColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className={styles['cellWithImg']}>
          <img
            className={styles['cellImg']}
            src={params.row.img || 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 100,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 100,
  },
];

export const hotelColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 230,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 100,
  },
];

export const roomColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'title',
    headerName: 'Title',
    width: 230,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'maxPeople',
    headerName: 'Max People',
    width: 100,
  },
];

export const formColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 100,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 100,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 100,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    width: 100,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'hotelId',
    headerName: 'HotelID',
    width: 100,
  },
  {
    field: 'roomIds',
    headerName: 'Room IDs',
    width: 100,
  },
];
