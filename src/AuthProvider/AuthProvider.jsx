import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    const axiosPublic = useAxiosPublic();

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);

        return signInWithPopup(auth, googleProvider);
    }

    const logoutUser = () => {
        setLoading(true);

        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        //     if (currentUser) {
        //         const userInfo = { 
        //             email: currentUser?.email,
        //             name: currentUser?.displayName,
        //             photo: currentUser?.photoURL,
        //             admin: false,
        //             agent: false,
        //             fraud: false,
        //         }
        //         axiosPublic.post('/users', userInfo)
        //             .then(res => {
        //                 if (res.data) {
        //                     console.log(res.data);
        //                     // localStorage.setItem('access-token', res.data.token);
        //                     // setLoading(false);
        //                 }
        //             })
        //     }
        //     // else {
        //     //     localStorage.removeItem('access-token');
        //     //     setLoading(false);
        //     // }
        });

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, signInUser, googleLogin, logoutUser, updateUserProfile }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;