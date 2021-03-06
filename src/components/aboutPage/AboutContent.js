import React from 'react'
import styled from "styled-components"
import {Language, Frameworks, Tools, SoftSkills} from './Skills'
import "animate.css"

const AboutContent = () => {
    return (
      <Wrap>
          <div className="header">
            <h1 className="animate__animated animate__slideInLeft animate__delay-1s">
              Hi, I'm Tomisin
            </h1>
            <h2 className="animate__animated animate__slideInLeft animate__delay-2s">
              Software Developer
            </h2>
            <p className="animate__animated animate__slideInLeft animate__delay-3s">
              As a highly motivated software developer I'm always eager to build
              amazing software projects successfully through hard work,
              attention to detail and great programming and organizational
              skills. With a clear understanding of Software development, Object
              oriented programming and best practices. <br />Being a software
              developer, I aim to always build applications that are scalable,
              efficient and have great performance while providing engaging,
              adaptive, eye-candy user experiences. On the other hand,Developer
              community gives me a platform to share complementary ideas with my
              peers and accelerate the process of crafting awesome solutions.
            </p>
            <p className="animate__animated animate__slideInLeft animate__delay-4s">
              When I'm not coding, I'm most likely learning a new skill,
              researching about Artificial Intelligence and new Technologies or
              hanging out with a friend.
            </p>
              <div className="animate__animated animate__slideInLeft animate__delay-5s">
                <h1 className="skills">Skills</h1>
                <h3>Languages</h3>
                <Language />
                <h3>FrameWorks</h3>
                <Frameworks />
                <h3>Tools</h3>
                <Tools />
                <h3>Soft skills</h3>
                <SoftSkills />
              </div>
          <div className="animate__animated animate__slideInLeft animate__delay-5s"> 
                <h1 className="exp">Experience</h1>
                <p>
              <a href="https://mercurie.ng/" class="hbtn hb-fill-right-bg hpad2">Mercurie</a>
              
                </p>
              </div>
            </div>
      </Wrap>
    )
}

const Wrap = styled.div`
  * {
    padding: 0;
    font-family: "Roboto";
  }

  .header {
    display: inline-block;
    color: rgb(214, 222, 235);
    padding: 10px;
    margin: auto;
    width: 70%;
    position: absolute;
    left: 250px;
    top: 50px;
    overflow: auto;
  }
  .header h1 {
    font-size: 400%;
  }
  .header p {
    font-family: brandon-grotesque, sans-serif;
    font-size: 120%;
    padding-top: 9px;
    padding-bottom: 9px;
    word-spacing: 4px
  }
   .header .skills{
      font-size: 270%;
  }
  

  @media (max-width: 365px) {
    .header {
      left: 100px;
      display: block;
      left: 55px;
      padding-right: 0px;
      width: 75%;
    }
    .header h1 {
      font-size: 280%;
    }
    .header h2 {
      font-size: 120%;
    }
  }
  @media (max-width: 1000px) {
    .header {
      left: 100px;
      display: block;
      left: 55px;
      padding-right: 0px;
      width: 75%;
    }
    .header h1 {
      font-size: 280%;
    }
    .header h2 {
      font-size: 120%;
    }
  }

  .hbtn {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      overflow: hidden;
      padding: 8px 20px;
      margin: 0px 3px 6px;
      text-align: center;
      border: 2px solid rgb(255, 255, 255);
      text-decoration: none;
      color: rgb(255, 255, 255);
      white-space: nowrap;
      z-index: 0;
} 
 

.hbtn i {
      padding-right: 8px;
} 
 

.hb-fill-right-bg::before {
      position: absolute;
      content: "";
      background: rgb(255, 255, 255);
      transition-duration: 0.3s;
      z-index: -1;
      top: 0px;
      right: auto;
      bottom: auto;
      left: 0px;
      width: 0px;
      height: 100%;
      opacity: 1;
} 
 

.hb-fill-right-bg:hover::before {
      width: 100%;
      height: 100%;
      opacity: 1;
} 
 

.hb-fill-right-bg:hover {
      color: rgb(0, 0, 0);
      background: rgb(255, 255, 255);
      transition: all 0.3s ease 0s;
} 
 

.hpad2 {
      padding: 12px 24px !important;
}
`

export default AboutContent
