import React from 'react';
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import { Link, useLocation } from 'react-router-dom';
import './Coins.css';

const Coins = (props) => {
    const location = useLocation();

    // Extract search query from the URL
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';

    // Filter coins based on the search query
    const filteredCoins = props.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-rname'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>    
                </div>


                {/* Render filtered coins */}
                {filteredCoins.length > 0 ? (
                    filteredCoins.map((coin) => (
                        <Link
                            to={`/coin/${coin.id}`}
                            element={<Coin />}
                            key={coin.id}
                        >
                            <CoinItem coins={coin} />
                        </Link>
                    ))
                ) : (
                    <p className='no-results'>No results found for "{searchQuery}"</p>
                )}
            </div>
        </div>
    );
};

export default Coins;
