import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
     apiKey: "AIzaSyD4gwXtpZeADDkt2qkYQFDNwqj2FSjgwGg",
     authDomain: "chivalore-blog.firebaseapp.com",
     projectId: "chivalore-blog",
     storageBucket: "chivalore-blog.appspot.com",
     messagingSenderId: "410089036854",
     appId: "1:410089036854:web:add34e440dfebf7d278c97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();