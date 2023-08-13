import React, { useState, useEffect } from 'react';

export default function ExampleOfuseEffect() {


    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <div className="text-center">
                <p>You clicked {count} times</p>
                <button className='btn btn-primary mx-3' onClick={() => setCount(count + 1)}>Click Counter</button>
                <button className='btn btn-danger mx-3' onClick={() => setCount(0)}>Reset Counter</button>
            </div>
        </div>
    );
}