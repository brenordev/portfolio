import React from 'react';
import '../../src/images/bg.jpg'
import Logo from '../images/logo.svg'
import { Link, animateScroll as scroll } from 'react-scroll';
import Card from './card/Card';

export default function Header() {

    return (
        <header className='header headline'>
            <nav className='navigation'>
                <Link to='/inicio' className='navigation__logo'>
                    <img src={Logo} alt='Logo BrenorDev' />
                </Link>
                <div className='navigation__menu'>
                    <Link className='navigation__menu--link'
                        activeClass="active"
                        to="#about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Sobre</Link>
                    <Link className='navigation__menu--link'
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1100}
                    >Conhecimentos</Link>
                    <Link className='navigation__menu--link'
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                    >Projetos</Link>
                    <Link className='navigation__menu--link'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contato</Link>
                </div>
            </nav>
            <Card/>
        </header>

    )


}
