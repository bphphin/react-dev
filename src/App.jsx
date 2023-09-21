import React from 'react'
import Form from './components/Form';
import Counter from './components/Counter';
import CounterDemo from './components/CounterDemo';
import { CounterProvider } from './context/CountContext';

export default function App() {
    return (
        <>
            <CounterProvider>
                <Counter/>
                <CounterDemo/>
            </CounterProvider>
        </>
    )
}
