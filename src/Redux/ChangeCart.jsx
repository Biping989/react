import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeCart = () => {
    const dispatch=useDispatch()

    const increase=()=>(
        dispatch({type:'ADD_TO_CART'})
    )
    const decrease=()=>(
        dispatch({type:'REMOVE_FROM_CART'})
    )
  return (
    <>
    <div className="container">
    <div className="row d-flex justify-content-evenly">
        <div className="col-md-4">
            <button className='btn btn-primary' onClick={increase}>Add</button>
        </div>
        <div className="col-md-4">
            <button className='btn btn-danger' onClick={decrease}>Remove</button>
        </div>
    </div>
    </div>

    </>
  )
}

export default ChangeCart