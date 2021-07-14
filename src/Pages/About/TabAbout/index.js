import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function TabAbout() {
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
    <div className="about__tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="EDUCATION"
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
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ol>
          <li>
            <h6>Ho Chi Minh City University of Transport :</h6>
          </li>
          <p>ENGINEER'S DEGREE - INFORMATION TECHNOLOGY</p>
          <ul>
            <li>- Start 2016- End 2021</li>
            <li>- Graduated</li>
            <li>- Activities at School : Football, Blood Donation,..</li>
          </ul>
          <li>
            <h6>Cybersoft Center :</h6>
          </li>
          <p>FRONT-END DEVELOPER</p>
          <ul>
            <li>- Start 11/2019 - End 05/2021</li>
            <li>
              - Knowledge Learned : HTML,CSS, BOOTSTRAP, REACTJS, ANGULARJS
            </li>
          </ul>
        </ol>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "22px" }}>
          <b>NO EXPERIENCE</b>
        </p>
        <div style={{ marginLeft: "160px" }}>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_t0mvxlwu.json"
            background="transparent"
            speed=".5"
            style={{ width: "255px", height: "255px" }}
            loop
            autoplay
          />
        </div>
      </TabPanel>
    </div>
  );
}
