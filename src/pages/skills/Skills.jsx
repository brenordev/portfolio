import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const mySkills = [
    { skillTech: 'Html', icon: <FaHtml5 /> },
    { skillTech: 'Css', icon: <FaCss3Alt /> },
    { skillTech: 'JavaScript', icon: <FaJsSquare /> },
    { skillTech: 'Scss/Sass', icon: <FaSass /> },
    { skillTech: 'React', icon: <FaReact /> },
    { skillTech: 'Git', icon: <FaGitAlt /> },
    { skillTech: 'GitHub', icon: <FaGithub /> },
    { skillTech: 'Figma', icon: <FaFigma /> }
]

export default function Skills() {
    return (

        <section className='skills' id='skills'>
            <div className='container'>
            <SectionTitle title={'Conhecimentos'} />
            <div className='skills__container'>
                {mySkills.map((skill, index) => {
                    return (
                    <div key={index} className='skill'>
                            {skill.icon}
                        <span className='skill__span'>{skill.skillTech}</span>
                    </div>
                    )
                })}
            </div>
            </div>
        </section>
    )
}