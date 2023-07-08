import React from "react"
import Coffe from '../../images/coffee.png'

export default function MessageHome() {
    return (
        <div className="messagehome">
            <span>Talvez nem exista problemas, talvez seja só falta de café 😅☕</span>
            <div  className="messagehome__image">
                <img src={Coffe} alt="Imagem copo de café"/>
            </div>
        </div>
    )
}