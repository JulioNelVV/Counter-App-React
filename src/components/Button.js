import { useState } from "react";
import "../styles/Button.css"
function Button({sign, setValue}){
    
    return(
        <button className="button" onClick={setValue}>{sign}</button>
    )
}
export default Button;