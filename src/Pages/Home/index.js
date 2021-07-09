import React from "react";
import { Link } from "react-router-dom";

export default function Home({}) {
  return (
    <div id="home" className="container">
      <div className="row home__content">
        <div className="col-5">
          <h1>
            <i>Wellcome!</i>
          </h1>
          <div className="row mt-3">
            <div className="col-3">
              <h2>I'm</h2>
            </div>
            <div className="col-7">
              <ul>
                <li>
                  <p style={{ color: "#3083DC" }}>
                    <b>
                      <i>Tran Van Hung</i>
                    </b>
                  </p>
                </li>
                <li>
                  <p style={{ fontSize: "16px" }}>
                    <i>Front-End Developer</i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="home__summary mb-5">
            <p>
              <b style={{ color: "#3083DC", fontSize: "18px" }}>With</b> the
              available knowledge, I will try to do a good job. Besides,
              constantly learning more experience and improving my programming
              skills...
              <i>
                <Link to="/about">Read more</Link>
              </i>
            </p>
          </div>
          <button className="home__btn__contact">
            <span>
            <Link to="/contact">Contact Me</Link>
            </span>
          </button>
        </div>
        <div className="home__img col-7">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_jvt4bdg7.json"
            background="transparent"
            speed="1"
            style={{ width: "600px", height: "545px" }}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
