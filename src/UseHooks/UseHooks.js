import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signOut,updateProfile,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../firebase/firebase.init";


firebaseAuthentication()



const UseHooks = () =>{
    const [user, setUser] = useState()
    const [error, setError] = useState()
    const auth = getAuth();
    

    const register = (email,password,name) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            createUser(name)
        }) 
        .catch(error =>{
            setError(error.message)
        })
    }


    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({ })
            }
        })
       
    },[])

    const createUser = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(() =>{

        })
    }

    const login = (email,password,navigate,location) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        })
        .catch(error =>{
            setError(error.message)
        })
    }



    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({ })
        })
    }


    return{
        register,
        logOut,
        user,
        error,
        login
    }



}

export default UseHooks;