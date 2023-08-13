import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class FunctionalComponentMenu extends Component {
    render() {
        return (
            <>
                <div>
                    <ol>
                        <li><Link className='text-dark' to="useState">Example Of useState</Link></li>
                        <li><Link className='text-dark' to="useEffect">Example Of useEffect</Link></li>
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

export default FunctionalComponentMenu;