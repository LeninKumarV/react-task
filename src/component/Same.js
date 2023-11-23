import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "./home.png";
import './Home.css';

function Same(props){
    return(
        <div className="home">
        <div className="left">
            <h1> {props.title} </h1>
            <p> {props.text} </p>
            <div className="readmore">
                <button>
                <NavLink to="/about" className='link'> {props.btn} </NavLink>
                </button>
            </div>
        </div>

        <div className="right">
            <img className="img" src={props.imgsrc}/>
        </div>
</div>
    );
}
export default Same;