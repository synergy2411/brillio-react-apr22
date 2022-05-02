import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/login" className='nav-link'>Login</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/expenses" className='nav-link'>Expense</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/posts" className='nav-link'>Posts</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/users" className='nav-link'>Users</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/courses" className='nav-link'>Courses</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/todos" className='nav-link'>Todos</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink activeClassName='active' to="/graphql-todo" className='nav-link'>GraphQL Todos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;