import React from "react";

export default function Table({ data, handleDelete, handleUpdate }) {
    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Address</th>
                            <th scope="col" className="px-6 py-3">Học Lực</th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map(item => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={ item.id }
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                { item.id }
                            </th>
                            <td className="px-6 py-4">{ item.name }</td>
                            <td className="px-6 py-4">{ item.date }</td>
                            <td className="px-6 py-4">{ item.address }</td>
                            <td className="px-6 py-4">{ item.conduct }</td>
                            <td className="px-6 py-4">
                                <button className="bg-red-500 py-2 px-4 text-white rounded" onClick={ () => handleDelete(item.id) } >Remove</button> &nbsp;
                                <button className="bg-yellow-500 py-2 px-4 text-white rounded" onClick={ () => handleUpdate(item) } >Update</button>
                            </td>
                        </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </>
    );
}
