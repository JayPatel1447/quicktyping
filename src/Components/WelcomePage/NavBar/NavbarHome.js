//Author : Jay Patel
import React, {useState} from "react";
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarBrand} from "reactstrap";
import "./NavbarHome.css"


const NavbarHome = props => {

    const [open, setOpen] = useState(false);

    return (
        /* Navbar */
        <Navbar className={"container"} color={"transparent"} light expand="md">
            <NavbarBrand>Quick Typing</NavbarBrand>
            <NavbarToggler onClick={() => setOpen(!open)} style={{color: 'black'}}/>
            <Collapse isOpen={open} navbar>
                <Nav className="ml-auto" navbar>
                    {props.displayLogin && <NavItem>
                        <button className={"nav-start-button"}
                                onClick={() => props.history.push("/dashboard")}>Start
                        </button>
                    </NavItem>
                    }
                </Nav>
            </Collapse>
        </Navbar>

    )
};

export default NavbarHome;