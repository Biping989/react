import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return ( 
    <>
    <Link to='/'>Demo</Link>
    <Link to='/test'>Test</Link>
    <Link to='/demo'>Show</Link>
    <Link to='/content'>Hello</Link>
    </>
  )
}

export default TestNav