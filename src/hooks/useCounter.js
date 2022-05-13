import { useState } from "react";
const useCounter=(initialValue, initialStep)=>{
    const [value, setValue]=useState(initialValue);
    const [step, setStep]=useState(initialStep);
    const increase=()=>setValue(value + step);
    const decrease=()=>setValue(value - step);
    const reset=()=>setValue(0);
    const setStepValue=(e)=>setStep(Number(e.target.value))
    return {
        value,
        step,
        increase,
        decrease,
        reset,
        setStepValue
    }
}
export default useCounter;