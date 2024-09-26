import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_LOGO } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
       <div className="absolute -z-10">
        <img className="" src= {BG_LOGO} />
      </div>
      <div className="pt-[30%] md:p-0">
      <GptSearchbar />
      <GptMovieSuggestions />
    </div>
    </>
   
  );
};

export default GptSearch;
