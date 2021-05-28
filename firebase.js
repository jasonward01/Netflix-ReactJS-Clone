import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQDpOcSMzIhFB5lZBRJ6sM7lTzuN_8PTU",
  authDomain: "netflyxx-578ff.firebaseapp.com",
  projectId: "netflyxx-578ff",
  storageBucket: "netflyxx-578ff.appspot.com",
  messagingSenderId: "1046553305762",
  appId: "1:1046553305762:web:9f39e81cb0d6a72346adfb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
