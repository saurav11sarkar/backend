import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('london');

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=46237513-7fd8b04ba552e65d2e6c81557&q=${query}&image_type=photo&pretty=true&per_page=100`)
        .then(res=>res.json())
        .then(data=>setImages(data.hits))
    },[query])

    const handleClick =(cat)=>{
        fetch(`https://pixabay.com/api/?key=46237513-7fd8b04ba552e65d2e6c81557&category=${cat}&image_type=photo&pretty=true&per_page=100`)
        .then(res=>res.json())
        .then(data=>setImages(data.hits))
    }

    const authInfo = { images, setImages,handleClick,setQuery };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;