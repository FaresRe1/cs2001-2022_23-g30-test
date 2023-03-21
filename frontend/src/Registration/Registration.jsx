import React from 'react'
import './CSS/Registration.css'
import Navbar from "../components/navbar/navbar";

export default function login() {

    return (
        <div>
            <Navbar />

        <div class ="RegBody">
        <div class="container">
            <div class="title">Registration</div>
            <div class="content">
                <form >
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Full Name</span>
                            <input type="text" placeholder="Enter your name"  />
                        </div>
                        <div class="input-box">
                            <span class="details">Username</span>
                            <input type="text" placeholder="Enter your username"  />
                        </div>
                        <div class="input-box"> 
                            <span class="details">Email</span>
                            <input type="text" placeholder="Enter your email"  />
                        </div>
                        <div class="input-box">
                            <span class="details">Phone Number</span>
                            <input type="text" placeholder="Enter your number"  />
                        </div>
                        <div class="input-box">
                            <span class="details">Password</span>
                            <input type="text" placeholder="Enter your password"  />
                        </div>
                        <div class="input-box">
                            <span class="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password"  />
                        </div>
                    </div>
                    <div class="gender-details">
                        <input type="radio" name="gender" id="dot-1" />
                        <input type="radio" name="gender" id="dot-2" />
                        <input type="radio" name="gender" id="dot-3" />
                        <span class="gender-title">Gender</span>
                        <div class="category">
                            <label for="dot-1">
                                <span class="dot one"></span>
                                <span class="gender">Male</span>
                            </label>
                            <label for="dot-2"> 
                                <span class="dot two"></span>
                                <span class="gender">Female</span>
                            </label>
                            <label for="dot-3">
                                <span class="dot three"></span>
                                <span class="gender">Prefer not to say</span>
                            </label>
                        </div>
                        { <a href="forgotmypassword.jsx">Forgot my password</a> }
                    </div>
                    <div class="button" onclick="window.location.href='http://127.0.0.1:5500/signupcomplete.html';" >
                        <input type="submit" value="Register" />

                        <div class="button2" onclick="location.href='http://127.0.0.1:5500/signin.html';" >
                            <input type="submit" value="Sign in" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}