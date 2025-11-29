import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function PasswordGenerator() {

    const [Password, setPassword] = useState("ABIDHDKKD");
   const [Length, setLength] = useState(10);

    return (
        <>
            <h1>Password is: {Password}</h1>
            <div className="second">
                <input type="range" min={5} max={50}></input>
                <label>Length is:{Length}</label>

                <input type="checkbox"></input>
                <label>Number</label>
                   
                   <input type="checkbox"></input>
                   <label> Character</label>

            </div>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator />);