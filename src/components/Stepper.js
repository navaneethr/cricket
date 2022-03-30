import React, {useState} from 'react';

const Stepper = ({
    children,
    activeStep,
    prevLabel= "Back",
    nextLabel = "Next",
    lastStepNextLabel = "Submit"
 }) => {
    const [step, setStep] = useState(activeStep);
    const kids = Array.isArray(children) ? children : [children];
    const lastStepIndex = kids.length - 1
    const previousLabel = prevLabel
    const nextOrSubmitLabel = (lastStepIndex === step) ? lastStepNextLabel : (nextLabel || "Previous");

    const onPrev = () => {
        if(step > 0) {
            setStep(s => s - 1);
        }
    }

    const onNext = () => {
        if(step < lastStepIndex) {
            setStep(s => s + 1);
        }
    }

    return (
        <div>
            {kids[step]}
            <div>
                {kids.length > 1 && <button onClick={onPrev}>{previousLabel}</button>}
                <button onClick={onNext}>{nextOrSubmitLabel}</button>
            </div>
        </div>
    )
}

export default Stepper;