//import { useEffect, useState } from "react";
import React, { useState } from "react";
import "./App.css";
function App() {


const[numOfFields,setnumOfField]=useState(0)

    return (
        <div className="App">
            <header className="App-header">
            Hello!
          
            <label>Enter no.of Fields</label>
<input type="number" value={numOfFields} onChange={(e)=>{setnumOfField(e.target.value)}}/>
</header>
        </div>
     
    )

}


export default App;
