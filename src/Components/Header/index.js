import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";
import Switch from "@material-ui/core/Switch";

export default function Header({ handleChangeTheme, theme }) {
  const location = useLocation();
  const tagActive = location?.pathname.slice(1);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const styleChangeColorTheme =
    theme === false ? { color: "#242424" } : { color: "#3083dc" };

  return (
    <div id="header" className="container">
      <Navbar expand="md" light={!theme} dark={theme}>
        <div className="header__content row">
          <div className="col-md-12 col-sm-7 col-7">
            <NavbarToggler onClick={toggle} />
          </div>
          <div className="change__theme__btn d-flex col-lg-3 col-md-4 col-sm-5 col-5 pl-4">
            <BiSun className="icons__theme"/>
            <Switch
              size="small"
              checked={theme}
              onChange={handleChangeTheme}
              color="primary"
              name="dark-light"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <BiMoon className="icons__theme" />
          </div>
          <div className="header__nav col-lg-8 col-md-5 col-sm-6 col-6 ">
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className={tagActive === "" ? "active" : ""}>
                  <Link to="/" style={styleChangeColorTheme}>
                    Home
                  </Link>
                </NavItem>
                <NavItem className={tagActive === "about" ? "active" : ""}>
                  <Link to="/about" style={styleChangeColorTheme}>
                    About
                  </Link>
                </NavItem>
                <NavItem className={tagActive === "portfolio" ? "active" : ""}>
                  <Link to="/portfolio" style={styleChangeColorTheme}>
                    Portfolio
                  </Link>
                </NavItem>
                <NavItem className={tagActive === "contact" ? "active" : ""}>
                  <Link to="/contact" style={styleChangeColorTheme}>
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
