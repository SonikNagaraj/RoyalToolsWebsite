import React, { Component } from 'react'
import img_ from '../images/ISO.jpg'
import tvs from '../images/tvs.jpg'
import unbrako from '../images/unbrako.png'
import dongbo from '../images/dongbo.jpeg'
import fuda from '../images/Logo - Fuda -.jpg'
import apl from '../images/APL.png'
import jhalani from '../images/Jhalani.png'
import totem from '../images/totem-logo.jpg'
import '../styles/About.css'
import ModalImage from "react-modal-image";
 
export class About extends Component {
    render() {
        return (
            <div id="about">
                <br />
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-9 col-xs-9">
                            <h2 className="about_us">About us</h2>
                            <p className="about_content">Royal Tools and Hardwares pioneering since 1995 is directed by <strong>Mr.N Nagaraj</strong> who is proficient in trading customizable products. It is an ISO certified company that has been endeavoured in rendering business for 25 years now. It is always been our first priority to bring in the best and the latest products with the most competitive prices for our valued customers. We are Authorised Distributors and Stockists of many reputed brands and this site is an overview of the varied range of products we deal in. <br /><strong>GST No.33ADYPV1105G1ZF</strong></p>
                        </div>
                        <div className="col-sm-3 col-md-3 col-xs-3">
                            <ModalImage
                                small={img_}
                                large={img_}
                                hideDownload="true"
                                hideZoom="true"
                            />
                        </div>
                    </div>
                    <br />
                    <h2 className="about_us">Dealers in:</h2>
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-xs-3">
                            <img src={tvs} alt='tvs' className="deal_img" />
                        </div>
                        <div className="col-sm-3 col-md-3 col-xs-3">
                            <img src={unbrako} alt='unbrako' className="unbrako_img" />
                        </div>
                        <div className="col-sm-3 col-md-3 col-xs-3">
                            <img src={dongbo} alt='dongbo' className="unbrako_img" />
                        </div>
                        <div className="col-sm-3 col-md-3 col-xs-3">
                            <img src={fuda} alt='fuda' className="deal_img" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-xs-4">
                            <img src={jhalani} alt='jhalani' className="apl_img" />
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-4">
                            <img src={apl} alt='apl' className="apl_img" />
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-4">
                            <img src={totem} alt='totem' className="apl_img" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
