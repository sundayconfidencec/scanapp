import firebase from "../../firebase/Firebase";


export function SignupAccount(email, password){
   return async (dispatch)=>{
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        //console.log(user);
        dispatch(loggedIn(user))
    } catch (error) {
        dispatch(signupError(error.message))
        
    }
   }
}

export function LoginAccount(email, password){
    return async (dispatch)=>{
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(user);
            dispatch(loggedIn(user))
        } catch (error) {
            dispatch(loginError(error.message))
            console.log(error);
        }
       }
}
export function Logout(){
    return async (dispatch)=>{
        try {
            await firebase.auth().signOut()
          dispatch(loggedOut())
        } catch (error) {
            console.log(error);
        }
       }
}

function loggedIn(user){
    return {
        type: "LOGGED_IN",
        payload: user
    }
}
function loggedOut(){
    return {
        type: "LOGGED_OUT"
    }
}

export const signupError = (error) => {
    return {
      type: "SIGNUP_ERROR",
      payload: error
    };
  };
  
export function loginError(error){
    return {
        type: "LOGIN_ERROR",
        payload: error
        
    }
  }

