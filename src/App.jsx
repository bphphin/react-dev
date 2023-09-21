import React from 'react'
import Form from './components/Form';
import Counter from './components/Counter';
import CounterDemo from './components/CounterDemo';
import { CounterProvider } from './context/CountContext';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Header from './components/Header';

export default function App() {
    return (
        <>
            {/* <CounterProvider>
                <Counter/>
                <CounterDemo/>
            </CounterProvider> */}

            <AuthProvider>
                <Header/>
                <Login/>
            </AuthProvider>
        </>
    )
}
