import React from 'react';

class ExampleOfMounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "Red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "Blue" })
    }, 3000)
  }



  render() {
    return (
      <>
        <h1 className='my-5 text-center'>Example of "constructor" & "componentDidMount"</h1>
        <p className='text-center'>componentDidMount after <strong>"3-seconds"</strong></p>
        <h3 className='mb-5 text-center'>My Favorite Color is <span className='text-danger'>"{this.state.favoritecolor}"</span></h3>

        <hr className='border border-dark border-2 opacity-100' />


        <h2 className='my-3'>The Syntax is :- </h2>
        <code>
          class ExampleOfMounting extends React.Component &#123; <br />
          &nbsp; constructor(props) &#123; <br />
          &nbsp; super(props); <br />
          &nbsp; this.state = &#123; favoritecolor: "red" &#125;; <br />
          &#125; <br />

          componentDidMount() &#123; <br />
          &nbsp;&nbsp;setTimeout(() =&gt; &#123; <br />
          &nbsp;&nbsp;&nbsp;this.setState(&#123; favoritecolor: "Blue" &#125;) <br />
          &nbsp;&nbsp;&#125;, 3000) <br />
          &#125; <br />

          render() &#123; <br />
          &nbsp;&nbsp; return ( <br />
          &lt;&gt; <br />
          &nbsp;&nbsp;&nbsp; &lt;h1&gt;Example of Constructor&lt;/h1&gt; <br />
          &nbsp;&nbsp;&nbsp; &lt;h3&gt;My Favorite Color is &lt;span className='text-danger'&gt;"&#123;this.state.favoritecolor&#125;"&lt;/span&gt;&lt;/h3&gt; <br />
          &lt;/&gt; <br />
          &nbsp;&nbsp;&nbsp; ); <br />
          &nbsp;&nbsp; &#125; <br />
          &nbsp; &#125; <br />

          export default ExampleOfMounting;
        </code>
      </>
    );
  }
}

export default ExampleOfMounting;