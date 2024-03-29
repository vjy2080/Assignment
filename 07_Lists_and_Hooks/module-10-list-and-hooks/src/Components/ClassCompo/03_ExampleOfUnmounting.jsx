import React, { Component } from 'react';
import Child from './03.1_childForUnmounting';

class ExampleOfUnmounting extends Component {

    state = {
        showChild: true,
        showMsg: false
    };

    handleDelete = () => {
        this.setState({
            showChild: false,
            showMsg: true
        });
    };



    render() {
        const { showChild, showMsg } = this.state;
        return (
            <>
                {showChild && <Child />}
                <div className="text-center my-5">
                    <div className='my-5'> {showMsg && <h3>Unmounted</h3>} </div>
                    <button className='btn btn-danger text-dark' type="button" onClick={this.handleDelete}>
                        Delete Header
                    </button>
                </div>


                <hr className='border border-dark border-2 opacity-100' />

                <h2 className='my-3'>The Syntax is :- </h2>
                <code className='text-dark'>
                    <p className='fs-4'>Syntax of parent</p>
                    class ExampleOfUnmounting extends Component &#123; <br />
                    &nbsp; state = &#123; <br />
                    &nbsp;&nbsp; showChild: true, <br />
                    &nbsp;&nbsp; showMsg: false <br />
                    &nbsp; &#125;; <br />
                    &nbsp; handleDelete = () =&gt; &#123; <br />
                    &nbsp;&nbsp; this.setState(&#123; showChild: false,showMsg: false &#125;); <br />
                    &nbsp; &#125;; <br />
                    &nbsp; render() &#123; <br />
                    &nbsp;&nbsp; const &#123; showChild, showMsg &#125; = this.state; <br />
                    &nbsp;&nbsp;&nbsp; return ( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &#123;showChild && &lt;Child /&gt;&#125; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className="text-center my-5"&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div className='my-5'&gt; &#123;showMsg && &lt;h3&gt;Unmounted&lt;/h3&gt;&#125; &lt;/div&gt; <br />
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
                    &nbsp;&nbsp;&nbsp; console.log('The component named Child is about to be unmounted.'); <br />
                    &nbsp; &#125; <br />
                    &nbsp; render() &#123; <br />
                    &nbsp;&nbsp;&nbsp; return &lt;h1 className='text-center'&gt;This header will unmount after clicking on button "DELETE HEADER"&lt;/h1&gt;; <br />
                    &nbsp; &#125; <br />
                    &#125; <br />
                    export default Child;

                </code>
            </>
        );
    }
}



export default ExampleOfUnmounting;

