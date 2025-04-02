import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import signup from './signup'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<signup />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
