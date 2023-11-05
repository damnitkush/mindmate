// Import the functions you need from the SDKs you need
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { app } from "../firebase.config";

// Initialize Firebase

const auth = getAuth(app);
const db = getFirestore(app);

// Google Login
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        fname: user.displayName.split(" ")[0],
        lname:
          user.displayName.split(" ")[user.displayName.split(" ").length - 1],
        email: user.email,
        authProvider: "Google",
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Signup with Email And Password
const signupWithEmail = async (fname, lname, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      fname,
      lname,
      email,
      authProvider: "Local",
    });

    // alert("User registered successfully");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const loginWithEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Reset Password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password Reset Email sent !");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Logout
const logout = async () => {
  await signOut(auth);
  toast.success("Logged out successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

// Get User Details
const getUser = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  let userDetails = [];
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    // console.log(doc.data());
    userDetails.push(doc.data());
  });
  return userDetails;
};

export {
  auth,
  db,
  signInWithGoogle,
  signupWithEmail,
  //   signInWithGithub,
  loginWithEmail,
  resetPassword,
  getUser,
  logout,
};
