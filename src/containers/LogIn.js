import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {login} from '../actions';

class LogIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({
      email: '',
      password: ''
    })
    this.props.history.push("/");
  }

  render(){
    return(
      <div style={{backgroundColor: "white"}} className="clearfix">
        <h1>Log In</h1>
        <hr />
        <div className="error">
          {this.props.user.errorMessage ? this.props.user.errorMessage : null}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-1 first">
              <label htmlFor="email" className="form-label">Email</label><br/>
              <label htmlFor="password" className="form-label clear">Password</label>
              <input type="submit" value="Sign Up" className="form-label clear"/>
            </div>
            <div className="col-2">
              <input type="email" name="email" id="email" value={this.state.email} className="form-control" onChange={this.handleChange} />
              <input type="password" name="password" id="password" value={this.state.password} className="form-control" onChange={this.handleChange} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    login
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
