import React from 'react'
import './signin.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  //const navigate = useNavigate;
  const Login = () => {
    //navigate("/resetpass");

    return (
        <div class="container">
          <div class="title">Sign in</div>
          <div class="content">
            <form action="../components">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" placeholder="Enter your email"/>
                </div>
                <div class="input-box">
                  <span class="details">Password</span>
                  <input type="text" placeholder="Enter your password"/>
                </div>
              </div>

              <div class="button">
                <input type="submit" value="Sign in"/>
              </div>
              <div class="button">
                <input type="Password reset" value="Reset password" onClick={Login}/>
              </div>
            </form>
          </div>
        </div>

    )
  }
}

export default Login;

