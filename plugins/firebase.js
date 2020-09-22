import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCMVx_gIbFebvnwUJbrxB7-Np2Oy7ZITzs",
        authDomain: "gamechat-9cf1b.firebaseapp.com",
        databaseURL: "https://gamechat-9cf1b.firebaseio.com",
        projectId: "gamechat-9cf1b",
        storageBucket: "gamechat-9cf1b.appspot.com",
        messagingSenderId: "880661485423",
        appId: "1:880661485423:web:9e54efd0d73efc0f787a9a"
    })
}

export default firebase