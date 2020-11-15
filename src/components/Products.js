import React, { Component } from 'react'
import '../styles/Products.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../images/Products/EndCapBolt.jpg'
import img2 from '../images/Products/ThreadedInsert.jpg'
import img3 from '../images/Products/Button.jpg'
import img4 from '../images/Products/StainlessSteelBolt.jpg'
import img5 from '../images/Products/SocketSetScrew.jpg'
import img6 from '../images/Products/TopLockNut.jpg'
import img7 from '../images/Products/CenterLockNut.jpg'
import img8 from '../images/Products/Spanner_1.jpg'
import img9 from '../images/Products/unbrako_product.jpg'
import img10 from '../images/Products/totem_drill_bit.jpg'
import img11 from '../images/Products/tvs_product.JPG'

export class Products extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 400, min: 0 },
              items: 1,
            },
          };
        return (
            <div id="products">
                <h1 className="prods">OUR PRODUCTS</h1>
                <Carousel
                    responsive={responsive}
                    autoPlay="true"
                    autoPlaySpeed="2000"
                    showDots="true"
                    infinite="true"
                    keyBoardControl="true"
                    draggable
                    >
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img4} alt="Stainless Steel Bolt" />
                                    <h5 class="item-card-title mt-3 mb-3">Stainless Steel Bolt</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img2} alt="Threaded Insert" />
                                    <h5 class="item-card-title mt-3 mb-3">Threaded Insert</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img3} alt="UHMW PE Button" />
                                    <h5 class="item-card-title mt-3 mb-3">UHMW PE Button</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img1} alt="End Cap Bolt" />
                                    <h5 class="item-card-title mt-3 mb-3">End Cap Bolt</h5>
                                    <p class="card-text" style={{fontSize:"20px"}} >Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img5} alt="Socket Set Screw" />
                                    <h5 class="item-card-title mt-3 mb-3">Socket Set Screw</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img6} alt="Top Lock Nut" />
                                    <h5 class="item-card-title mt-3 mb-3">Top Lock Nut</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img7} alt="Center Lock Nut" />
                                    <h5 class="item-card-title mt-3 mb-3">Center Lock Nut</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get customized products in all different sizes.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img8} alt="Spanner" />
                                    <h5 class="item-card-title mt-3 mb-3">Spanner</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get all standard sizes available.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img9} alt="Unbrako" />
                                    <h5 class="item-card-title mt-3 mb-3">Unbrako</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get all products available in Unbrako.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img10} alt="Totem" />
                                    <h5 class="item-card-title mt-3 mb-3">Totem</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get all products available in Totem.</p> 
                            </div>
                        </div>
                        <div>
                            <div class="card item-card card-block">
                                <img style={{height:"300px",width:"100%"}} src={img11} alt="TVS" />
                                    <h5 class="item-card-title mt-3 mb-3">TVS</h5>
                                    <p class="card-text" style={{fontSize:"20px"}}>Get all products available in TVS.</p> 
                            </div>
                        </div>
                </Carousel>
            </div>
        )
    }
}

export default Products
