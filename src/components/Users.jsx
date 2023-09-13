import React, { useEffect, useState } from 'react'
import Search from './Search';
import Table from './Table';
import userAPI from '../api/user.api';
export default function Users() {

    const options = [
        { value: 'username', label: 'Username' },
        { value: 'email', label: 'Email' },
        { value: 'age', label: 'Age' },
        { value: 'gender', label: 'Gender' },
    ];

    const [listUsers, setListUsers] = useState({
        limit:0,
        skip:0,
        total: 0,
        users:[]
    });

    const [skipPage, setSkipPage] = useState(1);
    const [selectValue, setSelectValue] = useState('');
    const all = async () => {
        const { limit, skip, total, users } = (await userAPI.getAll(skipPage, selectValue)).data;
        setListUsers({
            ...listUsers,
            limit,
            skip,
            total,
            users
        });
    }

    const getSkip = skip => {
        setSkipPage(skip);
    }

    const handleGetValueSelect = e => {
        const value = e.map(item => item.value).join();
        setSelectValue(value);
    }

    useEffect(() => {
        all();
    }, [skipPage, selectValue]);
    return (
        <>
            <Search
                options={options}
                handleGetValueSelect={handleGetValueSelect}
            />
            <Table
                data={listUsers}
                getSkip={getSkip}
                skipPage={ skipPage }
            />
        </>
    )
}
