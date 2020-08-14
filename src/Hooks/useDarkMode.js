import React, {useState, useEffect} from "react";
import useLocalStorage from "../Hooks/useLocalStorage"


export default function UseDarkMode(){
    const [darkMode, setDarkMode] = useLocalStorage("mode");
useEffect(()=>{
    darkMode === true
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode")
}, [darkMode]);

return [darkMode, setDarkMode]
}

