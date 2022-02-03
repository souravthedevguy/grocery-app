export const reducer = ( state, action ) => {

    console.log(action);

    if ( action.type === 'ADD_PRODUCT' ) {

        const newProduct      = [...state.products, action.payload];

        return {
            ...state,
            products: newProduct,
            isAlert: true,
            alertMessage: "New product added!"
        }

    } else if ( action.type === 'UPDATE_PRODUCT' ) {


        const updatedProduct      = state.products.map( product => {

            if ( product.id === action.payload.id ) {
                
                product.title = action.payload.title;
            }

            return product;
        } )

        return { 
            ...state,
            products: updatedProduct,
            isAlert: true,
            alertMessage: "Product Updated!",
            editProduct: {}
        }           

    } else if ( action.type === 'DELETE_PRODUCT' ) {

        const newProducts = state.products.filter(
            product => product.id !== action.payload
        );

        return {
            ...state,
            products: newProducts,
            isAlert: true,
            alertMessage: "Product deleted!"
        }
    } else if ( action.type === 'CLEAR_ALERT' ) {

        return {
            ...state,
            isAlert: false,
            alertMessage: ""
        }
    } else if ( action.type === 'EDIT_PRODUCT' ) {

        return {
            ...state,
            editProduct: action.payload
        }
    }
}