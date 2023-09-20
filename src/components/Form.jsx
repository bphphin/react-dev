import React from 'react'
import useHandleValue from '../hooks/useHandleValue'

export default function Form() {

    const { formData, handleValue } = useHandleValue({
        name: '',
        password: '',
    });
    console.log(formData);
    return (
        <>
            <div>
                <p>
                    <input type='text' placeholder='Enter your name' name='name' onChange={ handleValue }/>
                </p>
                <p>
                    <input type='password' placeholder='Enter your password' name='password' onChange={ handleValue } />
                </p>
            </div>
        </>
    )
}
