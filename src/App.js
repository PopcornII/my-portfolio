
import React from "react";
import NavBar from "./components/NavBar";
import './index.css'
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"




function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <SocialLinks/>
      <Contact/>
    </div>
   
  );
}

export default App;
