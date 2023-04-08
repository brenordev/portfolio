import '../../src/images/bg.jpg'
import Socials from './socials/Socials';
import Card from './card/Card';
import Logo from '../images/logosvg.svg'
import{ FaCode, FaSass, FaReact } from "react-icons/fa"
import { useEffect } from 'react';

    const message = document.querySelector('.message')
    const button = document.querySelector('.btnClose')

    button.addEventListener('click', () =>{
        message.style.display = 'none';
        return;
    }) 

export default function Header(){

    
    return (
        <header className='header headline'>
            <div className='message'>
                <p><FaCode/> Portfólio em Desenvolvimento | <FaReact className='iconsTec'/> <FaSass className='iconsTec'/></p>
                <button className='btnClose'>Ok</button>
            </div>
            <nav className='navigation'>
                <div className='navigation__logo'>
                    <a href='#'>
                        <img src={Logo} alt='Logo BrenorDev'/>
                    </a>
                </div>
                <div className='navigation__menu'>
                    <a href='#' className='navigation__menu--link'>Sobre</a>
                    <a href='#' className='navigation__menu--link'>Conhecimentos</a>
                    <a href='#' className='navigation__menu--link'>Projetos</a>
                    <a href='#' className='navigation__menu--link'>Contato</a>
                </div>
            </nav>
            <Card/>
        </header>

    )
    

}

