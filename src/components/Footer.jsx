import React from "react";

function Footer() {

    const time = new Date().getFullYear();
  
    

    window.onscroll = function() {
        scrollFunction()
      };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
        } else {
          document.getElementById("movetop").style.display = "none";
        }
      };

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      };

    return(
    <div className="bottom-container">
    <a aria-hidden="true" href="https://www.linkedin.com/in/xinxia-cynthia-song-2a6954112/" className="fab fa-2x fa-linkedin-in"></a>
    <a aria-hidden="true" href="https://twitter.com/Cynthia73678917" className="fab fa-2x fa-twitter"></a>
    <a aria-hidden="true" href="https://github.com/xuesongdeyingzi" className="fab fa-2x fa-github"></a>
    <p className="footer">© {time} Xinxia (Cynthia) Song. All rights reserved.</p>
    <button onClick={topFunction} id="movetop" title="Go to top">
      <span className="fa fa-angle-up"></span>
    </button>
    </div>
    )
}

export default Footer;