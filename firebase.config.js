import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

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

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore =getFirestore(app);

const storage = getStorage(app);

export {app, firestore, storage};