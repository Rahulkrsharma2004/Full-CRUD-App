import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            let responce = await fetch("https://full-stack-backend-beyu.onrender.com/users/register", {
                method: "POST",
                body: JSON.stringify(userDetails),
                headers: {
                    'content-type': 'application/json'
                }
            })
            const data = await responce.text()
            console.log(data)
            // nevigate("/login")
            // alert("User Registered Successfully")
            
            
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <h2>Signup page here</h2>
            <div>
                <input type="text" placeholder='username' name='username' onChange={handleUserDetails} />
                <br />
                <input type="email" placeholder='email' name='email' onChange={handleUserDetails} />
                <br />
                <input type="password" placeholder='password' name='pass' onChange={handleUserDetails} />
                <br />
                <button onClick={handleRegisterUser}>Submit</button>
            </div>
        </div>
    )
}

export default Signup