import { useEffect } from "react";
import { useState } from "react";
function Timem() {

  const [time,setTime] =  useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=>{
      clearInterval(intervalId);
    }
  },[]);

  return (
    <p className="lead">
      This is the current time:-{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}{" "}
    </p>
  );
}

export default Timem;
