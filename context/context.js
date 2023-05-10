import React, { useState, useContext } from "react";

const MyContext = React.createContext('');

const RestProvider = ({ children }) => {
 const [ isLight, setIsLight ] = useState(false)

 return (
    <MyContext.Provider value={{ isLight, setIsLight }}> { children }</MyContext.Provider>
 )
}

const useGlobalContext = () => {
    return (
        useContext(MyContext)
    )
}

export { RestProvider, useGlobalContext }


// Fontawesome
