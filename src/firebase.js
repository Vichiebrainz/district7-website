import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { useToasts } from 'react-toast-notifications';



// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAD_mDHvYov9DDFvetAlnjEs9-OgqFp9f4",
    authDomain: "district7-temp.web.app",
    projectId: "district7-temp",
    storageBucket: "district7-temp.appspot.com",
    messagingSenderId: "717116278296",
    appId: "1:717116278296:web:c39a00ea857032c1afa56d",
    measurementId: "G-PXNWWKWT5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' })
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const signInWithGoogle = async (addToast) => {
    try {
        const res = await signInWithPopup(auth, provider);
        addToast('Login Success!', { appearance: 'success', autoDismiss: true, });
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        addToast(err.message, { appearance: 'error', autoDismiss: true, });

    }
};

const logInWithEmailAndPassword = async (email, password, addToast) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        addToast('Login Success!', { appearance: 'success', autoDismiss: true, });
    } catch (err) {
        console.error(err);
        addToast(err.message, { appearance: 'error', autoDismiss: true, });
    }
};
const registerWithEmailAndPassword = async (email, password, addToast) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        addToast('Sign up Success!', { appearance: 'success', autoDismiss: true, });

        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        addToast(err.message, { appearance: 'error', autoDismiss: true, });
    }
};
const sendPasswordReset = async (email, addToast) => {
    try {
        await sendPasswordResetEmail(auth, email);
        addToast("Password reset link sent!", { appearance: 'info', autoDismiss: true, });
    } catch (err) {
        console.error(err);
        addToast(err.message, { appearance: 'error', autoDismiss: true, });
    }
};
const logout = (addToast) => {
    signOut(auth);
    addToast('Logged out!', { appearance: 'info', autoDismiss: true, });
};
export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};




