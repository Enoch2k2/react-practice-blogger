
export function signUp(user) {
  return dispatch => {
    return dispatch({type: "SIGN_UP", payload: user});
  };
}

export function logout(){
  return dispatch => {
    return dispatch({type: "LOGOUT"});
  }
}

export function login(user) {
  return dispatch => {
    return dispatch({type: "LOG_IN", payload: user});
  };
}
