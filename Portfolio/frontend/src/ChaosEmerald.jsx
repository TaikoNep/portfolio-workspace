import React from "react";

function ChaosEmerald(props) {  

   async function handleClick(){
     try {
    const res = await fetch("http://localhost:5000/api/user/emeralds", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // include cookie
      body: JSON.stringify({ emerald: props.color })
    });

    const data = await res.json();
    console.log("Updated user:", data);
  } catch (err) {
    console.error("Failed to update emerald:", err);
  }
//     try{
//        fetch(`http://localhost:5000/api/user/emeralds`, 
//         {method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             credentials: "include",
//             body: JSON.stringify(
//                 { emerald: props.color })
//         }).then(res => res.json()).then(data => console.log("Updated user:", data))
   
//     }catch (err){
//         console.error("Failed to update emerald:", err)
//    }

   }

   return (
      <img
        src={ props.src }
        type={ props.type }
        alt={ props.alt }
        onClick={ handleClick }
        />
   );
}

export default ChaosEmerald;