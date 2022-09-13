import React, { Component, Suspense } from 'react';
import '../../App.css';
// import Our_Commitment from './Our-Commitment';
// import Our_approach from './Our-approach';
// import Our_App from './Our-App';
import Our_Team from './Our-Team';
// import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';
const Our_Commitment = React.lazy(() => import('./Our-Commitment'));
const Our_approach = React.lazy(() => import('./Our-approach'));
const Our_App = React.lazy(() => import('./Our-App'));
const Footer = React.lazy(() => import('../Footer/Footer.js'));




class About extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <motion.div className="about-container-page"
                initial={{ opacity: 0, transition: { duration: 0.1 } }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
                <Navbar />
                <div className="our-container-page">
                    <Suspense fallback='hello'>

                        <Our_Commitment></Our_Commitment>


                        <Our_approach></Our_approach>



                        <Our_App></Our_App>
                    </Suspense>



                </div>


                <Our_Team></Our_Team>
                <Footer></Footer>



            </motion.div>

        );
    }
}

export default About;