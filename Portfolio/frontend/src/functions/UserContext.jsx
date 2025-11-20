import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState("");

  useEffect(() => {
  fetch("http://localhost:5000/api/init", {
    credentials: "include",
  })
    .then(res => res.json())
    .then(data => {console.log("User initialized:", data);
    setUser(data.user)});
  }, []);



  return(
    <UserContext.Provider value={{user, setUser}}>
        {/*Anything inside can reference user and setUser values*/}
        {children}
    </UserContext.Provider>
  );
};