import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-4">
                <a href="https://github.com/ManuelBlaze/ApiClima-React" target="_blank" rel="noopener noreferrer" className="brand-logo"> {titulo} </a>

            </div>
        </nav>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;