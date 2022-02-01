import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyD8te3wUBgmNP3t_FoeJPH7IQX_4VawCyk",
  authDomain: "crwn-db-c9c0a.firebaseapp.com",
  projectId: "crwn-db-c9c0a",
  storageBucket: "crwn-db-c9c0a.appspot.com",
  messagingSenderId: "1000755801043",
  appId: "1:1000755801043:web:e6d34c2ea1ed0f7ecb1d26",
  measurementId: "G-5K0XX02CL3"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;