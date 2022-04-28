import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/expense">Expense</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    )
}

export default Header;