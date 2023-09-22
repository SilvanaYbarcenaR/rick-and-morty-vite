import styleAbout from "./About.module.css"
import photo from "../../assets/silvanayr.jpeg";
import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";

const About = () => {
    return (
        <div className={styleAbout.aboutContainer}>
            <h1>Silvana Ybárcena Rosas</h1>
            <div className={styleAbout.containerColumns}>
                <div className={styleAbout.leftAbout}>
                    <img src={photo} alt="Silvana Ybárcena Rosas" className={styleAbout.photo}/>
                    <div className={styleAbout.social}>
                        <a href="https://github.com/SilvanaYbarcenaR" target="_blank"><FiGithub/></a>
                        <a href="https://www.linkedin.com/in/sybarcena/" target="_blank"><TfiLinkedin/></a>
                    </div>
                </div>
                <div className={styleAbout.rightAbout}>
                    <p>
                        Orgullosa peruana de nacimiento 😊 (<a href="https://www.google.com/maps/@-16.3991031,-71.5370121,2a,75y,26.1h,92.81t/data=!3m6!1e1!3m4!1sG5CDoCEipMiJUM7g-YkkXA!2e0!7i13312!8i6656?entry=ttu" target="_blank">Arequipa</a>, Perú), me gustan los retos, ya que representan una oportunidad de aprendizaje y de crecimiento no solo profesionalmente sino también de manera personal.
                        Me gusta prestar especial atención a los detalles. Me encanta aprender cosas nuevas y poder compartir conocimientos y experiencias. 
                        Mis hobbies son bailar, cantar, tomar fotografías, hacer trekking, viajar, conocer lugares nuevos y por supuesto codear 🙃.
                    </p>
                    <div className={styleAbout.skills}>
                        <h2>SKILLS</h2>
                        <BsFiletypeHtml/>
                        <BsFiletypeCss/>
                        <FaNodeJs/>
                        <FaReact/>
                        <SiRedux/>
                        <RiJavascriptLine/>
                        <SiPostgresql/>
                        <BsGithub/>
                    </div>
                    <div className={styleAbout.coffeeContainer}>
                        <div className={styleAbout.mortyContiner}>
                            <div className={styleAbout.cup}>
                                <div className={styleAbout.coffee}></div>
                            </div>
                        </div>
                        <div className={styleAbout.smoke}></div>
                        <p>*** Si deseas acompañar mis noches codeando con un cafecito, será bien recibido <a href="https://www.paypal.com/donate/?hosted_button_id=D72PFZHPMEDZY" target="_blank">AQUÍ</a> 🥺</p>
                    </div>
                </div>
                <div className={styleAbout.rickContainer}>
                    <div className={styleAbout.headContainer}>
                    <div className={styleAbout.head}>
                        <div className={styleAbout.browContainer}>
                        <div className={styleAbout.brow}></div>
                        </div>
                        <div className={styleAbout.eyesContainer}>
                        <div className={`${styleAbout.left} ${styleAbout.eye}`}>
                            <div className={styleAbout.pupil}></div>
                        </div>
                        <div className={`${styleAbout.right} ${styleAbout.eye}`}>
                            <div className={styleAbout.pupil}></div>
                        </div>
                        </div>
                        <div className={styleAbout.eyebagsContainer}>
                        <div className={`${styleAbout.left} ${styleAbout.eyebag}`}></div>
                        <div className={`${styleAbout.right} ${styleAbout.eyebag}`}></div>
                        </div>
                        <div className={styleAbout.nose}></div>
                        <div className={styleAbout.mouthContainer}>
                        <div className={styleAbout.mouth}></div>
                        <div className={styleAbout.spittle}></div>
                        </div>
                    </div>
                    <div className={styleAbout.earContainer}>
                        <div className={`${styleAbout.left} ${styleAbout.ear}`}></div>
                        <div className={`${styleAbout.right} ${styleAbout.ear}`}></div>
                    </div>
                    <div className={styleAbout.hairContainer}>
                        <div className={styleAbout.hair}></div>
                    </div>
                    <div className={styleAbout.neck}></div>
                    </div>
                    <div className={styleAbout.bodyContainer}>
                    <div className={styleAbout.body}>
                        <div className={styleAbout.shirt}>
                        <div className={styleAbout.flapCcontainer}>
                            <div className={`${styleAbout.left} ${styleAbout.flap}`}></div>
                            <div className={`${styleAbout.right} ${styleAbout.flap}`}></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;