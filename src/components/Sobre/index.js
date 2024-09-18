import React from 'react';
import './Sobre.css';
import { motion } from 'framer-motion';

const Sobre = () => {
  return (
    <motion.section
      className="sobre"
      id="sobre"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }} // Atraso opcional para criar uma ordem entre as animações
      viewport={{ once: true }}
    >
      <h3 className="sobre__titulo">Sobre mim</h3>
      <div className='sobre__descricao'>
        <p className='sobre__descricao-texto'>Estou cursando <strong className="destaque_texto">Análise e Desenvolvimento de Sistemas</strong>, uma área que desperta meu entusiasmo desde sempre. E tenho aprofundado meus conhecimentos e habilidades em <strong className="destaque_texto">Front-end</strong>.</p>
        <p className='sobre__descricao-texto'>Além da minha paixão pela tecnologia, também sou um entusiasta da musculação, uma atividade que me ensinou valiosas lições de <strong className="destaque_texto">disciplina e foco</strong>. Outra paixão minha é jogar videogame, que me ajudou muito a desenvolver <strong className="destaque_texto">pensamentos estratégicos e criatividade</strong>.</p>
        <p className='sobre__descricao-texto'>Tenho um desejo constante de <strong className="destaque_texto">aprender coisas novas</strong> e aplicar esse conhecimento para <strong className="destaque_texto">criar, inovar e desenvolver</strong>. Atualmente, estou focado no estudo de <strong className="destaque_texto">responsividade na web</strong>, utilizando <strong className="destaque_texto">FlexBox</strong>, e também estou aprofundando meus conhecimentos no framework <strong className="destaque_texto">React</strong>.</p>
      </div>
    </motion.section>
  );
}

export default Sobre;