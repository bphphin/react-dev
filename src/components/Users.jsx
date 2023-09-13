import React, { useEffect, useState } from 'react'
import Search from './Search';
import Table from './Table';
import userAPI from '../api/user.api';
export default function Users() {

    const [listUsers, setListUsers] = useState({
        limit:0,
        skip:0,
        total: 0,
        users:[]
    });

    const [skipPage, setSkipPage] = useState(0);

    const all = async () => {
        const { limit, skip, total, users } = (await userAPI.getAll(skipPage)).data;
        setListUsers({
            ...listUsers,
            limit,
            skip,
            total,
            users
        });
    }

    const getSkip = skip => {
        // setListUsers({
        //     ...listUsers,
        //     skip
        // });
        setSkipPage(skip);
    }

    useEffect(() => {
        all();
    }, [skipPage]);
    console.log(skipPage);
    return (
        <>
            <Search />
            <Table
                data={listUsers}
                getSkip={ getSkip }
            />
        </>
    )
}
