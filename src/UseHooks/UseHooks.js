import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signOut,updateProfile,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../firebase/firebase.init";


firebaseAuthentication()



const UseHooks = () =>{
    const [user, setUser] = useState()
    const [error, setError] = useState()
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const [loading, setLoading] = useState(true)
    

    const register = (email,password,name) =>{
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            createUser(name)
            setError(" ")
            saveUser(email, name)
            
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
            setLoading(false)
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
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            setError(" ")
            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        })
        .catch(error =>{
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }

    useEffect(() =>{
        fetch(`https://morning-citadel-15634.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])



    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(() =>{
            setUser({ })
        })
        .finally(() => setLoading(false))
    }



    const saveUser = (email, displayName) =>{

        const user = {email: email, displayName:displayName}


        fetch('https://morning-citadel-15634.herokuapp.com/users', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }





    return{
        admin,
        register,
        logOut,
        user,
        error,
        login,
        loading
    }



}

export default UseHooks;