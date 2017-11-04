import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import NavBarHeader from './components/NavBarHeader';
import {Home, LogIn, SignUp, UserHome} from './containers';
import './App.css';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="container clearfix">
        <NavBarHeader history={this.props.history} />
        <Switch>
          {!user.loggedIn ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={UserHome} />}
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users/" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
