import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 25; // Define o número de passos para rolar
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Defina o tempo de cada intervalo (15ms para suavidade)
  };
  

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.div
      className="scroll-to-top"
      onClick={scrollToTop}
      animate={{ opacity: isVisible ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <img src="https://www.svgrepo.com/show/521975/arrow-top.svg" alt="Scroll to Top" />
    </motion.div>
  );
};

export default ScrollToTopButton;