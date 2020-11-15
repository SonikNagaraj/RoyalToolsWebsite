import React, { Component } from 'react'
import first from '../images/video.mp4'
import second from '../images/bg_1.jpg'
import fourth from '../images/bg_3.jpg'
import fifth from '../images/bg_5.jpg'
import third from '../images/bg_4.jpg'
import '../styles/Caro.css'
export class Caro extends Component {
    render() {
        return (
            <div>
                <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                        <li data-target="#carousel-example-2" data-slide-to="3"></li>
                        <li data-target="#carousel-example-2" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active">
                            <div className="view">
                                <video className="video-fluid first_img" autoPlay loop muted>
                                    <source src={first} type="video/mp4" />
                                </video>
                                <div className="carousel-caption">
                                    <div className="w3-animate-fading">
                                        <h1 className="h1-responsive text_1">Royal Tools & Hardwares</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="sec_img" src={fourth}
                                alt="Second slide" />
                                <div className="mask rgba-black-strong"></div>
                                <div className="carousel-caption">
                                    <div className="DIV">
                                        <h1 className="h1-responsive text_2">Get customized items :)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="third_img" src={third}
                                alt="Third slide" />
                                <div className="carousel-caption">
                                    <div className="DIV">
                                        <h1 className="h1-responsive text_3">Supplier in tools & hardwares</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="fourth_img" src={second}
                                alt="Third slide" />
                                <div className="carousel-caption">
                                    <div className="DIV">
                                        <h1 className="h1-responsive text_4">ISO Certified Company</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view">
                                <img className="fifth_img" src={fifth}
                                alt="Third slide" />
                                <div className="carousel-caption">
                                    <div className="DIV">
                                        <h1 className="h1-responsive text_5">Over 25 years in business</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Caro
