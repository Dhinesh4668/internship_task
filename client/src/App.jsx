import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Create, Home, Users } from './Pages'
import { Slider } from './Components'



const App = () => {
  return (
    <BrowserRouter>
      <Slider />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />} />
        <Route path='/user' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App