import './App.css';
import Footer from './components/Footer/Footer.js';
import Homepage from './components/Home-page/Homepage';
import About from './components/About-page/About-page.js';
import I_Liv_Page from './components/I.Liv-page/ILiv-Page.js';
import Sign_Up_Page from './components/Sign-up-page/Sign-Up-Page.js';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router >
      <ScrollToTop />
      {/* <Navbar /> */}
      {/* <Homepage>s</Homepage> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/About' element={<About />} />
        <Route path='/I.Liv.' element={<I_Liv_Page />} />
        <Route path='/Sign-Up' element={<Sign_Up_Page />} />

        {/* <Route path='/products' component={Products} /> */}
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Routes>
      {/* <Footer></Footer> */}
      {/* <Navbar /> */}
      {/* // className="App"> */}
      {/* <Navbar></Navbar> */}

      {/* <header className="App-header"> */}
      {/* <Nav_Bar></Nav_Bar> */}

      {/* </header> */}
      {/* <Hero></Hero>
      <Main_Description></Main_Description>
      <Benefits_Description></Benefits_Description>
      <Footer></Footer> */}
      {/* <About></About> */}
      {/* <I_Liv_Page></I_Liv_Page> */}
      {/* <Sign_Up_Page></Sign_Up_Page> */}
    </Router>
  );
}

export default App;
