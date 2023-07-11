import React from 'react'
import TestNav from './TestNav'
import { Outlet } from 'react-router-dom'

const TestLayout = () => {
  return (
    <>
    <TestNav/>
    <Outlet/>
    </>
  )
}

export default TestLayout