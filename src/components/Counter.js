

import Step from "./Step.js";
import "../styles/Counter.css"
import useCounter from "../hooks/useCounter.js";
export default function Counter({initialValue, initialStep}){
    const {
        value,
        step,
        increase,
        decrease,
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
            <p className="display">{value}</p>
            <input
                type="button"
                onClick={increase}
                value="+"
                className="button"
            />
            <input
                type="button"
                onClick={decrease}
                value="-"
                className="button"
            />
            <input
                type="button"
                onClick={reset}
                value="⟳"
                className="button"
            />
        </div>
    )
}

