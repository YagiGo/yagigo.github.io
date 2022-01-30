import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
import {scroller} from 'react-scroll';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { withNamespaces } from "react-i18next";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import './style.css'
class ResumeNav extends Component {
    scrollTo = (e) => {
        scroller.scrollTo(e.target.name, {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutBack"
        })
    }
    render() {
        // const {t} = this.props;
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <NavbarBrand className='navbar-brand js-scroll-trigger' href="#page-top" />
                    <NavbarCollapse className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='navbar-nav'>
                            <NavLink className="nav-link" name="about" onClick={(e) => this.scrollTo(e) }>About</NavLink>
                            <NavLink className="nav-link" name="education" onClick={(e) => this.scrollTo(e)}>Education</NavLink>
                            <NavLink className="nav-link" name="projects" onClick={(e) => this.scrollTo(e)}>Work</NavLink>
                            <NavLink className="nav-link" name="skills" onClick={(e) => this.scrollTo(e)}>Skills</NavLink>
                            <NavLink className="nav-link" href="https://github.com/YagiGo/yagigo.github.io" rel="noreferrer" target='_blank'>
                                About This Page <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </NavLink>
                        </div>
                    </NavbarCollapse>
                </Navbar>
            </div>
        );
    }
}

export default withNamespaces()(ResumeNav);