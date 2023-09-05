import React, { useState } from 'react'

export default function DemoState() {
    // State là trạng thái và dữ liệu của 1 components và do components quản lý
    // State có thể thay đổi theo time
    // State được thay đổi thông qua Fn setState , mỗi khi state thay đổi React sẽ tự cập nhật lại UI


    // const state = useState();
    // console.log(state);
    // State là 1 mảng gồm 2 phần tử
    // 1: là giá trị mặc định, có thể nhận tất cả các kiểu dữ liệu
    // 2: là 1 Fn để cập nhật lại giá trị ban đầu
    // *** useState là async function
    const [name, setName] = useState('Bùi Ngọc Phi');
    const [count, setCount] = useState(0);
    // const handleIncrease = () => {
    //     setCount(count+1)
    // }
    // const handleDecrease = () => {
    //     setCount(count-1)
    // }

    // Bài tập
    const [ flag, setFlag ] = useState(true);
    // console.log(flag);
    const handleDisplay = () => {
        setFlag(!flag)
    }
    return (
        <>
            {/* <p>{ name }</p>
            <p>{ count }</p>
            <button onClick={ () => setCount(count + 1) }>Increase</button>
            <button onClick={ () => setCount(count - 1) }>Decrease</button>
            <button onClick={ () => setName('Bùi Văn Phi') }>Đổi tên</button> */}
            <div>
                { flag && 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officiis dolore possimus tempora culpa reiciendis nobis unde, tenetur esse quos qui magnam, ab architecto fuga dolor illum sed aliquam quae!' }
            </div>
            <button className='py-2 px-4 bg-red-400 text-white my-2' onClick={ handleDisplay }>
                { flag ? 'Hide' : 'Show' }
            </button>
        </>
    )
}
