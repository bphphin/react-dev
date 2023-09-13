import React, { useEffect } from 'react'

export default function UseEffect() {
    // là 1 hook trong ReactJS, sử lý các vấn đề liên quan đến side effects
    // được thực thi sau mỗi lần component mounted
    // được thực thi it nhất 1 lần sau mỗi lần render , làn tiếp theo chỉ thay đổi
    // khi dependencies thay đổi
    useEffect(() => console.log(1));
    return (
        <div>useEffect</div>
    )
}
