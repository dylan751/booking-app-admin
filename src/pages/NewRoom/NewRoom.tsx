import React from 'react';
import styles from './NewRoom.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { UserInputs } from '../../models/UserInputs';

interface NewProps {
  inputs: any[];
  title: string;
}

const NewRoom = ({ inputs, title }: NewProps) => {
  const [file, setFile] = useState('');

  return (
    <div className={styles['new']}>
      <Sidebar />
      <div className={styles['newContainer']}>
        <Navbar />
        <div className={styles['top']}>
          <h1>{title}</h1>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['left']}>
            <img
              src={
                file
                  ? URL.createObjectURL(file as any)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className={styles['right']}>
            <form>
              <div className={styles['formInput']}>
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e: any) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => (
                <div className={styles['formInput']} key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
