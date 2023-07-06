import '../../styles/css/styles.css'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import React from 'react';

export default function Home(){
    return (
        <section className="about" id='about'>
            <div className="container">
                    <SectionTitle title={'Sobre'}/>

                    <span>Formado em Análise e Desenvolvimento de Sistemas,
                        atualmente estudando JavaScript e aprimorando alguns
                        fundamentos para aplicar em uma oportunidade de trabalho
                        onde eu possa obter conhecimentos e da mesma forma compartilhar
                        conhecimentos entre equipe. Iniciando carreira como desenvolvedor
                        Front-End mas tenho como objetivo em ser um Desenvolvedor Full-Stack
                        futuramente.</span>
            </div>
        </section>

    )
}