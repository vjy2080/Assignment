import React from 'react';
import Loader from '../Images/Loader.gif'

const LoaderCompo = () => {
    return (
        <div className='w-100 d-flex justify-content-center'>
            <img className='' src={Loader} alt="" />
        </div>
    );
};

export default LoaderCompo;