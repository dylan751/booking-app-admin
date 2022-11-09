import React from 'react';
import styles from './NewRoom.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';
import { UserInputs } from '../../models/UserInputs';
import { roomInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import { Hotel } from '../../models/Hotel';
import axios from 'axios';

const NewRoom = () => {
  const [roomInfo, setRoomInfo] = useState({});
  const [hotelId, setHotelId] = useState<string>('');
  const [rooms, setRooms] = useState<any>([]);

  const { data, loading, error } = useFetch<Hotel[]>(
    `${process.env.REACT_APP_API_ENDPOINT}/hotels`,
  );

  const handleChange = (e) => {
    setRoomInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(',').map((roomId) => ({
      number: roomId.trim(),
    }));

    try {
      await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/rooms/${hotelId}`,
        { ...roomInfo, roomNumbers },
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
          <h1>Add New Room</h1>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['right']}>
            <form>
              {roomInputs.map((input) => (
                <div className={styles['formInput']} key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className={styles['formInput']}>
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Give comma between room numbers"
                />
              </div>
              <div className={styles['formInput']}>
                <label>Choose a hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => setHotelId(e.target.value)}
                >
                  {loading
                    ? 'Loading Please wait'
                    : data &&
                      data.map((hotel) => (
                        <option value={hotel._id} key={hotel._id}>
                          {hotel.name}
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

export default NewRoom;
