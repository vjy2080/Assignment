import React from 'react';
import ErrorPage from './04.1_ErrorPage';

export default function App() {
    return (
        <>
            <div className="row">
                <main className="App-main">
                    <ErrorPage />
                </main>
            </div>
            <hr className='border border-dark border-2 opacity-100' />

            <h2 className='my-3'>The Syntax is :- </h2>
            <code className='text-dark'>
                <p className='fs-4'>Syntax of parent</p>
                export default function App() &#123; <br />
                &nbsp;&nbsp;&nbsp; return ( <br />
                &nbsp;&nbsp; &lt;&gt; <br />
                &nbsp;&nbsp; &lt;div className="row"&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; &lt;main className="App-main"&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ErrorPage /&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp; &lt;/main&gt; <br />
                &nbsp;&nbsp; &lt;/div&gt; <br />
                &nbsp;&nbsp; ); <br />
                &#125;

                <p className='fs-4 my-3'>Syntax of child</p>
                &nbsp; const ErrorPage = () =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const [hasError, setHasError] = useState(false); <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; useEffect(() =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if (hasError) &#123; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; console.log('An error occurred!'); <br />
                &nbsp;&nbsp;&nbsp; &#125; <br />
                &nbsp; &#125;, [hasError]); <br />
                &nbsp; const throwError = () =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp; setHasError(true); <br />
                &nbsp;&nbsp;&nbsp; &#125;; <br />
                &nbsp; const clearError = () =&gt; &#123; <br />
                &nbsp;&nbsp;&nbsp; setHasError(false); <br />
                &nbsp;&nbsp;&nbsp; &#125;; <br />
                &nbsp; return ( <br />
                &nbsp;&nbsp;&nbsp; &lt;div className='text-center'&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h3&gt;Example of Error Handling&lt;/h3&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123;hasError ? ( <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;An error occurred!&lt;/p&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className='btn btn-danger' onClick=&#123;clearError&#125;&gt;Clear Error&lt;/&nbsp; button&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) : ( <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;No errors&lt;/p&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className='btn btn-success' onClick=&#123;throwError&#125;&gt;Throw Error&lt;/&nbsp; button&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )&#125; <br />
                &nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                &nbsp;&nbsp; ); <br />
                &nbsp; &#125;; <br />

                export default ErrorPage;
            </code>
        </>
    );
}

