import React from 'react'

export default function Table({ data, handleDelete, handleUpdate }) {
  return (
    <div>
        <>
            <table border={1} style={ { width:'100%' } }>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Married</th>
                        <th>City</th>
                        <th>Gender</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(item => (
                        <tr key={ item.id }>
                            <td>{ item.id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.address }</td>
                            <td>{ item.isMarried ? 'Married' : 'Single' }</td>
                            <td>{ item.city }</td>
                            <td>{ item.gender }</td>
                            <td>{ item.date }</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Remove</button>
                                <button onClick={ () => handleUpdate(item) }>Update</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    </div>
  )
}
