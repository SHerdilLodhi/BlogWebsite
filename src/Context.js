import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({children}) => {
 const [user, setuser] = useState( localStorage.getItem("userLoggedIn")? 
                                   JSON.parse(localStorage.getItem("userLoggedIn")):null
                                 )



 function Login (payload)
 {
    localStorage.setItem("userLoggedIn", JSON.stringify(payload))
    setuser(payload)
 }
function Logout(){
    
    localStorage.removeItem("userLoggedIn")
    setuser(null)
    
}
 
  return (
    <MyContext.Provider value={{user, setuser, Login, Logout}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;