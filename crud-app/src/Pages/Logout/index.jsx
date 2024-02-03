import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Logout = () => {

  const [userDetails, setUserDetails] = useState({ email: "", pass: "" })
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
      let response = await axios.post("https://full-stack-backend-beyu.onrender.com/logout", userDetails, { withCredentials: true })
      console.log(response)
      Cookies.set("token", response.data.token)
      if (response.data.msg == 'Login Successful') {
        alert("Logout Successfully")
        nevigate("/")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <></>
  )
}

export default Logout