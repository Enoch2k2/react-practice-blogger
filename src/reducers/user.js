export default function(state={loggedIn: false, users: [], friends: [], currentUser: null, errorMessage: null}, action){
  switch(action.type){
    case "SIGN_UP":
      if(!action.payload.email || !action.payload.username || !action.payload.password){
        return Object.assign({}, state, {errorMessage: "All fields must be filled out"});
      } else if (state.users.find(user => user.username === action.payload.username || user.email === action.payload.email)) {
        return Object.assign({}, state, {errorMessage: "User already exists"});
      } else {
        return Object.assign({}, state, {loggedIn: true, users: [...state.users, action.payload], currentUser: action.payload, errorMessage: null});
      }
    case "LOG_IN":
      var user = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);
      if(user){
        return Object.assign({}, state, {loggedIn: true, currentUser: user, errorMessage: null});
      } else {
        return Object.assign({}, state, {errorMessage: "Email or password invalid"})
      }
    case "LOGOUT":
      return Object.assign({}, state, {loggedIn: false, currentUser: null})
    default:
      return state;
  }
}
