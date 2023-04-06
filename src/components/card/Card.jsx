import '../../styles/css/styles.css';
import Socials from '../socials/Socials';
import{ FaCog, FaDownload} from "react-icons/fa"



export default function Card(){

    const name = 'Breno Ribeiro';
    const office = 'Desenvolvedor Front-End Jr.'

    return (
        <div className='card'>
                <div className='card__image-profile'>
                    <img src='https://github.com/brenordev.png' alt='Foto'/>
                </div>
                <div className='card__info'>
                    <span className='card__info--name'>{name} &#9996;</span>
                    <span className='card__info--office'>{office}</span>
                    <Socials/>
                </div>
                    <div className='card__others'>
                        <a href='' className='btn'><FaCog/></a>
                        <a href='' className='btn btn-curriculum'><FaDownload className='FaDownload' />Download currículo</a>
                    </div>
        </div>
    )
}