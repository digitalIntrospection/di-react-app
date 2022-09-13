import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Home-page/Homepage';
import About from './About-page/About-page.js';
import I_Liv_Page from './I.Liv-page/ILiv-Page.js';
import Sign_Up_Page from './Sign-up-page/Sign-Up-Page.js';
import { AnimatePresence } from 'framer-motion';
import Footer from './Footer/Footer.js'



function AnimatedRoutes() {
    const location = useLocation();
    return (


        <AnimatePresence>

            < Routes location={location} key={location.pathname} >
                <Route path='/' element={<Homepage />} />
                <Route path='/About' element={<About />} />
                <Route path='/I.Liv.' element={<I_Liv_Page />} />
                <Route path='/Sign-Up' element={<Sign_Up_Page />} />

            </Routes >
            {/* <Footer></Footer> */}
        </AnimatePresence >


    )
}

export default AnimatedRoutes
