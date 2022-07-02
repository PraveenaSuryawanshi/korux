import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import Tabdata from "./tabdata";

const Tabcomponent = () => {
  const headings = [
    { heading: "Immunisation Alets", id: "tab:r1:0" },
    { heading: "Lab Alets", id: "tab:r1:1" },
    { heading: "Dl Alerts", id: "tab:r1:2" },
    { heading: "Procedure Alerts", id: "tab:r1:3" },
    { heading: "Rx specific Alerts", id: "tab:r1:4" },
    { heading: "Dx specific Alerts", id: "tab:r1:5" },
    { heading: "Patient specific Alerts", id: "tab:r1:6" },
  ];

  //   checked box
  const [ischecked, setChecked] = useState([]);

  // submmitted values
  const [dataValue, setvalue] = useState([]);

  //   getHeading values
  const [headingdata, setheadingdata] = useState("tab:r1:0");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setvalue(json);
    };
    fetchData();
  }, [setvalue]);

  // form data
  const [addData, setDaata] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const handleclick = (e) => {
    setheadingdata(e.target.id);
    console.log(headingdata);
  };

  const submmitted = (e) => {
    e.preventDefault();
    const newdata = {
      id: addData.id,
      name: addData.name,
      username: addData.username,
      email: addData.email,
    };

    const saveddata = [...dataValue, newdata];
    setvalue(saveddata);
  };

  const changeInput = (e) => {
    const fieldname = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newformvalue = { ...addData };
    newformvalue[fieldname] = fieldValue;
    setDaata(newformvalue);
  };

  const deletBtn = (e) => {
    e.preventDefault();
    const newcheck = [...dataValue];
    newcheck.splice(ischecked, ischecked.length);
    console.log(ischecked);
    setvalue(newcheck);
  };

  const onchangechecked = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChecked([...ischecked, value]);
    } else {
      setChecked(ischecked.filter((e) => e !== value));
    }
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filtered = !searchTerm
    ? dataValue
    : dataValue.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="block text-sm">
      <Tabs className="p-4">
        <div className="borderBottom">
          <TabList className="flex overflow-scroll ml-9">
            {headings.map((item, i) => {
              item.id = i;
              return (
                <>
                  <Tab
                    onClick={handleclick}
                    className="ml-1 tabs tabs bg-lime-500 text-white"
                  >
                    {item.heading}
                  </Tab>
                </>
              );
            })}
          </TabList>
        </div>
        <div className="flex">
          <div className="p-4 md:w-auto w-1/2 border-r-2 border-slate-300">
            {headings
              ? headings.map((item, index) => {
                  item.id = "tab:r1:" + index;
                  return item.id === headingdata ? (
                    <h3 id={index} className="text-lime-500 font-medium">
                      {item.heading}
                    </h3>
                  ) : (
                    ""
                  );
                })
              : ""}

            <form className="mt-4">
              <label className="relative flex">
                <span className="mr-2 mt-1.5">Find</span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-3/6 border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  type="text"
                  name="search"
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button
                  onClick={deletBtn}
                  className="bg-slate-200 border-slate-400 border rounded px-4 ml-auto"
                >
                  Delete
                </button>
              </label>
            </form>

            <TabPanel>
              <Tabdata 
                filtered={filtered}
                name="Name"
                description="Description"
                web="Web Refernce"
                onClick={onchangechecked}
              />
            </TabPanel>
            <TabPanel>
              <Tabdata
                filtered={filtered}
                name="Description"
                description="Name"
                web="Email"
                onClick={onchangechecked}
              />
            </TabPanel>
            <TabPanel>
              <Tabdata
                filtered={filtered}
                name="Name"
                description="Description"
                web="Web Refernce"
                onClick={onchangechecked}
              />
            </TabPanel>
            <TabPanel>
              <Tabdata
                filtered={filtered}
                name="Description"
                description="Name"
                web="Email"
                onClick={onchangechecked}
              />
            </TabPanel>
            <TabPanel>
              <Tabdata
                filtered={filtered}
                name="Name"
                description="Description"
                web="Web Refernce"
                onClick={onchangechecked}
              />
            </TabPanel>
            <TabPanel>
              <Tabdata
                filtered={filtered}
                name="Description"
                description="Name"
                web="Email"
                onClick={onchangechecked}
              />
            </TabPanel>
            <TabPanel>
              <Tabdata
                filtered={filtered}
                name="Name"
                description="Description"
                web="Web Refernce"
                onClick={onchangechecked}
              />
            </TabPanel>
          </div>
          <div className="w-1/2 px-5">
            <form className="mt-4">
              <div className="flex">
                <div className="w-1/4">
                  <p className="py-3.5 md:break-all md:px-4">Name</p>
                  <p className="py-3.5 md:break-all md:px-4">Description</p>
                  <p className="py-3.5 md:break-all md:px-4">Web Ref</p>
                </div>
                <div className="w-3/4">
                  <form>
                    <input
                      className="w-full mt-2 mb-4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      type="text"
                      name="name"
                      value={addData.name}
                      onChange={changeInput}
                    />

                    <input
                      className="w-full mb-4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      type="text"
                      name="username"
                      value={addData.username}
                      onChange={changeInput}
                    />

                    <input
                      className="w-full mb-4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      value={addData.email}
                      type="text"
                      name="email"
                      onChange={changeInput}
                    />
                  </form>
                </div>
              </div>
              <button
                onClick={submmitted}
                className="block bg-slate-200 border-slate-400 border rounded px-4 ml-auto"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </Tabs>
    </div>
  );
};
export default Tabcomponent;
