import React from 'react'
import Paginate from './Paginate';

export default function Table(props) {
    const { data, getSkip, skipPage } = props;
    const paginate = [];

    for (let i = 1; i <= data.total / data.limit; i++) {
        paginate.push(i);
    }
    const handleSkip = skip => {
        getSkip(skip)
    }
    return (
        <>
            {
                data.users.length > 0 ?
                    <>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Age
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Gender
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Company
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { data.users.map(item => (
                                        <>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={ item.id }>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    { item.username }
                                                </th>
                                                <td className="px-6 py-4">
                                                    { item.email }
                                                </td>
                                                <td className="px-6 py-4">
                                                    { item.age }
                                                </td>
                                                <td className="px-6 py-4">
                                                    { item.gender }
                                                </td>
                                                <td className="px-6 py-4">
                                                    { item.company?.name }
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                    className='px-1 py-2 bg-red-500 text-white rounded'
                                                    >
                                                        Remove
                                                    </button> &nbsp;
                                                    <button
                                                    className='px-1 py-2 bg-blue-400 text-white rounded'
                                                    >
                                                        Detail
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                        <Paginate
                            paginate={ paginate }
                            handleSkip={ handleSkip }
                            skipPage={ skipPage }
                        />
                    </>
                    :
                    <>
                        <p className='text-center'>No Data</p>
                    </>
            }
        </>
    )
}
