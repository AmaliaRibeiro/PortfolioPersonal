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
                        <h4>SCRUM</h4>
                        <img className={button.skills} src="./images/imgSkills/agileScrum.png" alt="agile Scrum" />
                        <h4>BOOTSTRAP</h4>
                        <FaBootstrap size="50px" className={button.skills} />
                        <h4>CSS</h4>
                        <IoLogoCss3 size="50px" className={button.skills} />
                        <h4>HTML</h4>
                        <IoLogoHtml5 size="50px" className={button.skills} />
                        <h4>JIRA</h4>
                        <FaJira size="50px" className={button.skills} />
                        <h4>JAVASCRIPT</h4>
                        <IoLogoJavascript size="50px" className={button.skills} />
                        <h4>MYSQL</h4>
                        <SiMysql size="50px" className={button.skills} />
                        <h4>NODE JS</h4>
                        <FaNodeJs size="50px" className={button.skills} />
                        <h4>POSTMAN</h4>
                        <SiPostman size="50px" className={button.skills} />
                        <h4>REACT</h4>
                        <FaReact size="50px" className={button.skills} />
                        <h4>SEQUELIZE</h4>
                        <SiSequelize size="50px" className={button.skills} />
                        <h4>VUE3</h4>
                        <IoLogoVue size="50px" className={button.skills} />
                        <h4>TAILDWIND</h4>
                        <SiTailwindcss size="50px" className={button.skills} />
                        <h4>GITHUB</h4>
                        <FaGithub size="50px" className={button.skills} />
                    </div>


                </div>
                </>
            )
}