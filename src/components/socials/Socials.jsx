import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn, FaTwitch, FaYoutube, FaSpotify } from "react-icons/fa";
import '../../styles/css/styles.css';

export default function Socials() {
    return (
        <div className='socials'>
            <a href="https://github.com/brenordev/" 
            target="_blank" 
            className="socials--link">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/brenordev/" 
            target="_blank" 
            className="socials--link">
                <FaInstagram/>
            </a>
            <a href="https://twitter.com/brenor_dev" 
            target="_blank" 
            className="socials--link">
                <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/brenordev/" 
            target="_blank" 
            className="socials--link">
                <FaLinkedinIn/>
            </a>
            <a href="https://www.twitch.tv/brenor_dev" 
            target="_blank" 
            className="socials--link">
                <FaTwitch/>
            </a>
            <a href="https://www.youtube.com/@brenordev" 
            target="_blank" 
            className="socials--link">
                <FaYoutube/>
            </a>
            <a href="https://open.spotify.com/playlist/5IMF5Ip71xcVj71pjEYXmM?si=eea4627bdc88493f" 
            target="_blank" 
            className="socials--link">
                <FaSpotify/>
            </a>
        </div>
    )
}