//import React from 'react';
import Navbar from "./navbar/navbar";
import Hero from "./hero/Hero";
import Footer from "./footer/footer"
import {Link} from "react-router-dom";
import Video from "../assets/FrontPage/FoodDonationVideo.mp4";
import {AiOutlineSearch} from "react-icons/ai";
import './HeroStyles.css'
import './HomepageStyles.css'
import React, { useState } from "react";


function Homepage(props) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        // Do something with inputValue
        console.log("Input value:", inputValue);
    };

    return (
        <div>
            <Navbar />

            {/*Hero Component*/}

            <div className='hero'>
                <video autoPlay loop muted id='video'>
                    <source src={Video} type='video/mp4' />
                </video>
                <div className="overlay"></div>
                <div className="content">
                    <h1>What is Food 4 ALL?</h1>
                    <p className="para">
                        <h2>Are you looking to make a difference in your community?
                            Consider donating food or money to those in need!</h2>
                    </p>
                    <p className="para2">
                        <h3>
                        Your contribution, no matter how small, can provide a lifeline for people facing hunger and food insecurity. Whether it's a local food bank or a national charity, your donation can help ensure that families and individuals have access to nutritious food and basic necessities.
                        Join us today and help make a positive impact in someone's life!
                        </h3>
                        </p>

                    {/*
                    <form className="form">
                        <div>
                            <input type="text" placeholder='Search'/>
                        </div>
                        <div>
                            <button><AiOutlineSearch className='icons'/> </button>
                        </div>
                    </form>
                    */}
                </div>
                <div>

                </div>
            </div>


        </div>
    );
}




export default Homepage;