import React from 'react'
import Select from 'react-select';

export default function Search() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    return (
        <>
            <Select options={options} isMulti />
            <div className='text-center my-5'>
                <input
                    type='text'
                    placeholder='Search here...'
                    className='border'
                />
                <button
                    className='bg-gray-500 px-[8px] py-[5px] rounded text-white'
                >
                    Search
                </button>
            </div>
        </>
    )
}
