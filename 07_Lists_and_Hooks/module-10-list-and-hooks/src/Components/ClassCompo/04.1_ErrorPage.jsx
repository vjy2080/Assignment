import React, { useState, useEffect } from 'react';

const ErrorPage = () => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (hasError) {
            // This is where you would log the error or perform any error tracking actions
            console.log('An error occurred!');
        }
    }, [hasError]);

    const throwError = () => {
        setHasError(true);
    };

    const clearError = () => {
        setHasError(false);
    };

    return (
        <div className='text-center'>
            <h3>Example of Error Handling</h3>
            {hasError ? (
                <div>
                    <p>An error occurred!</p>
                    <button className='btn btn-danger' onClick={clearError}>Clear Error</button>
                </div>
            ) : (
                <div>
                    <p>No errors</p>
                    <button className='btn btn-success' onClick={throwError}>Throw Error</button>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;
