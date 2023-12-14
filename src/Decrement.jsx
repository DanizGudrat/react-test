import React from 'react'
import { decrement } from './redux/counterSlice'
import { useDispatch } from 'react-redux'
const Decrement = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(decrement())}>azalt</button>
    </div>
  )
}

export default Decrement