import React, { useState } from "react";

function ExampleOfuseState() {
    const [count, setRandomCount] =
        useState(function generateRandomInteger() {
            return Math.floor(Math.random() * 1000000);
        });
    function clickHandler() {
        setRandomCount(Math.floor(Math.random() * 1000000));
    }
    return (
        <>
            <div className="text-center">
                <h1> {count} </h1>
                <p> Click below button to generate random number </p>
                <button className="btn btn-primary" onClick={clickHandler}> Click Here</button>
            </div>
            <hr className='border border-dark border-2 opacity-100' />

            <h2 className='my-3'>The Syntax is :- </h2>

            <code className="text-dark">
                function ExampleOfuseState() &#123; <br />
                &nbsp; const [count, setRandomCount] = <br />
                &nbsp;&nbsp;&nbsp; useState(function generateRandomInteger() &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; return Math.floor(Math.random() * 1000000); <br />
                &nbsp; &#125;); <br />
                &nbsp; function clickHandler() &#123; <br />
                &nbsp;&nbsp;&nbsp; setRandomCount(Math.floor(Math.random() * 1000000)); <br />
                &nbsp; &#125; <br />
                &nbsp; return ( <br />
                &nbsp;&nbsp;&nbsp; &lt;div className="text-center"&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;h1&gt; &#123;count&#125; &lt;/h1&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;p&gt; Click below button to generate random number &lt;/p&gt; <br />
                &nbsp;&nbsp;&nbsp; &lt;button className="btn btn-primary" onClick=&#123;clickHandler&#125;&gt; Click Here&lt;/button&gt; <br />
                &nbsp; ); <br />
                &#125; <br />
                export default ExampleOfuseState;
            </code >
        </>
    );
}

export default ExampleOfuseState;