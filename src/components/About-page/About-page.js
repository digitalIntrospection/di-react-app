import React, { Component } from 'react';
import '../../App.css';
import Our_Commitment from './Our-Commitment';
import Our_approach from './Our-approach';
import Our_App from './Our-App';
import Our_Team from './Our-Team';
import Footer from '../Footer/Footer.js';



class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="about-container-page">
                <div className="our-container-page">
                    <Our_Commitment></Our_Commitment>
                    <Our_approach></Our_approach>
                    <Our_App></Our_App>


                </div>
                <Our_Team></Our_Team>
                <Footer></Footer>
            </div>

        );
    }
}

export default About;