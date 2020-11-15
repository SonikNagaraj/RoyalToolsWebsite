import React, { Component } from 'react'
import Header from './Header'
import Caro from './Caro'
export class Home extends Component {
    render() {
        return (
            <div id="home">
                <Header />
                <Caro />
            </div>
        )
    }
}

export default Home
