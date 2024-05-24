import React, { useEffect, useState } from 'react'


function Home() {
    
    const [products, setproducts] = useState([])
    useEffect(() => {
    showProducts()  
    }, [])

    async function showProducts() {
        const res =  await fetch("http://localhost:1234/products")
        const data = await res.json()
        setproducts(data)
        
    }
    
  return (
   <>
<div className="cards">
    {products.map((x)=>(
        <div className="card" key={x._id}>
                <img src={x.image} alt="" />
                <h3>{x.title}</h3>
                <p>{x.description}</p>
                
               
        </div>
    ))}
</div>
   </>
  )
}

export default Home