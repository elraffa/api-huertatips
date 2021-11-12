import React from 'react';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header>
      <div className='logo-area'>
        <img src={logo} alt='logo' />
      </div>
      <div className='header-text'>
        <h1>
          Calendario de <span className='bold'>siembra</span>
        </h1>
        <h3>
          Una app para saber <span className='bold'>qué sembrar</span> en cada
          momento del año
        </h3>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <a href='index.html'>Inicio</a>
          </li>
          <li>
            <a href='!#'>Acerca de</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
