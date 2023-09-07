import React from 'react'

export default function Form({ data, setData }) {

    const handleFormData = e => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
        console.log(data);
    }
  return (
    <div className='my-4'>
        <p>
            <input type='text' placeholder='Enter your name' name='name'  className='border' onChange={ handleFormData }/>
        </p>
        <p>
            <input type='text' placeholder='Enter your address' name='address'  className='border' onChange={ handleFormData }/>
        </p>
        <p>
            <input type='date' name='date' className='border' onChange={ handleFormData }/>
        </p>
        <p>
            <select className='border' onChange={ handleFormData }>
                <option>Học lực</option>
                <option>Giỏi</option>
                <option>Khá</option>
                <option>Trung bình</option>
            </select>
        </p>
        <p>
            <button className='btn px-4 py-2 bg-blue-400 text-white'>Submit</button>
        </p>
    </div>
  )
}
