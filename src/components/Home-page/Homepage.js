import React from 'react'
import Hero from './Hero.js';
// import Nav_Bar from './components/Home-page/Nav-Bar';
import Main_Description from './Main-Description.js';
import Benefits_Description from './Benefits-Description.js';
import Footer from '../Footer/Footer';

function Homepage() {
    return (
        <div>
            <Hero></Hero>
            <Main_Description></Main_Description>
            <Benefits_Description></Benefits_Description>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
