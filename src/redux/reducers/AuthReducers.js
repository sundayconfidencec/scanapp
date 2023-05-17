


// export default (state,action)=>{

// switch(action.type){
//     default:
//         return state;
// }

// }



const initialState = {
    login: false,
    user: null,
    error: {}
    // Define your initial state properties here
  };
  
  export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
      // Handle different action types
      case "LOGGED_IN":
        return {...state, login:true, user:action.payload}
        case "LOGGED_OUT": 
        return {...state,login:false, user:null}
        case "SIGNUP_ERROR":
            return { ...state, error: { signup: action.payload } };
        case "LOGIN_ERROR":
            return {...state, error:{login: action.payload}}
      default:
        return state;
    }
  }

 