import React from 'react';


// components
import Hero from '../components/home/Hero';
import NavTwo from '../components/general/top-nav';
import Projects from '../components/home/Projects';
import Gallery from '../components/home/PhotoSwipe';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Resume from '../components/home/Resume';
import Footer from '../components/general/Footer';





const Mainpage = () => {
    
    return (

        <div className="fade animationfade"> 
            <Hero />
            <Projects />
            <Gallery />
            <NavTwo />
            <About />
            <Skills />
            <Resume />
            <Footer />

        </div>
    );
};
export default Mainpage;