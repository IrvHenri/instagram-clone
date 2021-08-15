// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAOAaJao9eW2u98TQjOSodDei9J7bKHoBA",
  authDomain: "instagram-clone-46649.firebaseapp.com",
  projectId: "instagram-clone-46649",
  storageBucket: "instagram-clone-46649.appspot.com",
  messagingSenderId: "526188297591",
  appId: "1:526188297591:web:b76407cee6c7162ab27572",
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
