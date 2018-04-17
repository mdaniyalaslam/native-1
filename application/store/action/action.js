
import ActionTypes from '../constant/constant';
import *as firebase from 'firebase';

// Initialize Firebase
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




// export function deleteTodoAction(id) {
//   // console.log('action work')
//   return dispatch => {
//     firebase.database().ref(`/reduxTodos/${id}`).remove();
//   }
// }

export function signupAction(email, password){
  // console.log('action work', email)
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((r) => {
        let db = firebase.database().ref('/').child(`users/${r.uid}`)
        db.set(this.state).then((result) => {
            console.log("Account Create Suuccessfully")
            this.props.navigation.navigate("login")
        })
    })
    .catch((error) => {
        var errorMessage = error.message;
        console.log(error)
    });
    
  }
}
