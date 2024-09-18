import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuOpen && menuRef.current && !menuRef.current.contains(event.target) && !menuIconRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <header className="cabecalho">
      <img
        className="cabecalho__logo logo__dupla"
        src={isDarkMode ? "/img/logo/logoDesktop2.svg" : "/img/logo/logoDesktop.svg"}
        alt="logo Ryan Lira"
      />
      <a href='#' className='cabecalho__logo-link'>
        <img
          className="cabecalho__logo logo__unica"
          src={isDarkMode ? "/img/logo/logoMobile2.svg" : "/img/logo/logoMobile.svg"}
          alt="logo Ryan Lira"
        />
      </a>

      {/* Menu Hamburger */}
      <motion.img
        ref={menuIconRef}
        className="menu__icon"
        src={menuOpen ? "/img/menu/closeMenu.svg" : "/img/menu/openMenu.svg"}
        alt="Menu"
        width="40px"
        onClick={toggleMenu}
        whileTap={{ scale: 0.8 }}
      />

      <nav ref={menuRef} className={`menu__nav ${menuOpen ? 'menu__nav--open' : ''}`}>
        <ul className="cabecalho__item">
          <li className="cabecalho__nav"><a href="#apresentacao" className="cabecalho__nav-link">Início</a></li>
          <li className="cabecalho__nav"><a href="#sobre" className="cabecalho__nav-link">Sobre</a></li>
          <li className="cabecalho__nav"><a href="#habilidades" className="cabecalho__nav-link">Habilidades</a></li>
          <li className="cabecalho__nav"><a href="#projetos" className="cabecalho__nav-link">Projetos</a></li>
          <div className="botao_light_nav">
            <motion.button 
              className="botao_light" 
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.8 }}
            >
              <motion.img
                src={isDarkMode ? "https://www.svgrepo.com/show/532889/sun.svg" : "https://www.svgrepo.com/show/532875/moon.svg"}
                alt={isDarkMode ? 'Sun' : 'Moon'}
                className="darkmode-icon"
                animate={{ rotate: isDarkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
