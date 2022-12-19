import React from "react";

import { useEffect, useState } from "react";
import AdviceData from "./AdviceData";

// const AdviceCard = ({ adviceDataId, adviceData, adviceClick }) => {

const AdviceCard = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  //

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const resObj = await response.json();
        // Get a resObj::slip which is an object too with advice ppty, so to get advice we use this
        console.log(resObj.slip.advice);
        console.log(resObj.slip.id);
        // Lets store this in variable
        const data = resObj.slip.advice;
        const dataId = resObj.slip.id;
        setAdvice(data);
        setAdviceId(dataId);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const resObj = await response.json();
        // Get a resObj::slip which is an object too with advice ppty, so to get advice we use this
        console.log(resObj.slip.advice);
        console.log(resObj.slip.id);
        // Lets store this in variable
        const data = resObj.slip.advice;
        const dataId = resObj.slip.id;
        setAdvice(data);
        setAdviceId(dataId);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  };
  return (
    <main className="pt-[130px] bg-darkBlue">
      <article className="flex justify-center items-center px-[20px]">
        <AdviceData
          adviceClick={handleClick}
          adviceDataId={adviceId}
          adviceData={advice}
        />

        {/* <div className="bg-darkGrayishBlue flex flex-col justify-center items-center md:w-[600px] w-[400px] pt-[40px] px-[20px] rounded-2xl ">
          <h1
            className="text-neonGreen pb-[25px]  uppercase font-Manrope"
            id="advice-id"
          >
            ADVICE {""} #{adviceId} */}
        {/* <!-- #Advice ID goes here --> */}
        {/* </h1>
          <p
            className="pb-[40px] font-Manrope text-[30px] text-center text-lightCyan"
            id="advice-text"
          >
            {advice} */}
        {/* <!-- "Advice text goes here" --> */}
        {/* </p>
          <img
            src={dividerDesktop}
            className="hidden md:block pb-[30px]"
            alt="divider"
          />
          <img
            src={dividerMobile}
            alt="divider"
            className="block md:hidden pb-[30px]"
          />
          <Button adviceClick={handleClick} /> */}
        {/* <button
            className="-mb-[25px] bg-neonGreen p-4 rounded-full hover:cursor-pointer hover:transition ease-in-out duration-500 hover:shadow-red-900"
            id="get-advice"
          onClick={adviceClick}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button> */}
        {/* </div> */}
      </article>
    </main>
  );
};

export default AdviceCard;
