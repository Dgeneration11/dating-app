import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'

function Header() {
    return (
        <div className='header'>
            <h2> I am the Header</h2>
            <PersonIcon fontSize="large" className='personIcon' />
        </div>
    )
}

export default Header
