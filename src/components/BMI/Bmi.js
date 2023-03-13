import { useMemo, useState } from "react";

export default function Bmi(){

    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(140);

    const currenWeight = (event) => {
        setWeight(event.target.value);
      }

    const currentHeight = (event) => {
        setHeight(event.target.value);
      }

    const output = useMemo(() => {
        const calculatedHeight = height / 100;
        return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
      }, [weight, height]);

    return(
    <div className="container-sm my-3">
        <label htmlFor="customRange1" className="form-label">Weight: {weight} kg</label>
        <input type="range" onChange={currenWeight} min="40" max="300" step="1" value={weight} className="form-range" id="customWeight"></input>
        
        <label htmlFor="customRange1" className="form-label">Height: {height} cm and {height*0.01}m</label>
        <input type="range" onChange={currentHeight} min="140" max="300" step="1" value={height} className="form-range" id="customHeight"></input>

        <div className="bmi">Your BMI is: {calBMI()}</div>
        <div className="d-flex justify-content-center">{output>25?'You are FAT AF....':''}</div>
    </div>
    );

}