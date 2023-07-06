import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

export default function Skills() {
    return (

        <section className="skills" id="skills">
            <div className="container">
                <SectionTitle title={'Conhecimentos'} />
                <div className="skills__container">
                    <div className="skills__container--card">
                        <FaHtml5 className="skill__icon" />
                    </div>
                    <div className="skills__container--card">
                        <FaCss3Alt className="skill__icon" />

                    </div>
                    <div className="skills__container--card">
                        <FaJsSquare className="skill__icon" />

                    </div>
                    <div className="skills__container--card">
                        <FaReact className="skill__icon" />

                    </div>
                    <div className="skills__container--card">
                        <FaGitAlt className="skill__icon" />
                    </div>
                    <div className="skills__container--card">
                        <FaGithub className="skill__icon" />

                    </div>
                    <div className="skills__container--card">
                        <SiTailwindcss className="skill__icon" />

                    </div>

                </div>

            </div>
        </section>
    )
}