import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useState,useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {Context} from '../../Context/AuthContext'

const Login = () => {

  const [userDetails, setUserDetails] = useState({ email: "", pass: "" })
  const {isAuth,setIsAuth} = useContext(Context)
  const nevigate = useNavigate()
  const handleUserDetails = (e) => {
    const { name, value } = e.target

    setUserDetails((userDetails) => ({
      ...userDetails,
      [name]: value
    }))
  }

  const handleLoginUser = async () => {
    try {
      let response = await axios.post("https://full-stack-backend-beyu.onrender.com/users/login", userDetails, { withCredentials: true })
      console.log(response.data.token)
      Cookies.set("token", response.data.token)
      if (response.data.msg == 'Login Successful') {
        alert("Login Successfully")
        nevigate("/")
        setIsAuth(!isAuth)
      }
      if (response.data.msg == 'Register first or Wrong crendential') {
        alert("Register first or Wrong crendential")
      }

    } catch (error) {
      console.log(error)
      if (error.response.data == 'User not found') {
        alert("User not found Plz signup first")
      }
      if (error.response.data == 'User not found') {
        alert("User not found Plz signup first")
      }
    }
  }

  return (
    <div>
      <div className='navbar'>
        <Link to='/'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>Home</button></Link>
        <Link to='/register'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>SignUp</button></Link>
      </div>
      <h2>Login Page Here</h2>
      <div>
        <input type="email" placeholder='email' name='email' onChange={handleUserDetails} />
        <br />
        <input type="password" placeholder='password' name='pass' onChange={handleUserDetails} />
        <br />
        <button onClick={handleLoginUser}>Submit</button>
      </div>
    </div>
  )
}

export default Login