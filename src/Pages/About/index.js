import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

export default function About({}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  return (
    <div id="about" className="container">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-6">
          <div
            className="about__img"
            style={{
              width: "295px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              marginLeft: "100px",
              marginTop: "50px",
              boxShadow: "0 0 10px black",
            }}
          >
            <img
              src="./img/ava.jpg"
              style={{ width: "300px", height: "420px" }}
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-6 about__content">
          <h3>
            <img
              src="./img/online-library.png"
              alt="icon"
              width="35px"
              height="35px"
            />
            PERSONAL DETAILS
          </h3>
          <span>
            I'm opening position Front-End Developer. With the available
            knowledge, I will try to do a good job. Besides, constantly learning
            more experience and improving my programming skills.
          </span>
          <br />
          <span>
            I am self-motivated and extremely driven. I work well under pressure
            and can deliver reliable results. I am a team player and can work in
            a fast environment
          </span>
          <h3>
            <img src="./img/exam.png" alt="icon" width="35px" height="35px" />
            TECHNICAL SKILLS
          </h3>
          <div className="row">
            <div className="col-6" style={{borderRight: "1px solid #8168af"}}>
              <span>
                <p>
                  <img
                    src="./img/laptop.png"
                    width="35px"
                    height="35px"
                    alt="hinhAnh"
                  />
                  <b>Proficient in </b>
                </p>
                <div style={{width:270}}>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    HTML
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    CSS, Sass
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    Github
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    JavaScript
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    TypeScript
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    APIs (WebSocket)
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    ReactJS
                  </p>
                  <p
                    style={{
                      width: "auto",
                      borderRadius: "30px",
                      border: "1px solid #8168af",
                      display: "inline-block",
                      padding: "3px 15px",
                    }}
                  >
                    AngularJS
                  </p>
                </div>
              </span>
            </div>
            <div className="col-6">
              <span>
                <p>
                  <img
                    src="./img/like.png"
                    width="35px"
                    height="35px"
                    alt="hinhAnh"
                  />
                  <b>Advocacies </b>
                </p>

                <ul style={{ listStyle: "none" }}>
                  <li>- High concentration</li>
                  <li>- Read the document</li>
                  <li>- Participate in community activities</li>
                </ul>
              </span>
            </div>
          </div>
          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                label="EDUCATION"
                style={{ color: "#8168af", fontWeight: "bold" }}
                icon={
                  <img
                    src="./img/diploma.png"
                    alt="icon"
                    width="35px"
                    height="35px"
                  />
                }
              />
              <Tab
                label="EXPERIENCE"
                icon={
                  <img
                    src="./img/student.png"
                    alt="icon"
                    width="35px"
                    height="35px"
                  />
                }
                style={{ color: "#8168af", fontWeight: "bold" }}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <ol style={{ listStyle: "upper-roman" }}>
                <li style={{ fontWeight: "bold" }}>
                  <h6>
                    <b>Ho Chi Minh City University of Transport :</b>
                  </h6>
                </li>
                <p>ENGINEER'S DEGREE - INFORMATION TECHNOLOGY</p>
                <ul style={{ listStyle: "none" }}>
                  <li>- Start 2016- End 2021</li>
                  <li>- Graduated</li>
                  <li>- Activities at School : Football, Blood Donation,..</li>
                </ul>
                <li style={{ fontWeight: "bold" }}>
                  <h6>
                    <b>Cybersoft Center :</b>
                  </h6>
                </li>
                <p>FRONT-END DEVELOPER</p>
                <ul style={{ listStyle: "none" }}>
                  <li>-Start 11/2019 - End 05/2021</li>
                  <li>
                    -Knowledge Learned : HTML,CSS, BOOTSTRAP, REACTJS, ANGULARJS
                  </li>
                </ul>
              </ol>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <p>
                <b>NO EXPERIENCE</b>
              </p>
              <div>
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_t0mvxlwu.json"
                  background="transparent"
                  speed=".5"
                  style={{ width: "300px", height: "300px" }}
                  loop
                  autoplay
                />
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
