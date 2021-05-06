import React, { useState } from 'react'
import firebase from 'firebase'

firebase.initializeApp ({
    apiKey: "AIzaSyCaeHp9Qw_Hf5TZLWMfTnAQObqVvutI2Nc",
    authDomain: "affirmation-fc.firebaseapp.com",
    projectId: "affirmation-fc",
    storageBucket: "affirmation-fc.appspot.com",
    messagingSenderId: "784401317934",
    appId: "1:784401317934:web:48ba388c14c2a7f7821fbf"
})

function LoginButton() {
    const [user, setUser] = useState(null)
    const clickHandler = () => {
        if (user) {
            setUser(null)
        } else {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
                .then(res => setUser(res.user))
                .catch(err => alert(err))
        }
    }
    return (
        <button onClick={() => clickHandler()}>#</button>
    )
}

export default LoginButton