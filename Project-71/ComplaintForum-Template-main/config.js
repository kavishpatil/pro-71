import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 
    apiKey: "AIzaSyDNWtx1YSmelA4uaBq6ipPUbgjOWKxK1AU",
    authDomain: "complaint-fourm-37042.firebaseapp.com",
    projectId: "complaint-fourm-37042",
    storageBucket: "complaint-fourm-37042.appspot.com",
    messagingSenderId: "946742032278",
    appId: "1:946742032278:web:5025cbb96ff2e6a2104fb7"
  
  

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

