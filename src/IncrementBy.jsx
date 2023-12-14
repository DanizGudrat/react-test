import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from './redux/counterSlice'
const IncrementBy = () => {
    const dispacth = useDispatch()
  return (
    <div>
        <button onClick={()=>dispacth(incrementByAmount(10))}>deyer qeder artir</button>
    </div>
  )
}

export default IncrementBy