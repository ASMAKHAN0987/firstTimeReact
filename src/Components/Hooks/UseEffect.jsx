import React, { useState,useEffect } from 'react'

const UseEffect = () => {
   const [myNum,setMyData] = useState(0);
    const increment = (prev)=>{
        setMyData(prev+1);
    }
   useEffect(() => {
     document.title = `Chats(${myNum})`;
})
   
  return (
    <div className='center_div'>
        <p>{myNum}</p>
    <div className="button2" onClick={()=>increment(myNum)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
             INCR
        </div>
    </div>
  )
}

export default UseEffect