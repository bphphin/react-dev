import React from 'react'

export default function Form(props) {
    const { handleGetValue, handleSubmit, handleSearch, searchRef} = props;
  return (
    <>
        <div className='text-center'>
            <h3>Search</h3>
            <input type='text'
            ref={ searchRef }
            className='border'
            placeholder='Search here,,,' />
            <button
            className='bg-yellow-400 text-white py-1 px-2 rounded '
            onClick={ handleSearch }
            >
                Search
            </button>
        </div>
        <div className='my-5'>
            <h1 className='text-xl'>Thêm công việc</h1>
            <div>
                <input type='text'
                placeholder='Thêm công việc'
                className='border'
                name='todoName'
                onChange={ handleGetValue }
                />
            </div>
            <div>
                <select className='border' name='options' onChange={ handleGetValue } >
                    <option value='All' selected>All</option>
                    <option value='Todo' >Todo</option>
                    <option value='Done' >Done</option>
                </select>
            </div>
            <div>
                <input type='radio'
                name='status'
                value='All'
                onChange={ handleGetValue }
                /> All
                <input type='radio'
                name='status'
                value='Todo'
                onChange={ handleGetValue }
                /> Todo
                <input type='radio'
                name='status'
                value='Done'
                onChange={ handleGetValue }
                /> Done
            </div>
            <div>
                <button className='border bg-red-500 text-white px-3 py-1 rounded'
                onClick={ handleSubmit }
                >
                    Submit
                </button>
            </div>
        </div>
    </>
  )
}
