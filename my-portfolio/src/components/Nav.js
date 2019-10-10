import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="nav-container">
        <Navbar className="fixed-top" right dark expand="lg">
          <NavbarBrand href="/">/DEEJAY</NavbarBrand>

          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
          <Nav className="ml-auto" navbar>
            <div className="link-container">
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={500}
                  >
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                  >
                    Projects
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
            </div>
          </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}
