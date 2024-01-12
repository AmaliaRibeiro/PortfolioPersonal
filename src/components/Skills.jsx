import { IoLogoVue } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaJira } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import button from './Button.module.css'

export const Skills = () => {

    return (
            <>

                <div className={button.card} id="skills">

                    <div className={button.containerSkills} >
                        <h5>SCRUM</h5>
                        <img className={button.skills} src="./images/imgSkills/agileScrum.png" alt="agile Scrum" />
                        <h5>BOOTSTRAP</h5>
                        <FaBootstrap size="50px" className={button.skills} />
                        <h5>CSS</h5>
                        <IoLogoCss3 size="50px" className={button.skills} />
                        <h5>HTML</h5>
                        <IoLogoHtml5 size="50px" className={button.skills} />
                        <h5>JIRA</h5>
                        <FaJira size="50px" className={button.skills} />
                        <h5>JAVASCRIPT</h5>
                        <IoLogoJavascript size="50px" className={button.skills} />
                        <h5>MYSQL</h5>
                        <SiMysql size="50px" className={button.skills} />
                        <h5>NODE JS</h5>
                        <FaNodeJs size="50px" className={button.skills} />
                        <h5>POSTMAN</h5>
                        <SiPostman size="50px" className={button.skills} />
                        <h5>REACT</h5>
                        <FaReact size="50px" className={button.skills} />
                        <h5>SEQUELIZE</h5>
                        <SiSequelize size="50px" className={button.skills} />
                        <h5>VUE3</h5>
                        <IoLogoVue size="50px" className={button.skills} />
                        <h5>TAILDWIND</h5>
                        <SiTailwindcss size="50px" className={button.skills} />
                        <h5>GITHUB</h5>
                        <FaGithub size="50px" className={button.skills} />
                    </div>


                </div>
                </>
            )
}