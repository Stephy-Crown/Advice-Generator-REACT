import React from "react";

// import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";

const App = () => {
  // const [advice, setAdvice] = useState("");
  // const [adviceId, setAdviceId] = useState("");

  // //

  // useEffect(() => {
  //   const url = "https://api.adviceslip.com/advice";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const resObj = await response.json();
  //       // Get a resObj::slip which is an object too with advice ppty, so to get advice we use this
  //       console.log(resObj.slip.advice);
  //       console.log(resObj.slip.id);
  //       // Lets store this in variable
  //       const data = resObj.slip.advice;
  //       const dataId = resObj.slip.id;
  //       setAdvice(data);
  //       setAdviceId(dataId);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Invoke the fetchdata fn

  // const handleClick = () => {
  //   const url = "https://api.adviceslip.com/advice";
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const resObj = await response.json();
  //       // Get a resObj::slip which is an object too with advice ppty, so to get advice we use this
  //       console.log(resObj.slip.advice);
  //       console.log(resObj.slip.id);
  //       // Lets store this in variable
  //       const data = resObj.slip.advice;
  //       const dataId = resObj.slip.id;
  //       setAdvice(data);
  //       setAdviceId(dataId);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // };
  return (
    <div className="App">
      <AdviceCard
      // adviceData={advice}
      // adviceDataId={adviceId}
      // adviceClick={handleClick}
      />
    </div>
  );
};

export default App;
