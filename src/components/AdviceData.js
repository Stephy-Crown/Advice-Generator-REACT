import React from "react";
import Button from "./Button";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";

const AdviceData = ({ adviceDataId, adviceData, adviceClick }) => {
  return (
    <div className="bg-darkGrayishBlue flex flex-col justify-center items-center md:w-[600px] w-[400px] pt-[40px] px-[20px] rounded-2xl ">
      <h1
        className="text-neonGreen pb-[25px]  uppercase font-Manrope"
        id="advice-id"
      >
        ADVICE {""} #{adviceDataId}
        {/* <!-- #Advice ID goes here --> */}
      </h1>
      <p
        className="pb-[40px] font-Manrope text-[30px] text-center text-lightCyan"
        id="advice-text"
      >
        {adviceData}
        {/* <!-- "Advice text goes here" --> */}
      </p>
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
      <Button adviceClick={adviceClick} />
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
    </div>
  );
};

export default AdviceData;
