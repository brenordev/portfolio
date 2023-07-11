import weatherAppImage from '../../src/images/projects/weatherapp.png';
import gcboosterImage from '../../src/images/projects/gcbooster.png';


const projects = [

    {
        title: 'GamersClub Booster',
        image: gcboosterImage,
        description: 'Redesign completo do site da GamersClub Booster que é uma extensão para aprimorar experiência dos usuários da plataforma GamersClub.',
        langs: 'Html • Css • JavaScript',
        links: {
            repository: 'https://github.com/gamersclub-booster/gamersclub-booster.github.io',
            webpage: 'https://gamersclub-booster.github.io/'
        }
    },

    {
        title: 'Weather App',
        image: weatherAppImage,
        description: 'O projeto "Weather App" é uma aplicação que fornece informações meteorológicas atualizadas para diferentes localidades.',
        langs: 'React • Sass',
        links: {
            repository: 'https://github.com/brenordev/weather-app',
            webpage: 'https://weather.brenordev.online/'
        }
    },

]

export default projects;