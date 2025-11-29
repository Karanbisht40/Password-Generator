import React, { useState } from "react";
import ReactDOM from "react-dom/client";


function PasswordGenerator() {

    const [Password, setPassword] = useState("ABIDHDKKD");
   const [length, setLength] = useState(10);
   const [numberChanged, setnumberChanged] = useState(false);
   const [charChanged, setcharChanged] = useState(false);

    return ( 
        <> 
            <h1>Password is: {Password}</h1>
            <div className="second">
                <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length({length})</label>

                <input type="checkbox" defaultChecked={numberChanged} onChange={()=> setnumberChanged(!numberChanged)}></input>
                <label>Number</label>
                   
                   <input type="checkbox" defaultChecked={charChanged} onChange={()=> setnumberChanged(!charChanged)}></input>
                   <label> Character</label>

            </div>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator />);