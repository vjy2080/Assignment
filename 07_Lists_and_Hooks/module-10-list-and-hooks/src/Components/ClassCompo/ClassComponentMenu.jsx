import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassComponentMenu extends Component {
    render() {
        return (
            <>
                <div className='my-5'>
                    <ol>
                        <li><Link className='text-dark' to="mounting">Example Of Mounting</Link></li>
                        <li><Link className='text-dark' to="updating">Example Of Updating</Link></li>
                        <li><Link className='text-dark' to="unmounting">Example Of Unmounting</Link></li>
                        <li><Link className='text-dark' to="error">Example Of Error Handling</Link></li>
                    </ol>
                </div>
                <hr className='border border-danger border-2' />
                <div>
                    <Outlet></Outlet>
                </div>
            </>
        );
    }
}

export default ClassComponentMenu;