import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn, FaTwitch, FaYoutube, FaSpotify } from "react-icons/fa";
import '../../styles/css/styles.css';

export default function Socials() {

    return (
        <div className='socials'>
            <a href="https://github.com/brenordev/" 
            target="_blank" 
            className="socials--link">
                <FaGithub/>
                <span className="socials--span-alt">GitHub</span>
            </a>
            <a href="https://www.instagram.com/brenordev/" 
            target="_blank" 
            className="socials--link">
                <FaInstagram/>
                <span className="socials--span-alt">Instagram</span>
            </a>
            <a href="https://twitter.com/brenor_dev" 
            target="_blank" 
            className="socials--link">
                <FaTwitter/>
                <span className="socials--span-alt">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/brenordev/" 
            target="_blank" 
            className="socials--link">
                <FaLinkedinIn/>
                <span className="socials--span-alt">LinkedIn</span>
            </a>
            <a href="https://open.spotify.com/playlist/5IMF5Ip71xcVj71pjEYXmM?si=eea4627bdc88493f" 
            target="_blank" 
            className="socials--link">
                <FaSpotify/>
                <span className="socials--span-alt">Spotify Playlist Lo-Fi</span>
            </a>
        </div>
    )
}