import { initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBgc_dusJtwmLvt3lmaNCi00D3Rs-vsDc0",
    authDomain: "knock-knoc.firebaseapp.com",
    databaseURL: "https://knock-knoc-default-rtdb.firebaseio.com",
    projectId: "knock-knoc",
    storageBucket: "knock-knoc.appspot.com",
    messagingSenderId: "416238582986",
    appId: "1:416238582986:web:838c9becc52bd551370833",
    measurementId: "G-XY4BVLV73N"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {app, db, storage, auth , provider};