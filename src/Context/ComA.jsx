import React from 'react'
import ComB from './ComB'
import GlobalContextProvider from './GlobalContext'

const ComA = () => {
  return (
    <GlobalContextProvider>
    <ComB/>
    </GlobalContextProvider>
  )
}

export default ComA