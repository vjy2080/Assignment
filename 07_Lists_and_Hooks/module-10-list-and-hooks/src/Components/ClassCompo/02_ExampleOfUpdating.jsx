import React, { Component } from 'react';

class ExampleOfUpdating extends Component {
    constructor(props) {
        super(props);
        this.state = { favoriteFood: 'rice' };
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Only re-render if the favoriteFood state has changed
        return this.state.favoriteFood !== nextState.favoriteFood;
    }

    changeFood = () => {
        this.setState({ favoriteFood: 'Pizza' });
    }

    render() {
        return (
            <>
                <div>
                    <h1 className='my-5 text-center'>Example of "shouldComponentUpdate"</h1>
                    <p className='text-center'>shouldComponentUpdate after <strong>"click"</strong> on button</p>
                    <h3 className='my-5 text-center'>My Favorite Food is <span className='text-danger'>"{this.state.favoriteFood}"</span></h3>
                    <div className="text-center my-5">
                        <button className='btn btn-primary' type="button" onClick={this.changeFood}>Change food</button>
                    </div>
                    <hr className='border border-dark border-2 opacity-100' />

                    <h2 className='my-3'>The Syntax is :- </h2>
                    <code>
                        class ExampleOfUpdating extends Component &#123; <br />
                        &nbsp; constructor(props) &#123; <br />
                        &nbsp;&nbsp; super(props); <br />
                        &nbsp;&nbsp; this.state = &#123;favoriteFood: 'rice' &#125;; <br />
                        &nbsp; &#125; <br />
                        shouldComponentUpdate(nextProps, nextState) &#123; <br />
                        &nbsp; &#125; <br />
                        changeFood = () =&gt; &#123; <br />
                        &nbsp; this.setState(&#123; favoriteFood: 'Pizza' &#125;); <br />
                        &nbsp; &#125; <br />
                        render() &#123; <br />
                        &nbsp; return ( <br />
                        &nbsp; &lt;&gt; <br />
                        &nbsp;&nbsp; &lt;div&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;h1 className='my-5'&gt;Example of "shouldComponentUpdate"&lt;/h1&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;h3 className='my-5'&gt;My Favorite Food is "&#123;this.state.favoriteFood&#125;"&lt;/h3&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;button className='btn btn-primary' type="button" onClick=&#123;this.changeFood&#125;&gt;Change food&lt;/button&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;hr className='border border-dark border-2 opacity-100' /&gt; <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;h2 className='my-3'&gt;The Syntax is :- &lt;/h2&gt; <br />
                        &nbsp;&nbsp; &lt;/div&gt; <br />
                        &nbsp; &lt;/&gt; <br />
                        &nbsp;&nbsp;&nbsp; ); <br />
                        &nbsp;&nbsp; &#125; <br />
                        &nbsp; &#125; <br />

                        export default ExampleOfUpdating;
                    </code>
                </div>
            </>
        );
    }
}

export default ExampleOfUpdating;