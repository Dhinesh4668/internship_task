import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../firebase.config";

import { ItemTrack } from "../Components";

const Home = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const getLocalStorageName = () => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    } else {
      setName("nothing");
    }
    console.log(storedName);
  };

  //starting a task timer
  const handleStartTask = (taskId) => {
    const taskIndex = data.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedData = [...data];
      updatedData[taskIndex] = {
        ...updatedData[taskIndex],
        startTime: new Date(),
        isTracking: true,
      };
      // elapesdStart the timer
      updatedData[taskIndex].timer = setInterval(() => {
        updatedData[taskIndex].elapsedTime += 1;
        setData([...updatedData]);
      }, 1000);
      setData(updatedData);
    }
  };

  // stop a task timer
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
  // displaybthe name
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        setUser(authuser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // axios data base data
  useEffect(() => {
    axios
      .get("http://localhost:5000/display")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container bg-primary rounded-2 shadow text-white">
        {user ? (
          <div className="d-flex flex-row justify-content-between align-center p-2 mb-5">
            <h1 className="text-capitalize">Welcome, {user.displayName}</h1>
            <img src={user.photoURL} className="rounded-circle" style={{width: 50}} alt="user image" />
          </div>
        ) : (
          <h1>jhsgdfg</h1>
        )}
      </div>
      <div className="bg-success-subtle shadow p-3 mb-3 container rounded-2">
        <h2>Tracker</h2>
      </div>
      <div className="container bg-primary p-3 rounded-3 shadow">
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
