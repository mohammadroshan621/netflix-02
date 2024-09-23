import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SIGNOUT } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className=" w-screen px-8 py-2 bg-gradient-to-b from-black absolute z-10 flex justify-between">
      <img className="w-44" src={LOGO} />

      {user && (
        <div className="flex p-4">
          <img src={SIGNOUT} />
          <button
            onClick={handleSignOut}
            className="bg-red-500 p-2 font-bold text-white rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
