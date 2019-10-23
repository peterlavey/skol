import React from 'react';
import logo from "./logo.svg";

export const Header = ()=> {
    return (
        <header>
            <nav className={'navbar sticky-top navbar-dark bg-dark'}>
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    Skol
                </a>
            </nav>
        </header>
    );
};

export default Header;