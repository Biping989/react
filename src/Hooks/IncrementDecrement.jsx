import React,{useState} from 'react'

const IncrementDecrement = () => {
    const[num,setNum]=useState(1)
    const[data,setData]=useState(5)

    // const increase=()=>{
    //     setNum(num+1)
    // }
  return (
    <>
     <h1 className='text-success'>{num}</h1>
     {/* <button className='btn btn-primary' onClick={increase}>Increment</button> */}
     {num<20 &&
          <button className='btn btn-primary' onClick={()=>setNum(num+1)}>Increment</button>
     }
     
     {num>1 &&
        <button className='btn btn-danger' onClick={()=>setNum(num-1)}>Decrement</button>
     }<br/><br/>

     <h1 className='text-success'>{data}</h1>
     <button className='btn btn-primary' onClick={()=>setData(data+1)}>Increament</button>
     
     {data>0 &&
            <button className='btn btn-danger' onClick={()=>setData(data-1)}>Decrement</button>
     }
    
    </>
    
  )
}

export default IncrementDecrement;