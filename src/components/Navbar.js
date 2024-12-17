import React, { useState } from 'react';
import { FaCoins } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [query, setQuery] = useState(''); // State to store search input
    const navigate = useNavigate(); // For navigation

    // Function to handle form submission
    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            // Redirect to homepage with query as parameter
            navigate(`/?search=${query}`);
        }
    };

    return (
        <div className='navbar-container'>
            <Link to='/'>
                <div className='navbar'>
                    <FaCoins className='icon' />
                    <h1>
                        My Crypto <span className='purple'>Search</span>
                    </h1>
                </div>
            </Link>
            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type='text'
                    placeholder='Search for a crypto coin...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='search-input'
                />
                <button type='submit' className='search-button'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default Navbar;
