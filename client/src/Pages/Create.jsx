
import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
const Create = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create', {
        title,
        date,
        status,
      });
      console.log('Task created. Task ID:', response.data.task_id);
      toast.success("track item was created")
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error("error occerd")
    }
  };

  return (
    <div className='container bg-secondary mt-3 p-5 rounded-4 text-white'>
        <form className='form-group  ' onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        className='form-control'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <label>Date</label><br />
      <input
        type="date"
        value={date}
        className='form-control'
        onChange={(e) => setDate(e.target.value)}
      /><br />
      <label>Status</label><br />
      <input
        type="text"
        placeholder="Status"
        value={status}
        className='form-control'
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className='btn btn-success mt-4' type="submit">Create Task</button>
    </form>
    </div>
    
  );
};

export default Create;
