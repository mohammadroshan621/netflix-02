import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-40 mx-auto left-0 right-0 text-white rounded-md">
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
        <input className="p-4 my-2 w-full rounded-lg bg-gray-500" type="text" placeholder="Full Name"/>

        )}
        
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-gray-500 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg bg-gray-500"
        />
        <button className="p-3 my-4 bg-red-600 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}

        </button>
        <h1 className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix Sign Up Now" : "Already Register? Sign In"}
        </h1>
      </form>
    </div>
  );
};

export default Login;
