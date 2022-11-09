import React from 'react';
import styles from './NewHotel.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { UserInputs } from '../../models/UserInputs';
import { hotelInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import { Room } from '../../models/Room';
import axios from 'axios';

const NewHotel = () => {
  const [files, setFiles] = useState<any>('');
  const [hotelInfo, setHotelInfo] = useState({});
  const [rooms, setRooms] = useState<any[]>([]);

  const { data, loading, error } = useFetch<Room[]>(
    `${process.env.REACT_APP_API_ENDPOINT}/rooms`,
  );

  const handleChange = (e) => {
    setHotelInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value,
    );
    setRooms(value);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const list: string[] = await Promise.all(
        Object.values(files).map(async (file) => {
          // Upload images to Cloudinary
          const data = new FormData();
          data.append('file', file as any);
          data.append('upload_preset', 'upload'); // (Cloudinary's upload_preset, Cloudinary's folder_name)

          const uploadRes = await axios.post(
            process.env.REACT_APP_CLOUDINARY_ENDPOINT as string,
            data,
          );

          const { url } = uploadRes.data;
          return url;
        }),
      );

      const newHotel = {
        ...hotelInfo,
        rooms,
        photos: list,
      };

      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/hotels`,
        newHotel,
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
          <h1>Add New Product</h1>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['left']}>
            <img
              src={
                files
                  ? URL.createObjectURL(files[0] as any)
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
                  multiple
                  onChange={(e: any) => setFiles(e.target.files)}
                  style={{ display: 'none' }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className={styles['formInput']} key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className={styles['formInput']}>
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false as any}>No</option>
                  <option value={true as any}>Yes</option>
                </select>
              </div>
              <div className={styles['selectRooms']}>
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? 'Loading Please wait'
                    : data &&
                      data.map((room) => (
                        <option value={room._id} key={room._id}>
                          {room.title}
                        </option>
                      ))}
                </select>
              </div>
              <button onClick={handleSend}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
