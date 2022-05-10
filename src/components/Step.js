function Step({stepValue, setStepValue}){
    return(
        <div>
            <label>Set the step</label>
            <input type="number"
                value={stepValue}
                onChange={setStepValue}
            ></input>
        </div>
    )
}
export default Step;