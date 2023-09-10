import React, { useRef, useState } from 'react'
import Form from './Form';
import Table from './Table';

export default function Todo() {

    const [formData, setFormData] = useState({
        id: null,
        todoName: '',
        options: 'All',
        status: false,
    });

    const [todo, setTodo] = useState([]);

    const [searchData, setSearchData] = useState('');
    const searchRef = useRef(null);
    const handleGetValue = e => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleSubmit = () => {
        setTodo([...todo, {id: Date.now(),formData}])
    }

    const handleDelete = id => {
        setTodo(todo.filter(item => item.id !== id));
    }

    const handleSearch = () => {
        setSearchData(searchRef.current.value)
    }
    return (
        <>
            <Form
            handleGetValue={ handleGetValue }
            handleSubmit={ handleSubmit }
            handleSearch={ handleSearch }
            searchRef={ searchRef }
            />

            <Table
            data= { todo }
            handleDelete={ handleDelete }
            />
        </>
    )
}
