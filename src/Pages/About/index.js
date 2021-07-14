import ScrollToTop from "src/Components/ScrollToTop";
import React from "react";
import TabAbout from "./TabAbout";

export default function About() {
  return (
    <div id="about" className="container">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-5">
          <div className="about__img">
            <img src="./img/ava.jpg" alt="avatar" />
          </div>
        </div>
        <div className="col-7 about__content">
          <h3>
            <img src="./img/online-library.png" alt="icon" />
            PERSONAL DETAILS
          </h3>
          <div className="about__content__introduce mt-4">
            <span>
              I'm opening position Front-End Developer. With the available
              knowledge, I will try to do a good job. Besides, constantly
              learning more experience and improving my programming skills.
            </span>
            <br />
            <span>
              I am self-motivated and extremely driven. I work well under
              pressure and can deliver reliable results. I am a team player and
              can work in a fast environment
            </span>
          </div>
          <h3>
            <img src="./img/exam.png" alt="icon" />
            TECHNICAL SKILLS
          </h3>
          <div className="row mt-5">
            <div className="col-6 about__skills">
              <p>
                <img src="./img/laptop.png" alt="hinhAnh" />
                <b>Proficient in </b>
              </p>
              <div className="about__skills__detail">
                <p>HTML</p>
                <p>CSS</p>
                <p>Sass</p>
                <p>Bootstrap</p>
                <p>Github</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>APIs (WebSocket)</p>
                <p>ReactJS</p>
                <p>AngularJS</p>
              </div>
            </div>
            <div className="col-6 about__advocacies">
              <p>
                <img src="./img/like.png" alt="hinhAnh" />
                <b>Advocacies </b>
              </p>
              <ul>
                <li>- High concentration</li>
                <li>- Read the document</li>
                <li>- Participate in community activities</li>
              </ul>
            </div>
          </div>
          <TabAbout />
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
}
