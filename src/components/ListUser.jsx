import React, { useState } from 'react'
import Table from './Table';

export default function ListUser() {
    const [ formData, setFormData ] = useState(
        {
            id: null,
            name: '',
            address: '',
            date: '',
            conduct: ''
        }
    );
    const [ users, setUsers ] = useState([]);
    const handleFormData = e => {
        const { name, value } = e.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        );
    }

    const handleSubmit = () => {
        if(formData.id) {
            const newUser = users.map(item => item.id === formData.id ? formData : item);
            setUsers(newUser);
        }else {
            formData.id = Date.now();
            setUsers([...users, formData]);
        }
        setFormData({
            id: null,
            name: '',
            address: '',
            date: '',
            conduct: ''
        });
    }

    const handleDelete = id => {
        const newUsers = users.filter(item => item.id !== id);
        setUsers(newUsers);
    }

    const handleUpdate = user => {
        setFormData(user);
    }

    return (
        <>
            <div className='my-4'>
                <p>
                    <input type='text' placeholder='Enter your name' name='name'
                    className='border'
                    onChange={ handleFormData }
                    value={ formData.name }
                    />
                </p>
                <p>
                    <input type='text' placeholder='Enter your address' name='address'
                    className='border'
                    onChange={ handleFormData }
                    value={ formData.address }
                    />
                </p>
                <p>
                    <input type='date' name='date'
                    className='border'
                    onChange={ handleFormData }
                    value={ formData.date }
                    />
                </p>
                <p>
                    <select className='border' onChange={ handleFormData } value={ formData.conduct } name='conduct'>
                        <option>Học lực</option>
                        <option>Giỏi</option>
                        <option>Khá</option>
                        <option>Trung bình</option>
                    </select>
                </p>
                <p>
                    <button
                    className='btn px-4 py-2 bg-blue-400 text-white'
                    onClick={ handleSubmit }
                    >
                        { formData.id ? 'Sửa' : 'Thêm mới' }
                    </button>
                </p>
            </div>
            <Table data={ users }
            handleDelete={ handleDelete }
            handleUpdate={ handleUpdate }
            />
        </>
  )
}
