import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD4Ha3MRadGfNnPEO9fuvx1tvjY58t231k",
    authDomain: "ubgram-53407.firebaseapp.com",
    projectId: "ubgram-53407",
    storageBucket: "ubgram-53407.appspot.com",
    messagingSenderId: "194793191919",
    appId: "1:194793191919:web:366c42ac1934579a745e1a"
}).auth();