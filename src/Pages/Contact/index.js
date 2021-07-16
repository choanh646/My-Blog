import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import { MdSend } from "react-icons/md";

export default function Contact() {
  const handleSubmitForm = () => {
    Swal.fire("Message Sent Successfully!");
  };
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div className="row container">
        <div className="col-md-7 col-12 contact__left">
          <Paper elevation={2}>
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
                Send <MdSend />
              </Button>
            </form>
          </Paper>
        </div>
        <div className="col-lg-5 col-12 contact__right">
          <div className="row container">
            <div className="col-lg-12 col-md-6 col-12">
              <h3>
                <img src="./img/chat.png" alt="phone" />
                Phone & Zalo
              </h3>
              <p>0915280646</p>
            </div>
            <div className="col-lg-12 col-md-6 col-12">
              <h3>
                <img src="./img/paper-plane.png" alt="email" />
                Email
              </h3>
              <p>gogogo0646@gmail.com</p>
            </div>
            <div className="col-lg-12 col-12">
              <h3>
                <img src="./img/landing-page.png" alt="fl-me" />
                Follow Me
              </h3>
              <div className="row icons__link">
                <div className="col-1 icons__link__item">
                  <a
                    href="https://www.facebook.com/hung.daudean/"
                    target="_blank"
                  >
                    <img src="./img/facebook.png" alt="fb" />
                  </a>
                </div>
                <div className="col-1 icons__link__item">
                  <a
                    href="https://www.linkedin.com/in/v%C4%83n-h%C3%B9ng-tr%E1%BA%A7n-49453b211/"
                    target="_blank"
                  >
                    <img src="./img/linkedin.png" alt="in" />
                  </a>
                </div>
                <div className="col-1 icons__link__item">
                  <a
                    href="https://www.instagram.com/noob_12.05/"
                    target="_blank"
                  >
                    <img src="./img/instagram.png" alt="insta" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
