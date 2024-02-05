import React from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Toaster} from "react-hot-toast"


import Success from './pages/Success'
import NotFound from './pages/NotFound'
import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Success/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App