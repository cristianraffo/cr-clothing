import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4LvcWgw--MGykqVrfM_ZiwCOz3oMjmrY",
    authDomain: "ecommerce-db-298e8.firebaseapp.com",
    projectId: "ecommerce-db-298e8",
    storageBucket: "ecommerce-db-298e8.appspot.com",
    messagingSenderId: "791915982151",
    appId: "1:791915982151:web:d91d7e08b619d1ddf3b062"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;