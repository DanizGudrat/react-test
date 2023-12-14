import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, incrementByAmount } from './redux/counterSlice'
const Count = () => {
    const num = useSelector(state => state.counter.value);
    const dispacth = useDispatch()
    return (
        <div>
            {num}
            <br />
            {/* <button onClick={()=>dispacth(increment())}>artir</button>
            <button onClick={()=>dispacth(decrement())}>azalt</button>
            <button onClick={()=>dispacth(incrementByAmount(5))}>by amount</button> */}
        </div>
    )
}

export default Count