import React, { useEffect } from 'react';
import styles from './Datatable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { User } from '../../models/User';
import axios from 'axios';
import { Hotel } from '../../models/Hotel';
import { Room } from '../../models/Room';

interface DatatableProps {
  columns: any;
}

const Datatable = ({ columns }: DatatableProps) => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [list, setList] = useState<User[] | Hotel[] | Room[]>([]);
  const { data, loading, error } = useFetch<User[] | Hotel[] | Room[]>(
    `${process.env.REACT_APP_API_ENDPOINT}/${path}`,
  );

  useEffect(() => {
    if (data) setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/${path}/${id}`);
      setList((list as any).filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles['cellAction']}>
            <Link to={`/${path}/test`} style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className={styles['deleteButton']}
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles['datatable']}>
      {loading ? (
        'Loading Please wait'
      ) : (
        <>
          <div className={styles['datatableTitle']}>
            Add New User
            <Link to={`/${path}/new`} className={styles['link']}>
              Add New
            </Link>
          </div>
          <DataGrid
            className={styles['datagrid']}
            rows={list as any}
            columns={columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </>
      )}
    </div>
  );
};

export default Datatable;
