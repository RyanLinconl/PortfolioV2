import React from 'react';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
import './assets/styles/reset.css';
import SkillsSection from './components/Skills';
import ScrollToTopButton from './components/Animations/Scroll';

function App() {
  return (
    <div>
      <Header />
      <main>
        <ScrollToTopButton />
        <Apresentacao />
        <Sobre />
        <SkillsSection />
        <Projetos />
      </main>
      <Footer />

    </div>
  );
}

export default App;