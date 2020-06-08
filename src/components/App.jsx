import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Feature from "./Feature";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import './App.css';
;
function App() {
    return(
        <div>
            <Header />
            <About />
            <hr/>
            <Feature />
            <hr/>
            <br/>
            <Experience />
            <hr/>
            <Project />
            <hr/>
            <Contact />
            <Footer />
        </div>
    )
}

export default App;