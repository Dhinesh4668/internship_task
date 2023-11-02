import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BiSolidPencil, } from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
// import firebase from 'firebase/app';
// import 'firebase/auth'
// import {useNavigate} from 'react-router-dom'

const Home = () => {
  // const navigate = useNavigate()
  // const [data, setData] = useState([]);
  const [data, setData] = useState([
    { id: 1, title: "Task 1", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 2, title: "Task 2", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 3, title: "Task 3", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 4, title: "Task 4", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 5, title: "Task 5", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 6, title: "Task 6", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 7, title: "Task 7", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 8, title: "Task 8", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 9, title: "Task 9", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 10, title: "Task 10", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    { id: 11, title: "Task 11", date: "2023-11-02", status: "Not Started", startTime: null, stopTime: null, isTracking: false },
    
  ]);
  


  // handle the data track items
  const handleStartTask = (taskId) => {
    const taskIndex = data.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedData = [...data];
      updatedData[taskIndex] = {
        ...updatedData[taskIndex],
        startTime: new Date(),
        isTracking: true,
      };
      setData(updatedData);
    }
  };

  const handleStopTask = (taskId) => {
    const taskIndex = data.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      const updatedData = [...data];
      updatedData[taskIndex] = {
        ...updatedData[taskIndex],
        stopTime: new Date(),
        isTracking: false,
      };
      setData(updatedData);
    }
  };





  const[user, setUser] = useState(null)
  useEffect(() => {
    // axios.get('http://localhost:5000/display')
    //   .then(response => {
    //     setData(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });


      // disply the profile name and pic
  //  firebase.auth().onAuthStateChange(authUser =>{
  //   if(authUser){
  //     setUser(authUser)
  //   }
  //  })
  }, []);


  
  return (
    <aside>
      {/* User name and user profile */}
      <div className='pt-5'>
        <div className='container bg-primary rounded-2 shadow text-white'>
          {/* {user ? (
            <div>
              <h1 className='text-Capitalize'>welcome back, {user.displayName}</h1>
              <img
                src={user.photoURL}
                alt={`${user.displayName}'s Profile`}
                style={{ width: '50px', height: '50px' }}
              />
            </div>
          ):(
            <h1 className='text-capitalize'>welcome unknown user </h1>
          )} */}
           <h1 className='text-capitalize'>welcome unknown user </h1>
        </div>
      </div>

      {/* title */}
      <div className='bg-danger container rounded-2'>
          <h2>Tracker</h2>
      </div>
      {/* Tasks list */}
      <div className="container">
        {data.map((task, index) => (
          <ItemTrack
            key={index}
            title={task.title}
            date={task.date}
            startTime={task.startTime}
            stopTime={task.stopTime}
            isTracking={task.isTracking}
            onStart={() => handleStartTask(task.id)}
            onStop={() => handleStopTask(task.id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Home;
// const TaskItem = ({title,date})=>{
//   return(
//     <div className='bg-body-secondary container rounded-4' style={{
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginTop: 10,
//       height: 'auto',
//       alignItems: 'center' 
//     }}>
//       <p className='text-wrap text-capitalize' style={{
//         width: '30%'
//       }}>{title}</p>
//       <h6>{date}</h6>
//       <div>
//       <AiOutlineDelete size={25} color='black' />
//       <BiSolidPencil size={25} color='black' />
//       </div>
//     </div>
//   )
// }




// track the itemas
const ItemTrack = ({ title, date, startTime, stopTime, isTracking, onStart, onStop }) => {
  return (
    <div className="bg-body-secondary container rounded-4">
      <p className="text-wrap text-capitalize" style={{ width: "30%" }}>{title}</p>
      <h6>{date}</h6>
      <div>
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
