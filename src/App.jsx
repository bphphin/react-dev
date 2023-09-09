import React, { useState } from 'react'
import Gift from './components/Gift';

export default function App() {
    const gifts = [
        'Iphone 11',
        'Iphone 12',
        'Iphone 13',
    ];
    const [gift, setGift] = useState(null);

    const handleGift = () => {
        setGift(gifts[Math.floor(Math.random() * gifts.length)]);
    }
    return (
        <>
            <p>{ gift || 'Chưa có phần thưởng' }</p>
            <button onClick={ handleGift } className='bg-red-500 text-white py-2 px-1 rounded '>Lấy thưởng</button>
        </>
    );
}

