import React from 'react';
import './App.css';
import Coviddata from "./Components/Coviddata";
import Message from "./Components/Message";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
        <Message />
        <Hero />
        <Coviddata />
        <About />
        <Footer />
    </div>
  );
}

export default App;
