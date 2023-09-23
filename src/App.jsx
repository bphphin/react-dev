import React, { useState } from 'react'
import Counter from './components/Counter';
import { useSelector } from 'react-redux';

export default function App() {
    const count = useSelector(state => state.counter.count);
    return (
        <>
            This is counter side App: { count }
            <Counter />
        </>
    )
}
