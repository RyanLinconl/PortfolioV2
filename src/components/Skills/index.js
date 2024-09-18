import React from 'react';
import { motion } from 'framer-motion';
import './skillsSection.css';

const skills = [
  { name: 'JavaScript', level: 78, logo: 'https://www.svgrepo.com/show/349419/javascript.svg' },
  { name: 'React', level: 65, logo: 'https://www.svgrepo.com/show/354259/react.svg' },
  { name: 'HTML', level: 90, logo: 'https://www.svgrepo.com/show/452228/html-5.svg' },
  { name: 'CSS', level: 82, logo: 'https://www.svgrepo.com/show/452185/css-3.svg' },
  { name: 'PYTHON', level: 25, logo: 'https://www.svgrepo.com/show/374016/python.svg' }
];

const SkillsSection = () => {
  return (
    <motion.section
      className="skills-section"
      id='habilidades'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={skill.logo}
              alt={`${skill.name} logo`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="skill-logo"
            />
            <h3 className="skill-name">{skill.name}</h3>
            <motion.div
              className="skill-bar"
              initial={{ width: '0%' }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;