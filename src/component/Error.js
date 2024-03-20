import React from 'react'
import {useRouteError}  from "react-router-dom"

function Error() {

    // All the Errors will be caught and 
    // will be avaiable to us inside the object "err"
    const err = useRouteError()

    console.log(err)

  return (
    <div className='text-6xl p-16'>
    <h1 className='p-3'>Oops!!!!</h1>
    <h2 className='p-3'>Something Went Wrong!</h2>
    <h2 className='p-3'>{err.data}</h2>
    </div>
  )
}

export default Error