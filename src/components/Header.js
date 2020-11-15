import React, { Component } from 'react'
import '../styles/Header.css'
import logo from '../images/logo.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
class Header extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 10) {
          document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-md navbar-dark header_sticky";
          document.querySelector(".logoz").className = " logoz logo_sticky";
          document.querySelector(".navbar-brand").className = " navbar-brand abs heading_name_sticky";
        } else {
          document.querySelector(".navbar").className = "navbar fixed-top navbar-expand-md navbar-dark header";
          document.querySelector(".logoz").className = "logoz logo_";
          document.querySelector(".navbar-brand").className = " navbar-brand abs heading_name";
        }
      };


    render() {
        return (
            <div>
                  <nav className="navbar fixed-top navbar-expand-md navbar-dark header">
      
                    <div className="navbar-brand">
                      <Link
                          activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={800}>
                          <img src={logo} className="logoz logo_" alt="logo" />         
                        </Link>
                    </div>
                     
                    <h3 className="navbar-brand abs heading_name">Royal Tools & Hardwares</h3>
                    <button className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="navbar-collapse collapse colla_back" id="collapsingNavbar">
                        <ul className="navbar-nav ml-auto">
                             <li className="nav-item">
                                <Link
                                  activeClass="active"
                                  to="home"
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={800}>
                                   HOME 
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                  activeClass="active"
                                  to="about"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={800}>
                                   ABOUT US
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                  activeClass="active"
                                  to="products"
                                  spy={true}
                                  smooth={true}
                                  offset={-90}
                                  duration={800}>
                                   PRODUCTS
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                  activeClass="active"
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  offset={-110}
                                  duration={800}>
                                   CONTACT
                            </Link>
                            </li>
                        </ul>
                    </div>
                 </nav>  
            </div>
        )
    }
}

export default Header
