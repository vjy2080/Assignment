import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassComponentMenu extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><Link className='text-white' to="mounting">Example Of Mounting</Link></li>
                    <li><Link className='text-white' to="mounting">Example Of Mounting</Link></li>
                    <li><Link className='text-white' to="mounting">Example Of Mounting</Link></li>
                    <li><Link className='text-white' to="mounting">Example Of Mounting</Link></li>
                    <li><Link className='text-white' to="mounting">Example Of Mounting</Link></li>
                </ol>
                <Outlet></Outlet>
            </div>
        );
    }
}

export default ClassComponentMenu;