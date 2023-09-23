import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/CounterRedux';
export default function Counter() {
    //useSelector la 1 hook trong redux giup lay du lieu tu store
    const count = useSelector(state => state.counter.count);

    // Khi muon cap nhat lai state thi su dung useDispatch
    // useDispatch se nhan 1 action
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <>
            <p>Counter: { count }</p>
            <button onClick={ handleIncrement }>Increment</button>
            <button onClick={ handleDecrement }>Decrement</button>
        </>
    )
}
