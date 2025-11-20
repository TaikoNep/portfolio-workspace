import React from "react";
import { useContext } from "react";
import { UserContext } from "/src/functions/UserContext";
import { useState } from "react";

function ChaosEmerald(props) {  
  const { user, setUser } = useContext(UserContext);
  
  async function handleClick(){
    try {
      const res = await fetch("http://localhost:5000/api/user/emeralds", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // include cookie
        body: JSON.stringify({ emerald: props.color })
      });
      
      const data = await res.json();
      setUser(data); //update user so it detects change
      console.log("Updated user:", data);
    } catch (err) {
      console.error("Failed to update emerald:", err);
    }
    
    
  }
  
  return (
    <img
    src={ props.src }
    type={ props.type }
    alt={ props.alt }
    onClick={ handleClick }
    className="emerald-icon"
    />
  );
}

export default ChaosEmerald;