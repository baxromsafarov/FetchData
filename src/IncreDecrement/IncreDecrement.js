import  {useState} from "react";
import "./IncreDecrement.css";

const IncreDecrement = () =>{
    const [increDecrement, setIncreDecrement] = useState(0);
    
    const incrementHandler = () =>{
        setIncreDecrement(increDecrement + 1);
    }

    const decrementHandler = () =>{
        setIncreDecrement(increDecrement - 1);
    }

    return (
        <div className="increDecrement">
            <h1>Count Changer</h1>
            <h2>{increDecrement}</h2>
            <button onClick={incrementHandler}>Push to +</button>
            <button onClick={decrementHandler}>Push to -</button>
        </div>
    );
}

export default IncreDecrement;