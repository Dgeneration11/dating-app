import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            {/* <h2> I am the Header</h2> */}
            <IconButton>
                <PersonIcon fontSize="large" className='headerIcon' />
            </IconButton>

            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG2.png"
                alt=""
            />
            <IconButton>
                <ForumIcon fontSize="large" className='headerIcon' />
            </IconButton>

        </div>
    )
}

export default Header
