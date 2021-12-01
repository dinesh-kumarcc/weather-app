// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "@firebase/firestore";

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
// const db=firebase.firestore();
// onAuthStateChanged(auth, user => {
//     return user
//     // Check for user status
//   });
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const database = getDatabase(firebaseConfig)










// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getDatabase } from "firebase/database";

// // import firebase from 'firebase/compat/app';
// // import 'firebase/compat/auth';
// // import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCPJ7hOVCU6dXGyfrLlGVhu0L0ukVQNKfA",
//     authDomain: "login-to-weather.firebaseapp.com",
//     projectId: "login-to-weather",
//     storageBucket: "login-to-weather.appspot.com",
//     messagingSenderId: "725217149992",
//     appId: "1:725217149992:web:83f2fa79794cf91a9c611d",
//     measurementId: "G-LNG5Z4BFVH"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// export { auth, database }

// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// // export const db = firebaseApp.firestore();

// // export const auth = getAuth(firebaseApp);


// // export default db;




















// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCPJ7hOVCU6dXGyfrLlGVhu0L0ukVQNKfA",
//     authDomain: "login-to-weather.firebaseapp.com",
//     projectId: "login-to-weather",
//     storageBucket: "login-to-weather.appspot.com",
//     messagingSenderId: "725217149992",
//     appId: "1:725217149992:web:83f2fa79794cf91a9c611d",
//     measurementId: "G-LNG5Z4BFVH"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const db = firebaseApp.firestore();

// export const auth = firebase.auth();
// export default db;















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