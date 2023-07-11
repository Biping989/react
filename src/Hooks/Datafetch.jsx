import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Datafetch = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        axios.get('http://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
       {products.map((product,i)=>(
        <div key={i}>
          <h1>{product.title}</h1>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <h4>{product.rating.rate}</h4>

        </div>
       ))}
    </>
  )
}

export default Datafetch