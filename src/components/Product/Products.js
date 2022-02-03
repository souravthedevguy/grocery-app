import React from 'react';
import Product from './Product';

const Products = ({ state, dispatch }) => { 
  
    const handleEditProduct = (id) => {

       console.log(state.products.filter(product => product.id === id));

       dispatch({
           type: 'EDIT_PRODUCT',
           payload: state.products.find(
               product => product.id === id
            )
       });
    }


    const handleDeleteProduct = (id) => {

       console.log(id);

        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id
        });
    }
  
    return <div className='products'>
        { state.products.map( product => <Product 
        key={product.id} 
        {...product}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}/> ) }
    </div>;
};

export default Products;
