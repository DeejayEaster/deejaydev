import React from 'react';
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
} from 'reactstrap';

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
            <div className='nav-container'>
                <Navbar className="fixed-top" dark expand="lg">

                    <NavbarBrand href="/">/DEEJAY</NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>


                        <Nav className="ml-auto" navbar>
                            <div className='link-container'>

                                <NavItem>
                                    <NavLink href="/components/">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/components/">Contact</NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}