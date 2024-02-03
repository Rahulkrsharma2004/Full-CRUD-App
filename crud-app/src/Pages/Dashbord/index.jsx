import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../../Context/AuthContext'


const Dashbord = () => {
  const [products, setProducts] = useState([])
  const {isAuth,setIsAuth} = useContext(Context)
  const navigate = useNavigate()

  const getProducts = async () => {
    try {
      let productData = await axios.get("https://full-stack-backend-beyu.onrender.com/product", products, { withCredentials: true })
      // productData = await productData.json()
      // console.log(productData.data)
      setProducts(productData.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleEdit = async (productId) => {
    // Check if the user is authenticated
   
    if (isAuth) {
      // try {
      //   await axios.patch(`https://full-stack-backend-beyu.onrender.com/product/update/${productId}`, { withCredentials: true });
      //   console.log(`Editing product with ID: ${productId}`);
      //   alert(`Editing product with ID: ${productId}`);
      // } catch (error) {
      //    console.log(error)
      // }
    } else {
      navigate('/login');
    }
  };

  const handleDelete = async (productId) => {
    // Check if the user is authenticated
    if (isAuth) {
      // try {
      //   // Make a DELETE request to your API to delete the product
      //   await axios.delete(`https://full-stack-backend-beyu.onrender.com/product/delete/${productId}`, { withCredentials: true });

      //   // Update the state to reflect the deletion
      //   setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
        navigate('/login');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(`https://full-stack-backend-beyu.onrender.com/logout`,{}, { withCredentials: true })
      console.log(response)
      if(response.data == 'Logout Successfully'){
        setIsAuth(!isAuth)
        alert('Logout Successfully')
      }

    } catch (error) {
      // if (error.response.data.msg == 'Now you need to login again') {
      //   alert("Now you need to login again")
      // }
      console.log(error)
    }
  }

  return (
    <div>

      <div className='navbar'>
        <Link to='/register'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>Signup</button></Link>
        <Link to='/login'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>Login</button></Link>
        <Link to='/'><button style={{ backgroundColor: "gray", color: "white", padding: "5px" }} onClick={handleLogout}>Logout</button></Link>
      </div>
      <h1>Product Home Page Here</h1>
      <div>
        {
          products?.map((ele, index) => {
            return <div key={index}>
              <ul>
                <li>
                  {ele.productName} {ele.price}
                </li>
              </ul>
              <button onClick={() => handleEdit(ele._id)}>Edit</button>
              <button onClick={() => handleDelete(ele._id)}>Delete</button>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Dashbord