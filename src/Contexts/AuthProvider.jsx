import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);

        const [loading,setLoading]= useState(true);
    // createUser
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //loginUser
   const signInUser =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }
  
//    onAuthStateChanged(auth,(currentUser)=>{
//     if(currentUser){
//         console.log('has current user',currentUser);
//     }
//     else{
//         console.log('has no user',currentUser);
//     }
//    })


//    SignOut

 const signOutUser =()=>{
    setLoading(true);
    return signOut(auth)
 }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
           console.log("CurrentUser inside useEffect ",currentUser);
          
           setUser(currentUser);
           setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser
    }
    return (
        
            <AuthContext value={userInfo}>
           {children}
            </AuthContext>
       
    );
};

export default AuthProvider;