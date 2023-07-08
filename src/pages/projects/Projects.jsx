import React from "react"
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import projects from "../../data/projects"
import {FaGithub, FaLink} from 'react-icons/fa'
import image from '../../images/projects/weatherapp.png'

export default function Projects() {
    return (
        <section className="section-projects" id="projects">
                <div className="container">
                    <SectionTitle title={'Projetos'} />
                <div className="projects">
                    {projects.map((project, index) => {
                        return (
                            <div key={index} className="project">
                                <div className="project__image">
                                    <img src={image}></img>
                                </div>
                                <div className="project__title">
                                    <h4>{project.title}</h4>
                                </div>
                                <div className="project__description">
                                    <span>{project.description}</span>
                                </div>
                                <div className="project__langs">
                                    <span>{project.langs}</span>
                                </div>
                                <div className="project__buttons">
                                    <a href={project.links.repository} target="_blank" rel="noreferrer" className="btn"><FaGithub/> Repositório</a>
                                    <a href={project.links.repository} target="_blank" rel="noreferrer" className="btn"><FaLink/> Visualizar</a>
                                </div>
                            </div>
                        )
                    })}
                </div>

                </div>
        </section>
    )
}