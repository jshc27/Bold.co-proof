import React, { Fragment } from 'react';
import logo from '../../assets/img/logo.jpeg';
import Icon from '../../assets/img/pregunta.png';
import './Header.css';

const Header = () =>{

    return (
        <Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <nav className="Nav-header">
                    <ul>
                        <li>
                            <a href="/">Mi negocio</a>
                        </li>
                        <li className="Nav-ayuda">
                            <a href="/">Ayuda</a>
                            <img className="icon" src={Icon} alt="Icon-pregunta" />
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
);
}

export default Header;