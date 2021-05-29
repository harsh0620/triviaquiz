import React, { useState, useEffect } from "react";
import { useGlobalContext } from './context'

const Timer = () => {
  const { quiz,openModal,setToggleModal,isActive,setIsActive} = useGlobalContext()
  const [second, setSecond] = useState(quiz.second);
  const [minute, setMinute] = useState(quiz.minute);
  const [counter, setCounter] = useState(quiz.second+quiz.minute*60);

  useEffect(() => {
    let intervalId;
   
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
        String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
        String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        setCounter((counter) => {
           if(counter===0)
           {
            setIsActive(false);
            setCounter(0);
            setSecond(0);
            setMinute(0);
                setToggleModal(true);
                openModal();
            }
           return counter - 1});
    }, 1000);
}

    return () => clearInterval(intervalId);
  }, [isActive, counter,openModal,setToggleModal,setIsActive]);
  return (
    <div className="container">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
    </div>
  );
};

export default Timer;
