import { FaCode, FaSass, FaReact } from "react-icons/fa"
import { useState } from "react";
import '../styles/css/styles.css';

export default function Message(){
    const [isVisible, setIsVisible] = useState(true);

    const removeMessage = () => {
        setIsVisible(false)
    };
    return (
        <div className='message'>
            {isVisible &&(
                <>
                <p><FaCode/> Portfólio em Desenvolvimento | <FaReact className='iconsTec'/> <FaSass className='iconsTec'/></p>
                <button className='btnClose' onClick={removeMessage}>Ok</button>
                </>
            )}
        </div>
    );
};