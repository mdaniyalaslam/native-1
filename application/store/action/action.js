
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


  export function signupAction(user) {
    console.log("u", user)
    // return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                console.log('signed up successfully', signedinUser.uid);
                // delete user.password;
                // delete user.confirmPassword;
                // user.uid = signedinUser.uid;
                firebase.database().ref('/').child(`users${user.uid}`).set(user)
                this.props.navigation.navigate('home');


                 
            })
            .catch((error) => {
                console.log(error.message)
              });
            // }
            return dispatch => dispatch({ type: ActionTypes.USER, payload: user });
}












// export function deleteTodoAction(id) {
//   // console.log('action work')
//   return dispatch => {
//     firebase.database().ref(`/reduxTodos/${id}`).remove();
//   }
// }


// export function signupAction(email, password){
//   console.log('action work', email, password)

//   return dispatch => {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((signedinUser) => {
//       console.log(signedinUser) 
//     //     let db = firebase.database().ref('/').child(`users/${signedinUser.uid}`)
//     //     db.set(this.state).then((result) => {
//     //         console.log("Account Create Suuccessfully")
//     //         // this.props.navigation.navigate("login")
//     //     })
//     })
//     .catch((error) => {
//         var errorMessage = error.message;
//         console.log(errorMessage)
//         // dispatch({ type: ActionTypes.ERROR, payload: errorMessage });
//       });
    
//      }
// }




// export function signinAction(user) {


//   return dispatch => {
//       console.log('user in signin as', user);
//       firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//           .then((signedinUser) => {
//               let currentId = firebase.auth().currentUser.uid;
//               firebase.database().ref('hackusers/' + currentId + '/').once('value', (snapshot) => {

//                   let name = snapshot.val();
//                   console.log('name is ', name)
//                   let userName = name.username;

//                   dispatch({ type: ActionTypes.USERNAME, payload: userName });

//               })
//               History.push('/panel')

//               firebase.database().ref('hackusers/').once('value')
//                   .then((userData) => {
//                       let allUsers = userData.val();
//                       let currentUserUid = firebase.auth().currentUser.uid;
//                       let allUsersArr = [];
//                       for (var key in allUsers) {
//                           allUsersArr.push(allUsers[key]);
//                       }
//                       console.log('all user array is ', allUsersArr);
//                       dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
//                       dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })




//                   })



//           })
//   }

// }