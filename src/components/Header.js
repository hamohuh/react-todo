import React from 'react';
import './Header.css'
import { Col, Row } from 'react-bootstrap';

function Header(props) {
    return (
        <Row className='header'>
            <Col>
                <p className="header-name"><a href="index.html">ToDÔoÔ</a></p>
            </Col>
            <Col className="s-media">
                <a href="https://www.github.com/hamohuh/"><i className="fa fa-github"></i></a>
                <a href="https://www.twitter.com/hamohuh/"><i className="fa fa-twitter"></i></a>
            </Col>
        </Row>
    )
}

export default Header;