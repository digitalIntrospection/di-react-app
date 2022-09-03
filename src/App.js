import './App.css';
import Hero from './components/Home-page/Hero.js';
import Nav_Bar from './components/Home-page/Nav-Bar';
import Main_Description from './components/Home-page/Main-Description.js';
import Benefits_Description from './components/Home-page/Benefits-Description.js';
import Footer from './components/Footer.js';
import About from './components/About-page/About-page.js';
import I_Liv_Page from './components/I.Liv-page/ILiv-Page.js';
import Sign_Up_Page from './components/Sign-up-page/Sign-Up-Page.js';
import renderHTML from 'react-render-html';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header"> */}
      {/* <Nav_Bar></Nav_Bar> */}

      {/* </header> */}
      <Hero></Hero>
      <Main_Description></Main_Description>
      <Benefits_Description></Benefits_Description>
      <Footer></Footer>
      {/* <About></About> */}
      {/* <I_Liv_Page></I_Liv_Page> */}
      {/* <Sign_Up_Page></Sign_Up_Page> */}
    </div>
  );
}

export default App;
