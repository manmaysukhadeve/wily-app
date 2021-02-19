import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAFpKxh3sXTmjm0s-z64mi4qpFu1dQpeN4",
  authDomain: "class-71-book-application.firebaseapp.com",
  projectId: "class-71-book-application",
  storageBucket: "class-71-book-application.appspot.com",
  messagingSenderId: "728662001684",
  appId: "1:728662001684:web:85251c54bbc580151e7f01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
