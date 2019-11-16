import React from 'react';
import './searchBox.styles.css';

export const SearchBox=({placeholder,func})=>(
    <input className='search' type='search' placeholder={placeholder}
          onChange={func}
        />
)
