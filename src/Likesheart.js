import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addlikes } from "./utils/Slice";
import { togglemessage } from "./utils/cartSlice";

const Likesheart = () => {
  const dispatch = useDispatch();

  const addheart = useSelector((state) => state.heart.like);
  const toggle = useSelector((state) => state.cart.message);
  const countLikes = () => {
    dispatch(addlikes());
  };

  const [dashboard, setDashboard] = useState(false);
  const Dashboard = () => {
    // setDashboard(true);
    dispatch(togglemessage());
  };

  const [name, setName] = useState("");
  console.log(name);
  const handlesubmit = (e) => {
    e.preventDefault();
    setDashboard(false);
  };

  const [heartlength, setHeartlength] = useState(addheart.length);

  return (
    <div>
      <h1 className="text-8xl  flex justify-center items-center p-8 flex-col ">
        🌼
      </h1>
      <button
        className="w-[140px] h-[40px] rounded-md flex m-auto text-center px-4 py-1 bg-green-200 text-black"
        onClick={countLikes}
      >
        Count Likes❤️
      </button>

      <div className="w-[340px] h-[240px] rounded-md flex flex-col justify-center m-auto  bg-red-400 text-center mt-8 p-5">
        <h1 className="text-2xl p-5">Display Likes</h1>
        <h1 className="text-4xl p-5 ">{addheart.length} likes</h1>
        {addheart.length === 4 && (
          <button
            className="w-[140px] h-[40px] rounded-md flex m-auto text-center px-4 py-1 bg-green-200 text-black  font-extralight"
            onClick={Dashboard}
          >
            GOtodashboard
          </button>
        )}

        {addheart.length === 10 && (
          <button
            className="w-[140px] h-[40px] rounded-md flex m-auto text-center px-4 py-1 bg-green-200 text-black  font-extralight"
            onClick={Dashboard}
          >
            emaildashboard
          </button>
        )}
        {addheart.length === 20 && (
          <button
            className="w-[140px] h-[40px] rounded-md flex m-auto text-center px-4 py-1 bg-green-200 text-black  font-extralight"
            onClick={Dashboard}
          >
            Windashboard
          </button>
        )}
      </div>

      {toggle && (
        <div className="w-[340px] h-[240px] rounded-md flex flex-col justify-center mt-auto bg-red-400 text-center  p-5">
          <form
            action="
          "
            onSubmit={handlesubmit}
          >
            <input
              type="text"
              placeholder="enter something "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Likesheart;
