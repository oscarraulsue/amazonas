import {types} from '../types/types';
import {  getAuth, signInWithPopup,signInWithEmailAndPassword,signOut  } from "firebase/auth";
import { facebook, google } from "../firebase/firebaseConfig";

export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
           console.log(user)
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
         

       })
       .catch(e =>{
           console.log(e);
            console.log('El usuario no existe');
       })
    }
}

export const loginGoogle = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}
export const loginFacebook = () => {

    return(dispatch) => {
    const auth = getAuth();
       
        signInWithPopup(auth,facebook)
        .then(({user}) => {
          dispatch(loginSincrono(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {

    return{
       type: types.login,
       payload: {
           id,
           displayname
       }
    }
}


//logout

export const logout = () => {
     return async(dispatch) => {
         const auth = getAuth();
             await signOut(auth);
             dispatch(logoutSincrono());

     }
}


export const logoutSincrono = () => {
    return{
        type: types.logout,
    }
}
