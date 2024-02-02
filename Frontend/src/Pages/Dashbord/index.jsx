import React, { useEffect, useState } from 'react'

const Dashbord = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      let productData = await fetch("https://full-stack-backend-beyu.onrender.com/product", {
        method: "GET",
        headers: {
          "authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
      productData = await productData.json()
      console.log(productData)
      setProducts(productData)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Welcome to Product Application</h1>
      <div>
        {
          products?.map((ele, index) => {
            return <div key={index}>
                  <li>
                    {ele.productName}
                  </li>
                  <div>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                  
                    
                 
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Dashbord