import React from 'react'

export default function Form({ handleFormData, handleSubmit, formData }) {

  return (
    <div className='my-4'>
        <p>
            <input type='text'
            placeholder='Enter your name'
            name='name'
            className='border'
            onChange={ handleFormData }
            value={ formData.name }
            />
        </p>
        <p>
            <input type='text'
            placeholder='Enter your address'
            name='address'
            className='border'
            onChange={ handleFormData }
            value={ formData.address }
            />
        </p>
        <p>
            <input type='date'
            name='date'
            className='border'
            onChange={ handleFormData }
            value={ formData.date }
            />
        </p>
        <p>
            <select className='border' onChange={ handleFormData } value={ formData.conduct } name='conduct'>
                <option>Học lực</option>
                <option>Giỏi</option>
                <option>Khá</option>
                <option>Trung bình</option>
            </select>
        </p>
        <p>
            <button className='btn px-4 py-2 bg-blue-400 text-white' onClick={ handleSubmit }>{ formData.id ? 'Update' : 'Submit' }</button>
        </p>
    </div>
  )
}
