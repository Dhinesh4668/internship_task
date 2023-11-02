import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiSolidPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Task 1",
      date: "2023-11-02",
      status: "Not Started",
      isTracking: false,
      elapsedTime: 0,
      timer: null, 
    },
    {
      id: 2,
      title: "Task 2",
      date: "2023-11-02",
      status: "Not Started",
      isTracking: false,
      elapsedTime: 0,
      timer: null, 
    }
  ]);

  // Handle starting a task timer
  const handleStartTask = (taskId) => {
    const taskIndex = data.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedData = [...data];
      updatedData[taskIndex] = {
        ...updatedData[taskIndex],
        startTime: new Date(),
        isTracking: true,
      };
      // Start the timer
      updatedData[taskIndex].timer = setInterval(() => {
        updatedData[taskIndex].elapsedTime += 1;
        setData([...updatedData]);
      }, 1000); 
      setData(updatedData);
    }
  };

  // Handle a task timer
  const handleStopTask = (taskId) => {
    const taskIndex = data.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedData = [...data];
      updatedData[taskIndex] = {
        ...updatedData[taskIndex],
        stopTime: new Date(),
        isTracking: false,
      };
      // Stop the timer
      clearInterval(updatedData[taskIndex].timer);
      setData(updatedData);
    }
  };

  return (
    <>
      <div className='container bg-primary rounded-2 shadow text-white'>
        <h1 className='text-capitalize'>Welcome unknown user</h1>
      </div>
      <div className='bg-danger container rounded-2'>
        <h2>Tracker</h2>
      </div>
      <div className="container">
        {data.map((task, index) => (
          <ItemTrack
            key={index}
            title={task.title}
            date={task.date}
            startTime={task.startTime}
            isTracking={task.isTracking}
            elapsedTime={task.elapsedTime}
            onStart={() => handleStartTask(task.id)}
            onStop={() => handleStopTask(task.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

const ItemTrack = ({ title, date, startTime, isTracking, elapsedTime, onStart, onStop }) => {
  return (
    <div className="bg-body-secondary container rounded-4">
      <p className="text-wrap text-capitalize" style={{ width: "30%" }}>{title}</p>
      <h6>{date}</h6>
      <div>
        <div>
          Elapsed Time: {elapsedTime} seconds
        </div>
        {isTracking ? (
          <button onClick={onStop}>Stop</button>
        ) : (
          <button onClick={onStart}>Start</button>
        )}
        <AiOutlineDelete size={25} color="black" />
        <BiSolidPencil size={25} color="black" />
      </div>
    </div>
  );
};
