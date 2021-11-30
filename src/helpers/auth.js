import { auth } from '../firebase'

export function signup(name,email, password) {
  return console.log(name,email)
  // return auth().createUserWithEmailAndPassword(name,email, password);
}

export function signin(email, password) {
  return auth().signInUserWithEmailAndPassword(email, password); 
  // return auth().signInWithEmailAndPassword(email, password); signInUserWithEmailAndPassword
}

export function logout() {
  return auth().signOut()
}