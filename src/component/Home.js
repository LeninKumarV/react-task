import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "./home.png";
import './Home.css';
import Same from "./Same";

function Home(){
    return(
        <>
            <Same title="Learning Made Easy"
                  text="A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
                  imgsrc={homeimg}
                  btn="Read More>>"
/>
        </>
    );
}
export default Home;