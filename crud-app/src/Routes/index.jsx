import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Login from '../Pages/Login'
import Dashbord from '../Pages/Dashbord'
// import Logout from '../Pages/Logout'
import Signup from '../Pages/SignUp'
// import LoginHome from '../Pages/LoginHome'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashbord/>} ></Route>
            <Route path='/register' element={<Signup/>} ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            {/* <Route path='/productHome' element={<LoginHome/>} ></Route> */}
            {/* <Route path='/logout' element={<Logout />} ></Route> */}
        </Routes>
    </div>
  )
}

export default Routing