import React, { Component } from 'react';


class Child extends Component {


    componentWillUnmount() {
        alert('The component named Child is about to be unmounted.');
    }

    render() {
        return <h1 className='text-center'>This header will unmount after clicking on button "DELETE HEADER"</h1>;
    }
}
export default Child;