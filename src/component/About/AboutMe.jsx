import "./AboutMe.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="src\assets\SelfPhoto.jpg" alt="img" className="about-img"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an undergraduate BSc(HONS) Computer Science with Artificial Intiligence student with skills in UI/UX design and Frontend development, along with strong interests in Embedded Systems, IoT, Data Science, AI, and Machine Learning.
My passion lies in designing user-friendly digital experiences and applying technology to solve real-world challenges. <br /> I strive to bridge the gap between theoretical knowledge and practical applications through innovative projects.
With creativity and problem-solving abilities, I aim to grow as a versatile professional in both software development and emerging technologies.</p>
        <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
          <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"70%"}}/></div>
          <div className="about-skill"><p>REACT JS</p><hr style={{width:"80%"}}/></div>
          <div className="about-skill"><p>PYTHON</p><hr style={{width:"80%"}}/></div>
          <div className="about-skill"><p>IOT</p><hr style={{width:"78%"}}/></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

