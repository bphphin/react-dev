import React from 'react'
import { useAuth } from '../context/AuthContext';
import Avatar from './Avatar';

export default function Header() {
    const [infoLogin] = useAuth();
    return (
        <>
            <Avatar/>
            {infoLogin && infoLogin?.firstName}
        </>
    )
}
