import React, {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage"


export const useDarkMode = (){
    const [darkMode, setDarkMode] = useLocalStorage("active");
useEffect(()=>{
    darkMode === true
    ? document.body.classList.add()
    : document.body.classList.remove()
}, [darkMode]);

return [darkMode, setDarkMode]
}