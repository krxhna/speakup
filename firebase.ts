// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD49mJrQ_hzc4swJR7iza3FMf0jgYcoBBc",
  authDomain: "west-idol.firebaseapp.com",
  projectId: "west-idol",
  storageBucket: "west-idol.appspot.com",
  messagingSenderId: "72065637719",
  appId: "1:72065637719:web:f320a5176835699cdaf212",
  measurementId: "G-5QZ3YBNLPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const userCollection = collection(db, 'users');

export function uploadToCloud(file: any) {
  if (file == null) {
    return;
  }
  const storageRef = ref(storage, `files/${file.name}`);

  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
}

export { auth, db, storage };