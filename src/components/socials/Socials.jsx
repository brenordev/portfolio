import { FaGithub, FaInstagram, FaLinkedinIn, FaSpotify, FaTwitter } from "react-icons/fa";
import React, { useEffect } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/animations/scale.css';
import '../../styles/css/styles.css';

export default function Socials() {
    useEffect(() => {
        tippy('#github', { content: 'GitHub', animation: 'scale',
        });
        tippy('#instagram', { content: 'Instagram', animation: 'scale' });
        tippy('#twitter', { content: 'Twitter', animation: 'scale' });
        tippy('#linkedin', { content: 'LinkedIn', animation: 'scale' });
        tippy('#spotify', { content: 'Playlist LoFi Spotify', animation: 'scale'});

      }, []);

    const socialMedia = [
        { social: 'github', link: 'https://github.com/brenordev', icon: <FaGithub /> },
        { social: 'instagram', link: 'https://www.instagram.com/brenordev/', icon: <FaInstagram /> },
        { social: 'twitter', link: 'https://twitter.com/brenor_dev', icon: <FaTwitter /> },
        { social: 'linkedin', link: 'https://www.linkedin.com/in/brenordev/', icon: <FaLinkedinIn /> },
        { social: 'spotify', link: 'https://open.spotify.com/playlist/5IMF5Ip71xcVj71pjEYXmM?si=eea4627bdc88493f', icon: <FaSpotify /> }
    ];

    return (
        <div className='socials'>
            {socialMedia.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    id={social.social}
                    className="socials--link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    )
}
