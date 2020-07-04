import React from 'react'

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-4">
                <a href="https://github.com/ManuelBlaze/ApiClima-React" target="_blank" rel="noopener noreferrer" className="brand-logo"> {titulo} </a>

            </div>
        </nav>
    );
}

export default Header;