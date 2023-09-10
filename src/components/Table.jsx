import React from 'react'

export default function Table({ data, handleDelete }) {
    return (
        <>
            {
                data.length > 0 ?
                (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Options</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { data.map(item => (
                                    <tr key={ Math.random() }>
                                        <td>{ item.id }</td>
                                        <td>{ item.todoName }</td>
                                        <td>{ item.options }</td>
                                        <td>{ item.status }</td>
                                        <td>
                                            <button
                                            className='bg-red-500 text-white py-1 px-2 rounded'
                                            onClick={ () => handleDelete(item.id) }
                                            >
                                                Remove
                                            </button> &nbsp;
                                            <button
                                            className='bg-green-400 text-white py-1 px-2 rounded'
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </>
                )
                :
                (
                    <>
                        <div>Không có dữ liệu</div>
                    </>
                )
            }
        </>
    )
}
