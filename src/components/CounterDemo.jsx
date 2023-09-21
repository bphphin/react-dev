import React from 'react'
import { useCounter } from '../context/CountContext';

export default function CounterDemo() {
    const [count, setCount] = useCounter();
    return (
        <>
            <div>CounterDemo: {count}</div>
            <button onClick={ () => setCount(count+1) }>Kick</button>
        </>
    )
}
