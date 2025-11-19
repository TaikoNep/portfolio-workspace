import React from "react";

function ChaosEmerald(props) {  

   async function handleClick(){
       fetch("http://localhost:5000/api/user/68f1d17f70b9925d72a2acd6/emeralds", 
    {method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
            { emerald: props.color })
        }).then(res => res.json()).then(data => console.log("Updated user:", data))
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