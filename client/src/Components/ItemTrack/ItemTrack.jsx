
import { BiSolidPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import React from 'react';
const ItemTrack = ({ title, date, startTime, isTracking, elapsedTime, onStart, onStop }) => {
    return (
      <div className='m-3'>
        <div className="bg-body-secondary d-flex flex-row justify-content-between container rounded-4">
        <div className='container'>
        <p className="text-wrap text-capitalize" style={{ width: "30%" }}>{title}</p>
        <h6>{date}</h6>
        </div>
        <div className=' container'>
          <div>
            Time: {elapsedTime} seconds
          </div>
          {isTracking ? (
            <button onClick={onStop}>Stop</button>
          ) : (
            <button onClick={onStart}>Start</button>
          )}
          <AiOutlineDelete size={25} color="red" />
          <BiSolidPencil size={25} color="green" />
        </div>
      </div>
      </div>
      
    );
  };

  export default ItemTrack;