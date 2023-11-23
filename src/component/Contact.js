import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="left">
                <h1>Contact</h1>
                <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic,A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic</p>
            </div>
            <div className="right">
                <div className="login">
                    <div className="div1">
                        <div>
                            <label htmlFor="fname">First Name</label> <br></br>
                            <input type='text' name="fname" id="fname" />
                        </div>
                        <div>
                        
                            <label htmlFor="lname">Last Name</label><br></br>
                            <input type='text' name="lname" id="lname" />
                        </div>
                    </div>
                    <br></br>
                    <div className="div2">
                        <label htmlFor="email">Email</label><br></br>
                        <input type='text' name="email" id="email" />
                    </div>
                    <br></br>
                    <div className="div3">
                        <label htmlFor="question">What can we help you with ?</label><br></br>
                        <input type='text' name="question" id="question" />
                    </div>
                    <br></br>
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}
export default Contact;