import SectionTitle from "../../components/SectionTitle/SectionTitle";
import React from "react";
import projects from "../../data/projects";

export default function Projects() {
    return (
        <section className="projects">
            <div className="container">
                <SectionTitle title={'Projetos'} />
            </div>
                
            <div className="projects">
                {projects.map((project, index) => {
                    <div key={index}>
                        <div className="project__image">
                            
                        </div>
                        <h4>{project.title}</h4>
                        <span>{project.description}</span>
                        <div className="project__buttons">
                        </div>
                    </div>
                })}
            </div>
           
        </section>
    )
}