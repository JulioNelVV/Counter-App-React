import { useState } from "react";
import Button from "./Button.js";
import Display from "./Display.js";
import Step from "./Step.js";
import "../styles/Counter.css"
function Counter({initialValue, initialStep}){
    
    const [value, setValue]=useState(Number(initialValue));
    const [step, setStep]=useState(Number(initialStep));

    const increaseValue=(step)=>{
        setValue(value + step);
    }
    const decreaseValue=(step)=>{
        setValue(value - step);
    }
    const resetValue=()=>{
        setValue(0);
    }
    const setStepValue=(e)=>{
        setStep(Number(e.target.value))
    }
    return (    
        <div className="counter">
            <h1 className="title">Counter App</h1>
            <Step 
                stepValue={step}
                setStepValue={setStepValue}
            ></Step>
            <Display value={value}></Display>
            <Button 
                sign="+" 
                setValue={()=>{increaseValue(step)}}
            ></Button>
            <Button 
                sign="-"
                setValue={()=>decreaseValue(step)}
             ></Button>
            <Button 
                sign="⟳" 
                setValue={()=>{setValue(0)}}
            ></Button>
        </div>
    )
}

export default Counter;