import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Login</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/expenses" className='nav-link'>Expense</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/posts" className='nav-link'>Posts</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/users" className='nav-link'>Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;