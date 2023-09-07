import React, { useState } from 'react'
import Form from './Form';
import Table from './Table';

export default function ListUser() {

    const [ formData, setFormData ] = useState({
        id: null,
        name: '',
        address: '',
        gender: false,
        isMarried: false,
        date: '',
    });

    const [ users, setUsers ] = useState([]);

    const handleGetValueForm = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
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
            isMarried: false,
            gender: false,
            date: '',
        });
    }

    const handleDelete = id => {
        const confirm = window.confirm(`Bạn có muốn xóa không ??`);
        if(confirm) {
            const newUser = users.filter(item => item.id !== id);
            setUsers(newUser);
        }
    }

    const handleUpdate = user => {
        setFormData(user);
    }
  return (
    <>
        <Form
        formData={ formData }
        handleGetValueForm= { handleGetValueForm }
        handleSubmit={ handleSubmit }
        />
        <Table
        data={ users }
        handleDelete={ handleDelete }
        handleUpdate={ handleUpdate }
        />
    </>
  )
}
