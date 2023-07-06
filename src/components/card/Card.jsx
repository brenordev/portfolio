// eslint-disable-next-line
import '../../styles/css/styles.css';
import Socials from '../socials/Socials';
import{ FaCog, FaDownload} from "react-icons/fa"
import React from 'react';
function Card(){

    const name = 'Breno Ribeiro'
    const office = 'Desenvolvedor Front-End'
    const imageUser = "https://github.com/brenordev.png"

    return (
        <div className='card'>
                <div className='card__image-profile'>
                    <img src={imageUser} alt='Foto'/>
                </div>
                <div className='card__info'>
                    <span className='card__info--name'>{name} <span>&#128075;</span></span>
                    <span className='card__info--office'>{office}</span>
                    <Socials/>
                </div>
                    <div className='card__others'>
                        <a href='' className='btn btn-config'><FaCog className='FaCog'/></a>
                        <a href='' className='btn btn-curriculum'><FaDownload className='FaDownload' />Download currículo</a>
                    </div>
        </div>
    )
}
export default Card;