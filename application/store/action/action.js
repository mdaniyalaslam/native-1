
import ActionTypes from '../constant/constant';
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAM3MBoYRlRhmmbIwCw7QdZV4u05SS_yuA",
  authDomain: "hello-js-world.firebaseapp.com",
  databaseURL: "https://hello-js-world.firebaseio.com",
  projectId: "hello-js-world",
  storageBucket: "hello-js-world.appspot.com",
  messagingSenderId: "916219320803"
};
firebase.initializeApp(config);


export function signupAction(user) {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((signedinUser) => {
        // this.props.navigation.navigate("signin")
        
        user.uid = signedinUser.uid;
        firebase.database().ref('/').child(`users/${user.uid}`).set(user)
      })
      .catch((error) => {
        console.log(error.message)
        dispatch({ type: ActionTypes.SIGNUPERR, payload: error.message }); 
        
      });
    console.log('done')
        // this.props.navigation.navigate("signin")
    
  }
}


