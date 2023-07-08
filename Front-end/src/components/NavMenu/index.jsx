import React, { useState } from 'react';
import './NavMenu.css'

const NavMenu = ({changeBody}) => {

    function handleClick({target:{value}}) {
        changeBody(value);
    }
    
    return (
        <nav className='nav'>
            <ul>
                <li value={1} onClick={handleClick}>Livros</li>
                <li value={2} onClick={handleClick}>Autores</li>
                <li value={3} onClick={handleClick}>Livros + Autores</li>
            </ul>
        </nav>
    );
}

export default NavMenu;
