import React, { useEffect, useRef, useState } from 'react'

export default function Ref() {
    // Là 1 hàm trả về đối tượng và có thể thay đổi được
    // hàm này có thuộc tính { .current } được khởi tạo bởi giá trị ban đầu (initial value)

    // Cú pháp:
    // const inputRef = useRef();

    // So sánh useRef và useState khác nhau gì (PV)
    //+ những task làm việc vệc với DOM thì sử dụng useRef
    //+ khi sử dụng state giá trị thay đổi thì components sẽ được render lại
    //+ khi sử dụng ref giá trị thay đổi thì components sẽ không được render lại
    //+ useRef là đồng bộ => khi ref thay đổi thì components không thay đổi
    //+ useRef là bất đồng bộ => khi state thay đổi thì components render lại

    // const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current && console.log(inputRef.current);
    // },[]);
    const linkRef = useRef(null);
    useEffect(() => {
        linkRef.current.href = 'https://www.google.com/';
        linkRef.current.target = '_blank';

        console.dir(linkRef);
        linkRef.current && console.log(linkRef.current.href);
    });
    return (
        <div>
            {/* <p>{ inputRef.current }</p>
            <input type='text' ref={ inputRef } className='border' value={'123'}/> */}
            <a href='https://github.com/' ref={linkRef} >Git</a> &nbsp;
            <a href='https://www.google.com/' target='_blank'>Google</a>
        </div>
  )
}
