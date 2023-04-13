import React, { useContext } from "react";
import { myContext } from "../App";

const UserCard = () => {
    const data = useContext(myContext);
    return(
        <>
          <div>My name is: {data.name}</div>
        </>
    );
}

export default UserCard;