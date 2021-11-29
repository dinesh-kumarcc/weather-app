import { initializeApp } from 'firebase/app';
import firebase from 'firebase';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
        apiKey: "AIzaSyCPJ7hOVCU6dXGyfrLlGVhu0L0ukVQNKfA",
    authDomain: "login-to-weather.firebaseapp.com",
    projectId: "login-to-weather",
    storageBucket: "login-to-weather.appspot.com",
    messagingSenderId: "725217149992",
    appId: "1:725217149992:web:83f2fa79794cf91a9c611d",
    measurementId: "G-LNG5Z4BFVH"
};

const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default app;
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // import firebase from "firebase/app";
// // import "firebase/auth";
// const config = {
//     apiKey: "AIzaSyCPJ7hOVCU6dXGyfrLlGVhu0L0ukVQNKfA",
//     authDomain: "login-to-weather.firebaseapp.com",
//     projectId: "login-to-weather",
//     storageBucket: "login-to-weather.appspot.com",
//     messagingSenderId: "725217149992",
//     appId: "1:725217149992:web:83f2fa79794cf91a9c611d",
//     measurementId: "G-LNG5Z4BFVH"
// };
// firebase.initializeApp(config);
// export const auth = firebase.auth();
// // export default app;











// import app from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firebase-firestore'

// const config = {
//     apiKey: "AIzaSyCPJ7hOVCU6dXGyfrLlGVhu0L0ukVQNKfA",
//     authDomain: "login-to-weather.firebaseapp.com",
//     projectId: "login-to-weather",
//     storageBucket: "login-to-weather.appspot.com",
//     messagingSenderId: "725217149992",
//     appId: "1:725217149992:web:83f2fa79794cf91a9c611d",
//     measurementId: "G-LNG5Z4BFVH"
// }

// class Firebase {
//     constructor() {
//         app.initializeApp(config)
//         this.auth = app.auth()
//         this.db = app.firestore()
//     }

//     login(email, password) {
//         return this.auth.signInWithEmailAndPassword(email, password)
//     }

//     logout() {
//         return this.auth.signOut()
//     }

//     async register(name, email, password) {
//         const resp = await this.auth.createUserWithEmailAndPassword(name, email, password)
//         return resp.user
//         // return this.auth.currentUser.updateProfile({
//         //     displayName : name
//         // })
//     }
// }
// export default new Firebase()