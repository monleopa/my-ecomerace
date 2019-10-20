import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyArGxcDaS_KuGpXKpFAdc2wnK142QPjaa4",
    authDomain: "my-ecomerace.firebaseapp.com",
    databaseURL: "https://my-ecomerace.firebaseio.com",
    projectId: "my-ecomerace",
    storageBucket: "my-ecomerace.appspot.com",
    messagingSenderId: "697388412039",
    appId: "1:697388412039:web:743a70ca85e984c9179c22",
    measurementId: "G-R0KYQ0KDGE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    } 
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;