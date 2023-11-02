import React,{useState, useEffect} from 'react'

const Create = () => {
  const[title, setTitle] = useState('');
  const[Date, setDate] = useState('');

  // handle submit
  function HandleSubmit(){

  }
  return (
    <div className='container bg-body-secondary p-5 rounded-3'> 
      <form className='form-group ' action="">
        <label >Title</label><br />
        <input type="text" className='form-control' placeholder='Type the day tracker'/><br />
        <label>Status</label><br />
        <input type="checkbox" name="complete" id="" /><br></br>
        <label >Date</label><br />
        <input type="date" className='form-control' name="set the date " id="" />
      </form>
      {/* button submit */}
      <div className='pt-4'>
        <button className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}

export default Create