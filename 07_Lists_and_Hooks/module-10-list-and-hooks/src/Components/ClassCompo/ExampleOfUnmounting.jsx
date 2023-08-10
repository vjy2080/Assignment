import React, { Component } from 'react';
import Child from './childForUnmounting';

class ExampleOfUnmounting extends Component {

    state = {
        showChild: true,
    };

    handleDelete = () => {
        this.setState({ showChild: false });
    };

    render() {
        const { showChild } = this.state;

        return (
            <>
                {showChild && <Child />}
                <div className="text-center my-5">
                    <button className='btn btn-danger text-dark' type="button" onClick={this.handleDelete}>
                        Delete Header
                    </button>
                </div>


                <hr className='border border-dark border-2 opacity-100' />

                <h2 className='my-3'>The Syntax is :- </h2>
                <blockquote>
                    <p className='fs-4'>Syntax of parent</p>
                    class ExampleOfUnmounting extends Component &#123; <br />
                    &nbsp; state = &#123; <br />
                    &nbsp;&nbsp; showChild: true, <br />
                    &nbsp; &#125;; <br />
                    &nbsp; handleDelete = () =&gt; &#123; <br />
                    &nbsp;&nbsp; this.setState(&#123; showChild: false &#125;); <br />
                    &nbsp; &#125;; <br />
                    &nbsp; render() &#123; <br />
                    &nbsp;&nbsp; const &#123; showChild &#125; = this.state; <br />
                    &nbsp;&nbsp;&nbsp; return ( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &#123;showChild && &lt;Child /&gt;&#125; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="text-center my-5"&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;button className='btn btn-danger text-dark' type="button" onClick=&#123;this.handleDelete&#125;&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Delete Header <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/button&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;hr className='border border-dark border-2 opacity-100' /&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt; <br />
                    &nbsp; ); <br />
                    &nbsp; &#125; <br />
                    &#125; <br />

                    export default ExampleOfUnmounting;

                    <p className='fs-4 my-3'>Syntax of child</p>

                    class Child extends Component &#123; <br />
                    &nbsp; componentWillUnmount() &#123; <br />
                    &nbsp;&nbsp;&nbsp; alert('The component named Child is about to be unmounted.'); <br />
                    &nbsp; &#125; <br />
                    &nbsp; render() &#123; <br />
                    &nbsp;&nbsp;&nbsp; return &lt;h1 className='text-center'&gt;This header will unmount after clicking on button "DELETE HEADER"&lt;/h1&gt;; <br />
                    &nbsp; &#125; <br />
                    &#125; <br />
                    export default Child;

                </blockquote>
            </>
        );
    }
}



export default ExampleOfUnmounting;

