import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use axios to make the API request and set the data
    axios.get('http://localhost:5000/display')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <aside>
      {/* User name and user profile */}
      <div className='pt-5'>
        <div className='container bg-primary rounded-2 shadow text-white'>
          <h1>welcome : 🥳</h1>
        </div>
      </div>

      {/* Tasks list */}
      <div className='container bg-body-secondary'>
      {data.map((task, index) => (
          <TaskItem
            key={index}
            title={task.title}
            date={task.date}
            status={task.status}
          />
        ))}
      </div>
    </aside>
  );
};

export default Home;


const TaskItem = ({title,date})=>{
  return(
    <div>
      <h1>{title}</h1>
      <h6>{date}</h6>
    </div>
  )
}