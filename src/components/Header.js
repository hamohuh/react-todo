import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div className='header'>
            <p className="header-name"><a href="index.html">ToDÔoÔ</a></p>
            <div className="s-media">
                <a href="https://www.github.com/hamohuh/"><i className="fa fa-github"></i></a>
                <a href="https://www.twitter.com/hamohuh/"><i className="fa fa-twitter"></i></a>
            </div>
        </div>
    )
}

export default Header;