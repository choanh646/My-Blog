import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Project() {
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  return (
    <div id="project">
      <h1>My Projects</h1>
      <div className="project__content container">
        <div className="row">
          <div className="col-4 project__item">
            <Card>
              <CardContent>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_j1adxtyb.json"
                  speed="1"
                  style={{ width: "250px", height: "250px" }}
                  loop
                  autoplay
                />
                <h3>Booking Movie Tickets</h3>
                <p>
                  Build a website to book movie tickets online so that people
                  can book tickets and see details of movies playing at cinemas.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={toggle1}
                >
                  Information
                </Button>
                <Modal isOpen={modal1} toggle={toggle1}>
                  <ModalHeader>
                    <h2>Booking Movie Tickets</h2>
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      <b>Team size :</b> 1
                    </p>
                    <p>
                      <b>Role :</b>Fresher Front-end Developer
                    </p>
                    <p>
                      <b>Technologies: </b>HTML5, CSS3, Bootstrap, ReactJs,
                      Create react app, React-hook, Axios, Redux-thunk
                    </p>
                    <p>
                      <b>Responsibilities :</b>
                    </p>
                    <p>- Build design UI/UX</p>
                    <p>- Analysis and division of components</p>
                    <p>- Build logic interface and admin page</p>
                    <p>- Increase performance web site</p>
                    <p>
                      <b>Link Github :</b>
                      https://github.com/choan646/movie-hung-react.git
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="outlined" color="primary" size="small">
                      <a
                        href="https://movie-booking-two.vercel.app/"
                        target="_blank"
                      >
                        View Project
                      </a>
                    </Button>
                    <Button
                      onClick={toggle1}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardActions>
            </Card>
          </div>
          <div className="col-4 project__item">
            <Card>
              <CardContent>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_mf5j5kua.json"
                  speed="1"
                  style={{ width: "250px", height: "250px" }}
                  loop
                  autoplay
                />
                <h3>TodoList</h3>
                <p>
                  Design and build a small app to help you manage and figure out
                  how to do the things you want to do. When working on a To-Do
                  list, you break down your project or plan into small tasks
                  that can be completed with actions.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={toggle2}
                >
                  Information
                </Button>
                <Modal isOpen={modal2} toggle={toggle2}>
                  <ModalHeader>
                    <h2>TodoList</h2>
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      <b>Team size :</b> 1
                    </p>
                    <p>
                      <b>Role :</b>Fresher Front-end Developer
                    </p>
                    <p>
                      <b>Technologies: </b>HTML, CSS, Bootstrap, React,
                      Reactstrap, Materia-UI, React-hook, Redux-thunk
                    </p>
                    <p>
                      <b>Responsibilities :</b>
                    </p>
                    <p>- Build design UI/UX</p>
                    <p>- Analysis and division of components</p>
                    <p>- Build logic interface and admin page</p>
                    <p>- Increase performance web site</p>
                    <p>
                      <b>Link Github :</b>
                      https://github.com/choan646/todolist-hung
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="outlined" color="primary" size="small">
                      <a
                        href="https://todolist-hung.vercel.app/"
                        target="_blank"
                      >
                        View Project
                      </a>
                    </Button>
                    <Button
                      onClick={toggle2}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
