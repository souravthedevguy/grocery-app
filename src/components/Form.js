import React, { useEffect, useRef } from 'react';

const Form = ({ state, dispatch, productAdded }) => {

    const refTitle = useRef();

    const product = state.editProduct;  

    useEffect(() => {
         
        refTitle.current.value = (typeof product.title !== "undefined") 
        ? product.title : ""

    }, [state.editProduct.title]);

    const handleSubmit = (e) => { 

        e.preventDefault();

        const product = {

            id: ( typeof state.editProduct.id !== "undefined" )
            ? state.editProduct.id 
            : new Date().getTime().toString(),

            title: refTitle.current.value
        }

        if ( typeof state.editProduct.id !== "undefined" ) {
            dispatch({
                type: 'UPDATE_PRODUCT',
                payload: product
            });
        } else {
            dispatch({
                type: 'ADD_PRODUCT',
                payload: product
            });
        }

        refTitle.current.value = "";

        productAdded(product);
    }

    return <div className='form'>
        <h1>Grocery Bud</h1>
        <form role="form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='title'
            id='title'
            ref={refTitle}/>
            <button type='submit'>Submit</button>
        </form>
    </div>;
};

export default Form;
