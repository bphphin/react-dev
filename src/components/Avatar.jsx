import React from 'react'
import { useAuth } from '../context/AuthContext';

export default function Avatar() {
    const [info] = useAuth();
    return (
        <>
            { info && <img src={ info?.image } /> }
        </>
    )
}
