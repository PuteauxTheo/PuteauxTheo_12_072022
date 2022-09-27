import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import './style/css/style.css'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Header from './components/Header.jsx'


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>    
        <Header/>    
        <Routes>
          <Route path='/user/:id' element={<Home />} />    
          <Route path="*" element={<Error />}/>
          <Route path='/' element={<Navigate to='user/18'/>} />
        </Routes>
    </Router>
  </React.StrictMode>
)

