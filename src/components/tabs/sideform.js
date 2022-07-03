import React from "react";

const Sideform = ({
  onClick,
  onChange,
  valueName,
  valueUsername,
  valueEmail,
  errorName,
  errorUsername,
  errorEmail,
}) => {
  return (
    <div className="w-1/2 px-5 table_data_width">
      <form className="mt-4" onSubmit={onClick} method="post">
        <div className="flex">
          <div className="w-1/4">
            <p className="py-3.5 mt-1.5 md:break-all md:px-4">Name</p>
            <p className="py-3.5 mt-1.5 md:break-all md:px-4">Description</p>
            <p className="py-3.5 mt-1.5 md:break-all md:px-4">Web Ref</p>
          </div>
          <div className="w-3/4">
            <form>
              <input
                className="w-full mt-2 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                name="name"
                required
                value={valueName}
                onChange={onChange}
              />
              <p className="mb-4 text-red-600">{errorName}</p>
              <input
                className="w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                name="username"
                required
                value={valueUsername}
                onChange={onChange}
              />
              <p className="mb-4 text-red-600">{errorUsername}</p>
              <input
                className="w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                value={valueEmail}
                type="text"
                required
                name="email"
                onChange={onChange}
              />
              <p className="mb-4 text-red-600">{errorEmail}</p>
            </form>
          </div>
        </div>
        <button
          type="submit"
          className="block bg-slate-200 border-slate-400 border rounded px-4 ml-auto"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Sideform;
