import { start } from '@popperjs/core';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Navigation from './Navigation.js';


function Header() {
    return (
        <div id="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 logo_outer col-sm-12">
                        <Link to="/"><img src={logo}  alt="logo"/></Link>
                    </div>
                    <div className="col-md-8 menu_outer col-sm-12">
                         <Navigation/>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end header_button_outer col-sm-12">
                        <div className="right_button"><a href="#">Login</a></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header
