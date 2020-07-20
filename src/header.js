import React from 'react';
import LinkWrapper from './linkWrapper';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #000000 black">
                <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Casa do Código</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
                    <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
                    <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;