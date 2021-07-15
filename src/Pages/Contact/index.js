import React from "react";
// import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";

export default function Contact() {
  const handleSubmitForm = () => {
    Swal.fire("Message Sent Successfully!");
  };
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div className="row">
        <div className="col-6 contact__left">
          <Paper elevation={2} style={{ backgroundColor: "#fafafa" }}>
            <form>
              <TextField label="Name" variant="outlined" size="small" />
              <TextField label="Email" variant="outlined" size="small" />
              <TextField label="Phone" variant="outlined" size="small" />
              <TextField
                label="Message"
                multiline
                rows={5}
                variant="outlined"
              />
              <Button
                onClick={handleSubmitForm}
                variant="contained"
                size="small"
                color="primary"
              >
                Send
              </Button>
            </form>
          </Paper>
        </div>
        <div className="col-6 contact__right">
          <h3>
            <img src="./img/chat.png" width="35px" height="35px" alt="phone" />
            Phone & Zalo
          </h3>
          <p>0915280646</p>
          <h3>
            <img
              src="./img/paper-plane.png"
              width="35px"
              height="35px"
              alt="email"
            />
            Email
          </h3>
          <p>gogogo0646@gmail.com</p>
          <h3>
            <img
              src="./img/landing-page.png"
              width="35px"
              height="35px"
              alt="fl-me"
            />
            Follow Me
          </h3>
          <div className="row icons__link">
            <div className="col-1 icons__link__item">
              <a href="https://www.facebook.com/hung.daudean/" target="_blank">
                <img
                  src="./img/facebook.png"
                  width="25px"
                  height="25px"
                  alt="fb"
                />
              </a>
            </div>
            <div className="col-1 icons__link__item">
              <a
                href="https://www.linkedin.com/in/v%C4%83n-h%C3%B9ng-tr%E1%BA%A7n-49453b211/"
                target="_blank"
              >
                <img
                  src="./img/linkedin.png"
                  width="25px"
                  height="25px"
                  alt="in"
                />
              </a>
            </div>
            <div className="col-1 icons__link__item">
              <a href="https://www.instagram.com/noob_12.05/" target="_blank">
                <img
                  src="./img/instagram.png"
                  width="25px"
                  height="25px"
                  alt="insta"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
