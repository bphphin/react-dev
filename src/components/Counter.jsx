import React from 'react'
import { useCounter } from '../context/CountContext';

export default function Counter() {
    const [count] = useCounter();
  return (
    <div>Counter: { count }</div>
  )
}
