
import ActionTypes from '../constant/constant';
import *as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkhH4uLWHVBCVd5wtIvK6l6p9BLTZXBLs",
  authDomain: "todo-app-2411f.firebaseapp.com",
  databaseURL: "https://todo-app-2411f.firebaseio.com",
  projectId: "todo-app-2411f",
  storageBucket: "todo-app-2411f.appspot.com",
  messagingSenderId: "213722828277"
};
firebase.initializeApp(config);




// export function deleteTodoAction(id) {
//   // console.log('action work')
//   return dispatch => {
//     firebase.database().ref(`/reduxTodos/${id}`).remove();
//   }
// }

export function signupAction(email){
  console.log('action work', email)
  return dispatch => {
    console.log('email', email)
    
  }
}
