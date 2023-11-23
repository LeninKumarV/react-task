import React from "react";
import aboutimg from './about.jpg';
import Same from "./Same";

function About() {
    return (
        <>
            <Same title="Know More About Us"
                text="A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
                     A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."
                imgsrc={aboutimg}
                btn="Know More>>"
            />
        </>
    );
}
export default About;