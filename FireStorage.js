// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCssUAgktai--XoU4n54paenbtau12Ni40",
  authDomain: "netflix-clone-9cb17.firebaseapp.com",
  projectId: "netflix-clone-9cb17",
  storageBucket: "netflix-clone-9cb17.firebasestorage.app",
  messagingSenderId: "859579712098",
  appId: "1:859579712098:web:4843f0a76bcc10f3e2073b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const approveSignUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection (db, "user"), {
            uid: user.uid,
            name: name,
            email: email,
            authProvider: "Local",
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logOut = () => {
    signOut(auth)
}

export {auth, db, login, approveSignUp, logOut};