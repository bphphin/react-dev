import React from 'react'

export default function Form({ handleGetValueForm, handleSubmit, formData }) {
    console.log(formData);
  return (
    <>
        <div>
            <p>
                <input type='text' name='name'
                placeholder='Enter your name..'
                onChange={ handleGetValueForm }
                value={ formData.name || '' }/>
            </p>
            <p>
                <input type='text' name='address'
                placeholder='Enter your address..'
                onChange={ handleGetValueForm }
                value={ formData.address || '' }/>
            </p>
            <p>
                <input type='checkbox'
                name='isMarried'
                onChange={ handleGetValueForm }
                checked={ formData.isMarried || false }
                /> Married
            </p>
            <p>
                <span>City</span>
                <select name='city' onChange={ handleGetValueForm } value={ formData.city || '' }>
                    <option>Hà Nội</option>
                    <option>Ninh Bình</option>
                    <option>Thái Bình</option>
                </select>
            </p>
            <p>
                <input type='radio' name='gender' value='Nam' onChange={ handleGetValueForm } checked={ formData.gender || false }/> Nam
                <input type='radio' name='gender' value='Nữ' onChange={ handleGetValueForm } checked={ formData.gender || false }/> Nữ
            </p>
            <p>
                <input type='date' name='date' onChange={ handleGetValueForm }
                value={ formData.date || '' }
                />
            </p>
            <p>
                <button onClick={ handleSubmit }>{ formData.id ? 'Update' : 'Submit' }</button>
            </p>
        </div>
    </>
  )
}
