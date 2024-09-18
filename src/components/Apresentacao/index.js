import React from 'react';
import './Apresentacao.css';
import { motion } from 'framer-motion';

const socialLinks = [
  { id: 1, name: 'GitHub', url: 'https://github.com/RyanLinconl', icon: 'https://www.svgrepo.com/show/512317/github-142.svg' },
  { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ryan-linconl/', icon: 'https://www.svgrepo.com/show/521725/linkedin.svg' },
];

const Apresentacao = () => {
  return (
    <motion.section
      className="apresentacao"
      id="apresentacao"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="conteudo-apresentacao">
        <h1 className="apresentacao__titulo">Olá, eu sou o Ryan</h1>
        <h2 className="apresentacao__subtitulo">Desenvolvedor Front-end.</h2>
        <p className="apresentacao__descricao">
          Com especialidade em <strong className="destaque_texto">JavaScript, React, HTML e CSS</strong>.
          Aqui poderá ver meus projetos e evolução! Então fique de olho.
        </p>
        <div className="apresentacao_icones">
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={social.icon}
                alt={social.name}
                className="apresentacao__icones-img"
              />
            </motion.a>
          ))}
        </div>
      </div>
      <div>
        <motion.img 
        src='/img/fotos/ryanInicio.jpeg' 
        className='foto__inicio'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        ></motion.img>
      </div>
    </motion.section>
  );
}

export default Apresentacao;