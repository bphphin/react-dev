import React, { useState } from 'react'

export default function () {
    const [formData , setFormData] = useState({
        username: '',
        password: '',
        address: '',
        isMarried: false,
        gender: '',
        avatar: null
    });
    const handleForm = e => {
        const { value, name, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleFile = e => {
        const { files } = e.target;
        files[0] && setFormData({ ...formData, avatar: files[0] })
    }
    console.log(formData);
  return (
    <>
        <div>
            <input type='text' placeholder='Enter your username' className='border my-2'  name="username" onChange={ handleForm }/>
        </div>
        <div>
            <input type='password' placeholder='Enter your password' className='border my-2'  name="password" onChange={ handleForm }/>
        </div>
        <div>
            <select className='border' name='address' onChange={ handleForm }>
                <option value="Hà Nội" >Hà Nội</option>
                <option value="Thành phố Hồ Chí Minh" >Thành phố Hồ Chí Minh</option>
                <option value="Ninh Bình" >Ninh Bình</option>
                <option value="Hà Nam" >Hà Nam</option>
            </select>
        </div>
        <div>
            <input  type='checkbox' name='isMarried' onChange={ handleForm }/>
        </div>
        <div>
            <input type='radio' name='gender' onChange={ handleForm } value='Nam'/> Nam
            <input type='radio' name='gender' onChange={ handleForm } value='Nữ'/> Nữ
        </div>
        <div>
            <input type='file' name='avatar' onChange={ handleFile }/>
        </div>
        <div className='my-2'>
           <button className='bg-yellow-400 text-white py-2 px-4'>Submit</button>
        </div>
    </>
  )
}
