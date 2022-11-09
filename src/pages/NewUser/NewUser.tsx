import React from 'react';
import styles from './NewUser.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { UserInputs } from '../../models/UserInputs';
import axios from 'axios';

interface NewProps {
  inputs: any[];
  title: string;
}

const NewUser = ({ inputs, title }: NewProps) => {
  const [file, setFile] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    // Upload images to Cloudinary
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'upload'); // (Cloudinary's upload_preset, Cloudinary's folder_name)
    try {
      const uploadRes = await axios.post(
        process.env.REACT_APP_CLOUDINARY_ENDPOINT as string,
        data,
      );

      // console.log(uploadRes.data);
      const { url } = uploadRes.data;

      const newUser = {
        ...userInfo,
        img: url,
      };

      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/auth/register`,
        newUser,
      );
    } catch (err) {
      console.log(err);
    }
  };

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
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button onClick={handleSend}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
