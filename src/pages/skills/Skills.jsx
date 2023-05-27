import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return (

        <section className="skills" id="skills">
            <div className="container">
                <div className="title">
                    <h2 className="title-section">Conhecimentos</h2>
                </div>
                <div className="skills__container">
                    <div className="skills__container--card">
                        <FaHtml5 className="skill__icon" />
                        <span>Html</span>
                    </div>
                    <div className="skills__container--card">
                        <FaCss3Alt className="skill__icon" />

                        <span>Css</span>
                    </div>
                    <div className="skills__container--card">
                        <FaJsSquare className="skill__icon" />

                        <span>JavaScript</span>
                    </div>
                    <div className="skills__container--card">
                        <FaReact className="skill__icon" />

                        <span>React</span>
                    </div>
                    <div className="skills__container--card">
                        <FaGitAlt className="skill__icon" />
                        <span>Git</span>
                    </div>
                    <div className="skills__container--card">
                        <FaGithub className="skill__icon" />

                        <span>GitHub</span>
                    </div>
                    <div className="skills__container--card">
                        <SiTailwindcss className="skill__icon" />

                        <span>TailwindCss</span>
                    </div>

                </div>


                <div className="other__skills">
                    <span>Metodologias ageis: BEM</span>
                </div>
            </div>
        </section>
    )
}