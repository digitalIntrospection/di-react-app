import React from 'react'
import Hero from './Hero.js';
// import Nav_Bar from './components/Home-page/Nav-Bar';
import Main_Description from './Main-Description.js';
import Benefits_Description from './Benefits-Description.js';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';


function Homepage() {
    return (
        <div className='home-wrapper'>
            <Navbar />
            <Hero></Hero>
            <Main_Description></Main_Description>
            <Benefits_Description></Benefits_Description>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
