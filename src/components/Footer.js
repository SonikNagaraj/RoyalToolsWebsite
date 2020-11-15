import React, { Component } from 'react'
import '../styles/Footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export class Footer extends Component {
    render() {
        return (
            <div>
              <MDBFooter color="blue" className="footer_">
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} - Royal Tools & Hardwares | Designed with <i className="fas fa-heart"></i> by Sonik 
                </MDBContainer>
              </div>
              </MDBFooter>
            </div>
        )
    }
}

export default Footer
