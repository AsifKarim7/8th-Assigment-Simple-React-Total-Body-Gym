import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div className='title'>
                <FontAwesomeIcon className='dumbbell' icon={faDumbbell} size="2x"></FontAwesomeIcon>
                <h1>TOTAL BODY GYM</h1>
            </div>
            <div>
                <a href="/memebership">Memebership</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;