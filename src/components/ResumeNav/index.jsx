import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
import './style.css'
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
class ResumeNav extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <NavbarBrand className='navbar-brand js-scroll-trigger' href="#page-top" />
                    <NavbarCollapse className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='navbar-nav'>
                            <NavLink  className="nav-link" href="#about">About</NavLink>
                            <NavLink  className="nav-link" href="#education">Education & Work Experience</NavLink>
                            <NavLink  className="nav-link" href="#experience">Projects</NavLink>
                            <NavLink  className="nav-link" href="#skills">skills</NavLink>
                        </div>
                    </NavbarCollapse>
                </Navbar>
            </div>
        );
    }
}

export default ResumeNav;