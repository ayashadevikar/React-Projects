import React from "react";

function Card({myname, list}) {
    return(
        <>
           <h1>myname</h1>
           <ul>
               {list.map((l) => (
                    <li key={l}>{l}</li>
               ))}
           </ul>
        </>
    )
}

export default Card;