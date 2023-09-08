import React from 'react'

export default function (props) {
    const { data, handleDelete, handleUpdate } = props;
  return (
    <>
        <div className='mt-4'>
            <table border='1px' width={'100%'}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Avatar</th>
                        <th>Gender</th>
                        <th>Married</th>
                        <th>Favorite</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(item => (
                        <tr key={ item.id }>
                            <td>{ item.id }</td>
                            <td>{ item.name }</td>
                            <td>{ item.address }</td>
                            <td>
                                { item.avatar && <img src={ URL.createObjectURL( item.avatar ) } width={120}/> }
                            </td>
                            <td>{ item.gender }</td>
                            <td>{ item.isMarried ? 'Married' : 'Single' }</td>
                            <td>{ item.favorite }</td>
                            <td>
                                <button className='py-2 px-4 bg-red-400 text-white rounded'
                                onClick={ () => handleDelete(item.id) }
                                >
                                    Remove
                                </button> &nbsp;
                                <button className='py-2 px-4 bg-yellow-400 text-white rounded'
                                onClick={ () => handleUpdate(item) }
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    </>
  )
}
