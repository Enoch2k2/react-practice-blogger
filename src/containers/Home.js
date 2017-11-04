import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render(){

    const nerdKid = require('../images/nerd-kid.jpg');
    return (
      <div style={{backgroundColor: 'white'}} className="clearfix">
        <h1>Welcome To Blogger</h1>
        <hr />
        <div className="row">
          <div className="col-1 first">
            <h3 style={{textAlign: "center", backgroundColor: "black", color: "white"}}>Have an account?</h3>
            <p style={{textAlign: "center"}}>Log in <Link to="/login">here</Link>.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <h2 id="home-subheader">For nerds only!</h2>
            <img src={nerdKid} alt="nerdy kid" style={{height: "50%", width: "50%"}}/>
            <p>Are you a nerd that loves to blog?</p>
            <p>Want to meet many people who share the same interest as you do?</p>
            <p>Click <Link to="/signup">here</Link> to create an account!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
