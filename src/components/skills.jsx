import './css/skills.css'
import { FaHtml5,FaCss3Alt,FaPython,FaPhp,FaDartLang,FaFlutter,FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript,IoLogoNodejs } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandTailwind } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Skills = ()=>{
    const location = useLocation()
    useEffect(()=>{
        const hash = location.hash.slice(1)
        if(hash){
            const element = document.getElementById(hash);
            console.log(element)
            if(element){
                element.scrollIntoView()
            }
        }
    },[location.hash])
    return(
        <div id="skills">
            <h1>Skills</h1>
            <div id="skillIcons">
            <div className='skillItem'>
            <FaHtml5 className='s_icon' title='HTML'/><br></br>
            <em>HTML</em>

            </div>

            <div className='skillItem'>
            <FaCss3Alt className='s_icon' title='CSS'/><br></br>
            <em>CSS</em>

            </div>


            <div className='skillItem'>
            <IoLogoJavascript className='s_icon' title='JavaScript'/><br></br>
            <em>JavaScript</em>

            </div>
            <div className='skillItem'>
            <FaPython className='s_icon' title='Python'/><br></br>
            <em>Python</em>

            </div>
            <div className='skillItem'>
            <FaPhp className='s_icon' title='PHP'/><br></br>
            <em>PHP</em>

            </div>
            <div className='skillItem'>
            <IoLogoNodejs className='s_icon' title='Node'/><br></br>
            <em>Node</em>

            </div>
            <div className='skillItem'>
            <BsFiletypeSql className='s_icon' title='SQL'/><br></br>
            <em>SQL</em>

            </div>
            <div className='skillItem'>
            <TbBrandTailwind className='s_icon' title='Tailwind CSS'/><br></br>
            <em>Tailwind</em>

            </div>
            <div className='skillItem'>
            <FaDartLang className='s_icon' title='Dart'/><br></br>
            <em>Dart</em>

            </div>
            <div className='skillItem'>
            <FaFlutter className='s_icon' title='Flutter'/><br></br>
            <em>Flutter</em>

            </div>
            <div className='skillItem'>
            <FaGitAlt className='s_icon' title='Git'/><br></br>
            <em>Git</em>

            </div>
            <div className='skillItem'>
            <LuGithub className='s_icon' title='GitHub'/><br></br>
            <em>GitHub</em>

            </div>
            </div>

        </div>

    )
}

export default Skills;