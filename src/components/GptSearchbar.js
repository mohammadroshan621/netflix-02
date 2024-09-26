import React, { useRef } from "react";
import lang from "./languagesConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, API_TOKEN } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchbar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(API_TOKEN);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchQuery =
      "Act as movie recommendations system and suggest movies for the query:" +
      searchText.current.value +
      ".only give me names of 5 movies, comma seperated like the given result ahead. Example Result:Avatar,bahubali,Ms.dhoni,maharshi";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(searchQuery);
    const response = await result.response;
    const text = response.text();
 
    if (!text) {
    }
    const gptMovies = text.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    
  };
  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="  bg-black w-1/2 grid grid-cols-12 mr-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 m-4 px-4 bg-red-500 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
