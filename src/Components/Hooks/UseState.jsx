import "./Style.css";
import { useState } from "react";
const UseState = () => {
    const initialData = 4;
    const [myNum,setMyData] = useState(initialData);
    const increment = (prev)=>{
        setMyData(prev+1);
    }
    const decrement = (prev)=>{
        setMyData(prev-1);
    }
  return (
    <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>increment(myNum)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
             INCR
        </div>
        <div className="button2" onClick={()=>decrement(myNum)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
             DECR
        </div>
    </div>
  )
}

export default UseState