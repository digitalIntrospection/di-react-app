import React from 'react'
import Hero from './Hero.js';
// import Nav_Bar from './components/Home-page/Nav-Bar';
import Main_Description from './Main-Description.js';
import Benefits_Description from './Benefits-Description.js';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';


function Homepage() {
    return (
        <motion.div className='home-wrapper'
            initial={{ opacity: 0, transition: { duration: 0.1 } }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}


        >
            <Navbar />
            <Hero></Hero>
            <Main_Description></Main_Description>
            <Benefits_Description></Benefits_Description>
            <Footer></Footer>
        </motion.div>
    )
}

export default Homepage
