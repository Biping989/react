import React from 'react'
import { useSelector } from  'react-redux'
import ChangeCart from './ChangeCart'
import Student from './Student'

const TestNav = () => {
    const data=useSelector(store=>store.cart)
  return (
    <>
    <div className='text-center text-primary h2'>
        The total number of item in the cart is {data.cartCount}
    </div>
    <ChangeCart/>
    <Student/>
    </>
  )
}

export default TestNav