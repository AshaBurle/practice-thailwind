import React from 'react'
import {Routes , Route} from "react-router-dom" 
import Home from './components/Home/Home'
import Login from './components/Home/Login/Login'
import About from './components/Home/About/About'
function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/login" element={<Login/>}/>
            <Route exact path = "/about" element={<About/>}/>
         </Routes>
    
    </div>
  )
}

export default AppRoutes