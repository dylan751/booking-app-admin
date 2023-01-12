import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import { roomInputs } from '../../formSource';
import axios from 'axios';
import styles from './NewRoom.module.scss';
import { roomTypes, tagsArr } from '../../constants/roomConstants';

const NewRoom = () => {
  const [roomInfo, setRoomInfo] = useState({});
  const [rooms, setRooms] = useState<any>([]);
  const [roomType, setRoomType] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleChange = (e) => {
    setRoomInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelectTags = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value,
    );
    setTags(value);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(',').map((roomId) => ({
      number: roomId.trim(),
    }));

    try {
      await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/rooms`, {
        ...roomInfo,
        type: roomType,
        tags,
        roomNumbers,
      });
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
                <label>Room type</label>
                <select
                  id="roomTypeId"
                  onChange={(e) => setRoomType(e.target.value)}
                  defaultValue={roomTypes[0]}
                >
                  {roomTypes.map((roomType, index) => (
                    <option value={roomType} key={index}>
                      {roomType}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles['formInput']}>
                <label>Tags</label>
                <select id="tagId" onChange={handleSelectTags} multiple>
                  {tagsArr.map((tag, index) => (
                    <option value={tag} key={index}>
                      {tag}
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
