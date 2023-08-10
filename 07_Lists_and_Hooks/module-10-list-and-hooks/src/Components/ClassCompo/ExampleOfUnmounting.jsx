import React, { Component } from 'react';

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
            <div>
                {showChild && <Child />}
                <button type="button" onClick={this.handleDelete}>
                    Delete Header
                </button>
            </div>
        );
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert('The component named Child is about to be unmounted.');
    }

    render() {
        return <h1>This header will unmount after clicking on button "Delete Header"</h1>;
    }
}

export default ExampleOfUnmounting;