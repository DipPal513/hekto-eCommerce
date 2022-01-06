
import { useState, useEffect } from 'react';
import {getIdToken, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';



// initialize Authentication
initializeAuthentication();

const useFirebase = () => {


    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');




    const handleGoogleLogin = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;


                // The signed-in user info.
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT');

                setUser(result.user)
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        })
            .finally(() => setIsLoading(false));
    };


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])





    const registerUser = (email, password, location, history) => {
        setIsLoading(true);

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;
                const newUser={email};
                //seving data to state
                setUser(newUser);
                //save user to databse
                saveUser(email,'null','POST');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));
    };







    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errrorMessage = error.message;
            })
            .finally(() => setIsLoading(false));

    }

    //observer use state
    useEffect(()=>{
        const unsubcribed=onAuthStateChanged(auth,(user)=>{
            if (user){
                setUser(user);
                getIdToken(user)
                    .then(idToken=>{
                        setToken(idToken);
                    })
            }else {
                setUser({});
            }
            setIsLoading(false)
        });

    },[])


    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    useEffect(() => {
        fetch(`https://desolate-depths-52945.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email]);



    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        console.log(user);
        fetch('https://desolate-depths-52945.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then()


    }



    return {
        user,
        isLoading,
        handleGoogleLogin,
        registerUser,
        loginUser,
        logout,token,admin

    }
}

export default useFirebase;