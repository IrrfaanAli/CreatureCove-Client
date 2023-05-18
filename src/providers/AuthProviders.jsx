import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {


    const [ user, setUser ] = useState(null);
    const [loading,setLoading]= useState(true);


    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userlogin = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }
     

    const logout =()=>{
        setLoading(false);
         return signOut(auth);
    }

    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);
        setLoading(false);

        return ()=>{
            unsubscribe();
        }
     })
    },[])
    const authInfo = {
        user,
        createUser,
        userlogin,
        logout ,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;