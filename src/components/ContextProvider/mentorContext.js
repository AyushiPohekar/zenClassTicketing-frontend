import React, { Children, createContext } from 'react';
import { useState } from 'react';



export const MentorLoginContext=createContext("");

const MentorContext = ({children}) => {

    const [logindata,setLoginData]=useState("");
  return (
  <>
  <MentorLoginContext.Provider value={{logindata,setLoginData}}>
  {children}
  </MentorLoginContext.Provider>
  </>
  )
}

export default MentorContext;