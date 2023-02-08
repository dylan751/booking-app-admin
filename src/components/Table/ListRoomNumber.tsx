import React from 'react';
import styles from './ListRoomNumber.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';

interface ListRoomNumberProps {
  roomNumbers: any[];
}

const ListRoomNumber = ({ roomNumbers }: ListRoomNumberProps) => {
  return (
    <TableContainer component={Paper} className={styles['table']}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles['tableCell']}>
              <div>Room number</div>
            </TableCell>
            <TableCell className={styles['tableCell']}>
              <div> Unavailable dates</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roomNumbers?.map((room, index) => (
            <TableRow key={index}>
              <TableCell className={styles['tableCell']}>
                <div className={styles['cellWrapper']}>{room.number}</div>
              </TableCell>
              <TableCell className={styles['tableCell']}>
                <div className={styles['tableCellDiv']}>
                  {room.unavailableDates.map((date, index) => (
                    <span className={styles['tableCellSpan']} key={index}>
                      <div>{`${format(new Date(date), 'EEEE, d MMMM')}`}</div>
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListRoomNumber;
