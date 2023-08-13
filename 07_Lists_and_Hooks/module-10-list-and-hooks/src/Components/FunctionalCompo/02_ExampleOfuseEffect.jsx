import React, { useState, useEffect } from 'react';

export default function ExampleOfuseEffect() {


    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <>
            <div>
                <div className="text-center">
                    <p>You clicked {count} times</p>
                    <button className='btn btn-primary mx-3' onClick={() => setCount(count + 1)}>Click Counter</button>
                    <button className='btn btn-danger mx-3' onClick={() => setCount(0)}>Reset Counter</button>
                </div>
            </div>
            <hr className='border border-dark border-2 opacity-100' />

            <h2 className='my-3'>The Syntax is :- </h2>
            <code className="text-dark">
                export default function ExampleOfuseEffect() &#123; <br />
                &nbsp; const [count, setCount] = useState(0); <br />
                &nbsp; useEffect(() =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp; document.title = `You clicked $&#123;count&#125; times`; <br />
                &nbsp; &#125;); <br />
                &nbsp; return ( <br />
                &nbsp;&nbsp;&nbsp; &lt;&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;div&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="text-center"&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;You clicked &#123;count&#125; times&lt;/p&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className='btn btn-primary mx-3' onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;Click Counter&lt;/button&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className='btn btn-danger mx-3' onClick=&#123;() =&gt; setCount(0)&#125;&gt;Reset Counter&lt;/button&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;hr className='border border-dark border-2 opacity-100' /&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;/&gt; <br />
                &nbsp; ); <br />
                &#125; <br />
            </code>

        </>
    );
}