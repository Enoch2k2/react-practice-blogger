import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions';

class NavBarHeader extends Component {

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/")
  }

  render(){
    const {user} = this.props;
    return(
      <nav className="inverse">
        <ul>
          <li className="pull-left"><Link to="/">Blogger</Link></li>
          {!user.loggedIn ? <li className="pull-right"><Link to="/signup">Sign Up</Link></li> : null}
          {!user.loggedIn ? <li className="pull-right"><Link to="/login">Log In</Link></li> : null}
          {user.loggedIn ? <li className="pull-right"><a href="#" onClick={this.handleLogout}>Logout</a></li> : null}
          {user.loggedIn ? <li className="pull-right"><Link to="/">{user.currentUser.username}</Link></li> : null}
        </ul>
      </nav>
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
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarHeader);
