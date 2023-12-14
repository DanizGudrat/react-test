import React from 'react'
import { increment } from './redux/counterSlice';
import { useDispatch } from 'react-redux';
const Increment = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>artir</button>
    </div>
  )
}

export default Increment