import { useState } from "react";
import Button from "./Button.js";
import Display from "./Display.js";
import Step from "./Step.js";
import "../styles/Counter.css"
import useCounter from "../hooks/useCounter.js";
function Counter({initialValue, initialStep}){
    const {
        value,
        step,
        increase,
        decrase,
        reset,
        setStepValue,
    }=useCounter(initialValue, initialStep);
   
   
    return (    
        <div className="counter">
            <h1 className="title">Counter App</h1>
            <Step 
                stepValue={step}
                setStepValue={setStepValue}
            />
            <Display
                value={value}
            />
            <Button 
                sign="+" 
                setValue={increase}
            />
            <Button 
                sign="-"
                setValue={decrase}
             />
            <Button 
                sign="⟳" 
                setValue={reset}
            />
        </div>
    )
}

export default Counter;