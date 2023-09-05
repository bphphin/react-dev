import React from 'react'

export default function Product({ img, title, desc, discount }) {
  return (
    <>
        <div className='grid grid-cols-3'>
            <div className='w-[300px]'>
                <img src={ img } alt={ title }/>
                <h2>{ title }</h2>
                <p>{ desc }</p>
                <p>{ discount ? 'Giảm giá 30%' : '' }</p>
            </div>
        </div>
    </>
  )
}
