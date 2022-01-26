var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAXfZswqrQ6dIC2tfmXxArGrPAbBUUjskk",
    authDomain: "netflix-clone-vikashirave.firebaseapp.com",
    projectId: "netflix-clone-vikashirave",
    storageBucket: "netflix-clone-vikashirave.appspot.com",
    messagingSenderId: "442224177665",
    appId: "1:442224177665:web:20b71f8134cb591e790600"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;