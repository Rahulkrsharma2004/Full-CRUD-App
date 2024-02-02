import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

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
      let responce = await fetch("https://full-stack-backend-beyu.onrender.com/users/login", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await responce.json()
      console.log(data)
      localStorage.setItem("token",data.token)
      alert("Login Successfully")
      nevigate("/")


    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
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