import React, { useEffect } from 'react';

const Header = ({ state, dispatch }) => {

    useEffect(() => {

        const timeout = setTimeout(() => {
            dispatch({
                type: 'CLEAR_ALERT'
            });
        }, 3000)

        return () => {
            clearTimeout(timeout);
        }
    }, [state.isAlert]);
    
    return <div className='header'>
        { state.isAlert ? state.alertMessage : '' }
    </div>;
};

export default Header;
