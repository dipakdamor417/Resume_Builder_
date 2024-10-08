import { Button } from '@material-ui/core'
import React from 'react';
import { useHistory } from "react-router-dom";

import './Main.css';

import mainImg from '../../../assets/images/svg/landingImg.svg'
import logo from '../../../assets/images/png/logo.png'


function Main() {
  let history = useHistory();

  function handleClick() {
    history.push("/create");
  }
  
    return (
        <div className="main">
            <div className="logoname-container">
                <img src={logo} alt="Resume-Builder"/>
                <span>RESUME BUILDER</span>
            </div>
            <div className="main-container">
                <div className="main-description">
                    <h1>The Ultimate Tool For An Exceptional Resume.</h1>
                    <p>Create Nothing But The Best With Us.</p>
                    <Button onClick={handleClick}>Create Resume</Button>
                </div>
                <div className="img-container">
                    <img src={mainImg} alt="Resume"/>
                </div>
            </div>  
                       
        </div>
    )
}

export default Main
