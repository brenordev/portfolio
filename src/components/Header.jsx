import '../../src/images/bg.jpg'
import Socials from './socials/Socials';
import Card from './card/Card';
import Logo from '../images/logosvg.svg'
import{ FaCode, FaSass, FaReact } from "react-icons/fa"



export default function Header(){
    return (
        <header className='header'>
            <div className='message'>
                <p><FaCode/> Portfólio em Desenvolvimento | <FaReact className='iconsTec'/> <FaSass className='iconsTec'/></p>
            </div>
            <nav className='navigation'>
                <div className='navigation__logo'>
                    <a href='#'>
                        <img src={Logo} alt='Logo BrenorDev'/>
                    </a>
                </div>
                <div className='navigation__menu'>
                    <a href='#' >Sobre</a>
                    <a href='#' >Conhecimentos</a>
                    <a href='#' >Projetos</a>
                    <a href='#' >Contato</a>
                </div>
            </nav>
            <Card/>
        </header>

    )
}