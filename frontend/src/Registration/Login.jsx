import React from 'react'
import './CSS/signin.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const resetpassgoto = () => {
    navigate("/resetpass");
  }
  return (
    <div class="container">
      <div class="title">Sign in</div>
      <div class="content">
        <form action="../../../../Downloads/cs2001-2022_23-g30-Ozair/cs2001-2022_23-g30-Ozair/src/components#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input type="text" placeholder="Enter your password" />
            </div>
          </div>

          <div class="button">
            <input type="submit" value="Sign in" />
          </div>
          <div class="button">
            <input type="Password reset" value="Reset password" onClick={resetpassgoto}/>
          </div>
        </form>
      </div>
    </div>

  )
}
