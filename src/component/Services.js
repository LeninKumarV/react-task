import React from "react";
import graphic from './graphic.png';
import Java from './java.jpg';
import uiux from './uiux.png';
import web from './web.jpg';
import './Services.css';

function Services() {
    return (

        <div className="container">
            <h1>Our Services</h1>
            <div className="services">
                <div className="cards">
                    <h3>Java Development</h3>
                    <img  className="img" src={Java}/>
                    <p>A paragraph is a series of sentences that are organized and coherent,and are all </p>
                    <button>More>></button>
                </div>

                <div className="cards">
                    <h3>Web Development</h3>
                    <img  className="img" src={web}/>
                    <p>A paragraph is a series of sentences that are organized and coherent,and are all </p>
                    <button>More>></button>
                </div>

                <div className="cards">
                    <h3>Grapic Design</h3>
                    <img  className="img" src={graphic}/>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic</p>
                    <button>More>></button>
                </div>

                <div className="cards">
                    <h3>Ui Ux Design</h3>
                    <img  className="img" src={uiux}/>
                    <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic</p>
                    <button>More>></button>
                </div>
            </div>
        
        </div>



    );
}
export default Services;