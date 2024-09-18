import React from 'react';
import './Projetos.css';
import { motion } from 'framer-motion';

const Projetos = () => {
  return (
    <motion.section
      className="projetos"
      id="projetos"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="projetos__titulo">Projetos</h3>
      </div>

      {/* PROJETO 1 */}
      <motion.div
        className='projetos__cards'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="projetos__itens"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="projetos_demo-img" src="/img/projetos/opusCheck.png" alt="Opus Check" />
          <h4 className="projetos__titulo-projeto">Opus Check</h4>
          <p className="projetos__descricao">Opus Check é um aplicativo de gerenciamento de tarefas desenvolvido com o objetivo de ajudar usuários a organizar e monitorar suas atividades diárias.</p>
          <p className="projetos__descricao-tech">Técnologias usadas:</p>
          <div className='projetos__tecnologias'>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/374146/typescript-official.svg" alt="TypeScript" />
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/354259/react.svg" alt="React" />
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/374067/scss2.svg" alt="SCSS" />
          </div>
          <div className="projetos__botoes">
            <motion.a href="https://opus-check.vercel.app" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >
              Ver Projeto
            </motion.a>
            <motion.a href="https://github.com/RyanLinconl/opusCheck" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >
              Ver Repositório
            </motion.a>
          </div>
        </motion.div>

        {/* PROJETO 2 */}
        <motion.div
          className="projetos__itens"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="projetos_demo-img" src="/img/projetos/rick.png" alt="imagem do site/projeto Rick and Morty API"></img>
          <h4 className="projetos__titulo-projeto">Rick and Morty API</h4>
          <p className="projetos__descricao">API do desenho animado Rick and Morty para exibir informações sobre os personagens. Para a implementação da API utilizei o Fetch e com a resposta transformei em json.</p>
          <p className="projetos__descricao-tech">Técnologias usadas.</p>
          <div className='projetos__tecnologias'>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/349419/javascript.svg" alt="logo JavaScript"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/354259/react.svg" alt="logo React"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="logo html5"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="logo css3"></img>
          </div>
          <div className="projetos__botoes">
            <motion.a href="https://ryan-rick-and-morty.vercel.app" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Projeto</motion.a>
            <motion.a href="https://github.com/RyanLinconl/Rick-and-Morty-Api" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Repositório</motion.a>
          </div>
        </motion.div>

        {/* PROJETO 2 */}
        <motion.div className="projetos__itens"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="projetos_demo-img" src="https://camo.githubusercontent.com/97642d148b5b76bbbed44befbfb10debacf026f7a5af7fd4f1947b1ae05c78aa/68747470733a2f2f746d2e6962786b2e636f6d2e62722f323032312f30342f31342f31343130323933313539373134372e6a70673f696d733d3132303078363735" alt="imagem do site/projeto Magazine Luiza Scraping"></img>
          <h4 className="projetos__titulo-projeto">Robô de Extração de Dados</h4>
          <p className="projetos__descricao">Este projeto consiste em um robô autônomo desenvolvido em Python, utilizando a biblioteca Selenium para realizar web scraping no site da Magazine Luiza.</p>
          <p className="projetos__descricao-tech">Técnologias usadas.</p>
          <div className='projetos__tecnologias'>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/374016/python.svg" alt="logo Python"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/473780/selenium.svg" alt="logo Selenium"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/473742/pandas.svg" alt="logo Pandas"></img>
          </div>
          <div className="projetos__botoes">
            <motion.a href="https://github.com/RyanLinconl/WebScraping" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Repositório</motion.a>
          </div>
        </motion.div>

        {/* PROJETO 4 */}
        <motion.div className="projetos__itens"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="projetos_demo-img" src="/img/projetos/youtube.png" alt="imagem do site/projeto Youtube Réplica"></img>
          <h4 className="projetos__titulo-projeto">Youtube Clone</h4>
          <p className="projetos__descricao">Este projeto é uma réplica simples do YouTube, com foco na utilização de uma API falsa e na integração do JavaScript com o projeto como um todo.</p>
          <p className="projetos__descricao-tech">Técnologias usadas.</p>
          <div className='projetos__tecnologias'>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/349419/javascript.svg" alt="logo JavaScript"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="logo html5"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="logo css3"></img>
          </div>
          <div className="projetos__botoes">
            <motion.a href="https://github.com/RyanLinconl/youtube-api" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Repositório</motion.a>
          </div>
        </motion.div>

        {/* PROJETO 5 */}
        <motion.div className="projetos__itens"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="projetos_demo-img" src="/img/projetos/mineProj.svg" alt="imagem do site/projeto minecraft best mods"></img>
          <h4 className="projetos__titulo-projeto">Minecraft Best Mods</h4>
          <p className="projetos__descricao">Um site responsivo focado em apresentar os melhores mods para Minecraft, utilizando a técnica MobileFirst para uma experiência otimizada em dispositivos móveis.</p>
          <p className="projetos__descricao-tech">Técnologias usadas.</p>
          <div className='projetos__tecnologias'>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="logo html5"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="logo css3"></img>
          </div>
          <div className="projetos__botoes">
            <motion.a href="https://minecraft-best-mods.vercel.app/" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Projeto</motion.a>
            <motion.a href="https://github.com/RyanLinconl/minecraft-best-mods" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Repositório</motion.a>
          </div>
        </motion.div>

        {/* PROJETO 6 */}
        <motion.div className="projetos__itens"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="projetos_demo-img" src="/img/projetos/aportuguesadoProj.svg" alt="imagem do site/projeto Aportuguesado"></img>
          <h4 className="projetos__titulo-projeto">Aportuguesado Landing Page</h4>
          <p className="projetos__descricao">A Landing Page do Aportuguesado é uma página simples para uma marca fictícia de cursos voltados para a língua portuguesa. Nela utilizei display Block e responsividade</p>
          <p className="projetos__descricao-tech">Técnologias usadas.</p>
          <div className='projetos__tecnologias'>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="logo html5"></img>
            <img className="projetos__tecnologias-img" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="logo css3"></img>
          </div>
          <div className="projetos__botoes">
            <motion.a href="https://aportuguesado-landing-page.vercel.app" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Projeto</motion.a>
            <motion.a href="https://github.com/RyanLinconl/aportuguesado-landing-page" target="_blank" className="projetos__botao-link"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--cor-terceira)' }}
              transition={{ duration: 0.2 }}
            >Ver Repositório</motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Projetos;