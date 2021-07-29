import React from 'react'
import Content from '../components/content'
import bgImg from "../images/salzburg.jpeg"
import Background from '../components/background'
import "./about.css"
import avatar from "../images/linda.jpeg"

const About = () => (
  <Background bgImg={bgImg}>
    <Content title='About us' titleColor="mdb-color">
      <img src={avatar} className="avatar d-inline-block z-depth-2 rounded-circle" alt=""/>
      <div className="d-inline">
        <p>
          Linda is a very experienced SW/HW engineer with over 25 years of experience from 
          working in several commercial research and development companies. She has a 
          Computer Engineering background and her work spans a wide spectrum from ASIC 
          design, SW and novel algorithm development in image processing, computer vision 
          to AR/VR applications. 
        </p>
        <p>
          She is committed to apply new technologies to automate menial tasks and augment 
          human's working capacity. She is also a hobbyist in digital art and photography.
          The gallery section shows some of her work in photography and digital art. Her 
          interests in this area is the reason behind her high standard in UX/UI design 
          and development.
        </p>
        <p>
          She believes the future of human work is imagination, creativity and strategy. 
          Building mobile applications and web solutions for business is the first step 
          toward fulfilling this dream. 
        </p>
      </div>
      <h3>
        Key skills:
      </h3>
      <ul>
        <li>
          <strong>SW/HW development:</strong> Experienced in JavaScript ES6+ (React, Node.js), 
          HTML, CSS, responsive design, AWS, Python, C/C++, VHDL, SQL, OO principles, test driven  
          development, real-time processing and rapid prototyping in both Windows and Linux  
          development environment, with an ability to quickly adapt state of the art algorithms  
          and SDKs to solve different problems faced in our projects.
        </li>
        <li>
          <strong>Image processing and computer vision:</strong> Strong domain knowledge in  
          document image analysis, enhancement, compression, alignment, segmentation, 
          camera/projector calibration, photogrammetry and 3D geometry.
        </li>
        <li>
          <strong>Management:</strong> Experienced in technical strategy, team leading, 
          mentoring, project planning and trend analysis, with a track record of leading 
          large multi-disciplinary teams to deliver innovative technologies on time.
        </li>
        <li>
          <strong>Intellectual property:</strong> Highly experienced in patent creation, 
          office action, prior art search and infringement analysis. Authored 22 granted 
          US/Australia patents and 15 pending applications.
        </li>
        <li>
          <strong>Communication:</strong> Involved in strategic planning with team members, 
          upper management and customers through good listening skills, questioning techniques,  
          attention to details and being proactive in addressing their concerns promptly.
        </li>
      </ul>
    </Content>
  </Background>
)

export default About