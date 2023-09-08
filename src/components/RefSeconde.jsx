import React, { useEffect, useRef } from 'react'

export default function RefSeconde() {
    const divRef = useRef(null);
    useEffect(() => {
        if(divRef.current) {
            const htmlLink = divRef.current.querySelectorAll('a');
            console.log(htmlLink);
            htmlLink.forEach(item => {
                item.setAttribute('target', '_blank');
                item.className = 'underline text-2xl';
            });
        }
    });
    return (
        <div ref={ divRef }>
            <p>
                <a href='https://github.com/'>Git</a>
            </p>
            <p>
                <a href='https://google.com/'>Google</a>
            </p>
        </div>
    );
}
