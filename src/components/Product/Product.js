import React, { useRef } from 'react';

const Product = ({ id, title, handleEditProduct, handleDeleteProduct }) => {

    const refName = useRef();


    return <div className='product'>
        <ul>
            <li ref={refName}>{ title }</li>
            <li>
                <button type='button' onClick={() => handleEditProduct(id)}>Edit</button>
                <button type='button' onClick={() => handleDeleteProduct(id)}>Delete</button>
            </li>
        </ul>
    </div>;
};

export default Product;
