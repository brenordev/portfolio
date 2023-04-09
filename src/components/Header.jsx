import '../../src/images/bg.jpg'
import Socials from './socials/Socials';
import Card from './card/Card';
import Logo from '../images/logosvg.svg'
import Message from './message';


export default function Header(){

    return (
        <header className='header headline'>
            <Message/>
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
