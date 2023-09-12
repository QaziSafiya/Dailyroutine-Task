import React from "react";
import { MdAdd } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { additems, deleteItem, clearItem } from "./utils/addtodo";
import { useState } from "react";

const Todoapp = () => {
  const todolist = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const [data, setData] = useState("");

  const List = (e) => {
    e.preventDefault();
    dispatch(additems(data));
    setData("");
  };

  const remove = () => {
    dispatch(deleteItem());
  };

  const clear = () => {
    dispatch(clearItem());
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-5">
      <div className="max-w-[1240px] w-full h-full m-auto ">
        <figcaption className="flex justify-center items-center md:text-5xl text-purple-400 sm:text-4xl text-3xl pt-5  pr-2 md:flex flex-col gap-6 ">
          <img
            className="md:w-72 w-52"
            src="https://media.giphy.com/media/dCjgjlXrflbRFqNiRL/giphy.gif"
            alt=""
          />
          Daily Planner
        </figcaption>
        <div className="w-72 h-14 bg-white rounded-md  m-auto flex justify-center items-center mt-10 md:w-[400px] ">
          <h1 className="text-3xl"> ✍️</h1>
          <input
            type="text"
            placeholder="Write the daily plan"
            className="w-full h-full text-gray-800 focus outline-none px-5"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <MdAdd size={30} className="text-green-600 mx-3" onClick={List} />
        </div>

        <div className="  grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 mt-8 m-auto ">
          {todolist.map((add) => {
            return (
              <div className="w-[200px] h-[120px] p-3 md:m-5 m-auto mt-12 md:w-72 sm:w-72 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-md   flex justify-center items-center flex-col-wrap hover:bg-green-200 ">
                {add.value}
                <RiDeleteBinLine
                  size={20}
                  className="text-green-600 mx-3"
                  onClick={remove}
                />
              </div>
            );
          })}
        </div>
        <div className="m-auto mt-12 text-center">
          <button
            className="w-[120px] h-10 rounded-md focus outline-none text-black bg-purple-300 px-3 hover:bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  "
            onClick={clear}
          >
            Remove all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoapp;
