import React, { useState } from 'react';
import axios from 'axios';
import './FAQ.css'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

const FAQ = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newData = Object.assign({}, data);
    newData[name] = value;
    setData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    * 
    * Using axios to make a post request example
    * The then and catch clauses logs in the console the response from spring boot and catches errors then logs them.
    *
    */
    console.log("Form submitted: ", data);
    axios.post('http://localhost:8080/faqformsubmit', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);

      })
      .catch(error => {
        console.log(error);

      });

  };

  return(
<div>

  <Navbar />

    <div className="FAQPage">


       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"></link>

      <div id="WebHeader">
        <h3>Get in touch</h3>

        <div id="SubHeader">
          <p>Use our platforms below to contact us</p>
        </div>
      </div>

      <div className="contactInformation">
        <div className ="CardInfo">
          <i className = "card-icon far fa-envelope"></i>
          <p>Food4All@gmail.com</p>
        </div>
        <div className ="CardInfo">
          <i className = "card-icon fas fa-phone"></i>
          <p>0208 8888 000</p>
        </div>

        <div className ="CardInfo">
          <i className = "card-icon fas fa-map-marker-alt"></i>
          <p>Brunel university London</p>
        </div>
      </div>

      <div id="FAQHeader">
        <h3>Got a question? see if your answer is below!</h3>
      </div>


      <div id="form">

        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <h3>Can't find the answer to your question? Use the form below.</h3>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="your name" onChange={handleChange} required/>
          

          <label htmlFor="email">Email:</label>
          <input type="text" id="Email" name="email" placeholder="your email" onChange={handleChange} required/>
        

          <label htmlFor="message">Message:</label>
          <textarea type="message" name="message" placeholder="Your message" rows="4" onChange={handleChange} required/>
          
          <div className="center">
            <button type="submit">Send message</button>
          </div>

        </form>

      </div>
    
      <div className="container1">
        <h1>Frequently Asked Questions</h1>
        <div className="tab">
          <input type="radio" name="acc" id="acc1"></input>
          <label htmlFor="acc1">
            <h2>01</h2>
            <h3>How do I create an account?</h3>
          </label>
          <div className="content">
            <p>To create an account, click onto the signup button on the top of the
              page and fill out the neccesary details. Once your account has been
              created, you wwill be able to start donating.</p>
          </div>
        </div>

        <div className="tab">
          <input type="radio" name="acc" id="acc2"></input>
          <label htmlFor="acc2">
            <h2>02</h2>
            <h3>How do I donate?</h3>
          </label>
          <div className="content">
            <p>If you like to start donating, click onto the login button and sign in with
              your credentials. If you do not have an account, you can sign up htmlFor free.
              Once you are logged in, click on the donation page and choose whether you
              would like to donate money or donate food you have and fill the details neccesary.
            </p>
          </div>
        </div>

        <div className="tab">
          <input type="radio" name="acc" id="acc3"></input>
          <label htmlFor="acc3">
            <h2>03</h2>
            <h3>Where do the donations go?</h3>
          </label>
          <div className="content">
            <p>If you have donated money, the proceedings will be used to buy food that is 
              low on demand and food that has been donated will be sent to the food banks.
            </p>
          </div>
        </div>

        <div className="tab">
          <input type="radio" name="acc" id="acc3"></input>
          <label htmlFor="acc3">
            <h2>04</h2>
            <h3>How do I know what food to donate?</h3>
          </label>
          <div className="content">
            <p>We have a list of food on our website which shows the food that is needed the most.
              The list on the website is always up-to-date so you do not need to worry about donating
              the wrong food.
            </p>
          </div>
        </div>

        <div className="tab">
          <input type="radio" name="acc" id="acc3"></input>
          <label htmlFor="acc3">
            <h2>05</h2>
            <h3>How can I help</h3>
          </label>
          <div className="content">
            <p>If you would like to help us in any way possible such as volunteering, feel free 
              to call us and we will see if there is anything that we need help with.
            </p>
          </div>
        </div>
    </div>
    <div>

    </div>
      {/*
    <div className="container">
                <div className="top">
                    <h3>Charity Website</h3>
                    <div className="social">
                        <FaInstagram className='icons' />
                        <FaFacebook className='icons' />
                        <FaTwitter className='icons' />
                        <FaYoutube className='icons' />
                        <FaPinterest className='icons' />
                    </div>
                </div>



                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Donate</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="right">

                    </div>
                </div>


            </div>*/}



</div>


</div>

)
 

}

export default FAQ;


