import React, { useRef, useState } from 'react'
import Table from './Table';

export default function Form() {
    const sports = [
        {
            name: 'Football',
            label: 'Bóng đá'
        },
        {
            name: 'Bida',
            label: 'Bida'
        },
        {
            name: 'Swimming',
            label: 'Bơi'
        },
    ];
    const [ formData, setFormData ] = useState({
        id: null,
        name: '',
        address: '',
        avatar: null,
        isMarried: false,
        gender: false,
        favorite: false,
    });

    const [users, setUsers] = useState([]);

    const inputRef = useRef('');
    const [searchData, setSearchData] = useState('');
    const handleGetValue = e => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleGetFile = e => {
        const { value, files } = e.target;
        files[0] && setFormData({
            ...formData,
            avatar: files[0]
        })
        value = '';
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
            avatar: null,
            isMarried: false,
            gender: false,
            favorite: false,
        });
    }

    const handleDelete = id => {
        const newUsers = users.filter(item => item.id !== id);
        setUsers(newUsers);
    }

    const handleUpdate = user => {
        setFormData(user);
    }

    const handleSearch = () => {
        const { value } = inputRef.current;
        setSearchData(value);
    }

  return (
    <>
        <div>
            <p className='my-6 text-center'>
                <input type='text'
                ref={ inputRef }
                className='border'
                placeholder='Search here...'
                />
                <button className='bg-violet-400 text-white px-4 py-1 rounded'
                onClick={ handleSearch }
                >
                    Search
                </button>
            </p>
            <p>
                Name:
                <input type='text'
                className='border'
                placeholder='Enter your name..'
                name='name' onChange={ handleGetValue }
                value={ formData.name }
                />
            </p>
            <p>
                Address:
                <input type='text'
                className='border'
                placeholder='Enter your address..'
                name='address' onChange={ handleGetValue }
                value={ formData.address }
                />
            </p>
            <p>
                Avatar:
                <input type='file'
                className='border'
                placeholder='Enter your address..'
                name='avatar'
                onChange={ handleGetFile }
                />
                { formData.avatar && <img src={ URL.createObjectURL(formData.avatar) } width={120}/> }
            </p>
            <p>
                Married:
                <input type='checkbox'
                name='isMarried'
                onChange={ handleGetValue }
                checked={ formData.isMarried }
                />
            </p>
            <p>
                Gender:
                <br/>
                <input type='radio'
                name='gender'
                onChange={ handleGetValue }
                value='Male'
                checked={ formData.gender === 'Male' }/> Male &nbsp;
                <input type='radio'
                name='gender'
                onChange={ handleGetValue }
                value='Female'
                checked={ formData.gender === 'Female' }/> Female
            </p>
            <p>
                Thể thao:
                <select name='favorite' className='border' onChange={ handleGetValue } value={ formData.favorite }>
                    <option selected>Favorite</option>
                    {sports.map((item,i) => (
                        <option key={i+1} value={item.label} >{ item.name }</option>
                    ))}
                </select>
            </p>
            <p>
                <button className='px-4 py-1 bg-green-400 text-white rounded'
                onClick={ handleSubmit }
                >
                    { formData.id ? "Update" : "Submit" }
                </button>
            </p>
        </div>
        <Table
        data={ users.filter(item => item.name.includes(searchData)) }
        handleDelete={ handleDelete }
        handleUpdate={ handleUpdate }
        />
    </>
  )
}
