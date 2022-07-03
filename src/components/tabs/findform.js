import React from "react";

const Findform = ({ onClick, onChange, value }) => {
  return (
    <>
      <form className="mt-4">
        <label className="relative flex">
          <span className="mr-2 mt-1.5">Find</span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-3/6 border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            name="search"
            value={value}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            className="bg-slate-200 border-slate-400 border rounded px-4 ml-auto"
          >
            Delete
          </button>
        </label>
      </form>
    </>
  );
};

export default Findform;
