import React from 'react';
import './CS_searchBox.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search' 
        type='serach' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)

