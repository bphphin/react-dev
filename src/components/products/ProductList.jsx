import React, { useEffect, useState } from 'react'
import productApi from '../../api/productApi';
export default function ProductList() {

    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const all = async() => {
        const { data } = await productApi.getAll();
        setProducts(data);
    }

    const handleClick = async id => {
        const { data } = await productApi.get(id);
        setProductDetails(data);
    }
    useEffect(() => {
        all();
    },[]);
    return (
        <>
            Name: { productDetails.name }
            <div className='grid grid-cols-4 w-full space-x-4'>
                { products.map(item => (
                    <>
                    <div className='cursor-pointer' key={ item.id }
                    onClick={ () => handleClick(item.id) }
                    >
                        <h3 className='text-lg'>Name: { item.name }</h3>
                    </div>
                    </>
                )) }
            </div>
        </>
    )
}
