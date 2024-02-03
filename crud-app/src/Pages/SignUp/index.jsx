import React, { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [userDetails, setUserDetails] = useState({ username: "", email: "", pass: "" })
    const nevigate = useNavigate()

    const handleUserDetails = (e) => {
        const { name, value } = e.target

        setUserDetails((userDetails) => ({
            ...userDetails,
            [name]: value
        }))
    }

    const handleRegisterUser = async () => {
        try {
            let response = await axios.post("https://full-stack-backend-beyu.onrender.com/users/register", userDetails,{withCredentials:true})
            // const data = await responce.text()
            console.log(response)

            if(response.data.msg == 'New user has been created'){
                alert("Registered Successfully")
                nevigate("/")
            }


        } catch (error) {
            console.log(error)
            if(error.response.data.error == 'Invalid password format'){
                alert("Invalid password format")
            }
            if(error.response.data.error == 'User with this email already exists'){
                alert("User with this email already exists")
            }
        }
    }


    return (
        <div>
            <div className='navbar'>
                <Link to='/'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>Home</button></Link>
                <Link to='/login'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>Login</button></Link>
            </div>
            <h2>Signup page here</h2>

            <div>
                <input type="text" placeholder='username' value={userDetails.username} name='username' onChange={handleUserDetails} />
                <br />
                <input type="email" placeholder='email' value={userDetails.email} name='email' onChange={handleUserDetails} />
                <br />
                <input type="password" placeholder='password' value={userDetails.pass} name='pass' onChange={handleUserDetails} />
                <br />
                <button onClick={handleRegisterUser}>Submit</button>
            </div>
        </div>
    )
}

export default Signup