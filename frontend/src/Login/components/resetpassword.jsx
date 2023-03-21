import React, { Component } from 'react'

export class resetpassword extends Component {
  render() {
    return (
        <div class="container">
    <div class="title">Forgot my password</div>
    <div class="content">
      <form action='../components'  >
        <div class="user-details">
          <div class="input-box">
            <span class="details">Name</span>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div class="input-box">
            <span class="details">Eamil Address</span>
            <input type="text" placeholder="Enter your password" />
          </div>
        </div>

        <div class="button">  
          <input type="submit" value="Send email" />
        </div>
      </form>
    </div>
  </div>
    )
  }
}

export default resetpassword