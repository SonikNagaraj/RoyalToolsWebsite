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
                            <p style={{paddingLeft:"15px"}}  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
