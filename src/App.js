import './App.css';
import Footer from './components/Footer/Footer.js';
import Homepage from './components/Home-page/Homepage';
import About from './components/About-page/About-page.js';
import I_Liv_Page from './components/I.Liv-page/ILiv-Page.js';
import Sign_Up_Page from './components/Sign-up-page/Sign-Up-Page.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';



function App() {
  return (
    <Router >

      <ScrollToTop />

      <AnimatedRoutes />

    </Router >

  );
}

export default App;
