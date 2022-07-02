import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";

const Tabcomponent = () => {
  const data = [
    {
      id: 1,
      name: "Indiana",
      description: "demo",
      web: "Indianapolis",
    },
    {
      id: 2,
      name: "abc",
      description: "demo",
      web: "Indianapolis",
    },
    {
      id: 3,
      name: "vvv",
      description: "demo",
      web: "Indianapolis",
    },
    {
      id: 4,
      name: "ygvggv",
      description: "demo",
      web: "Indianapolis",
    },
    {
      id: 4,
      name: "bhagvg",
      description: "demo",
      web: "Indianapolis",
    },
  ];

  const [dataValue, setvalue] = useState(data);
  const [addData, setDaata] = useState({
    name: "",
    description: "",
    web: "",
  });

  const submmitted = (e) => {
    e.preventDefault();
    const newdata = {
        id:addData.id,
        name: addData.name,
        description: addData.description,
        web: addData.web,
    };
    

     const saveddata = [...dataValue,newdata];
     setvalue(saveddata);

     console.log(saveddata);
  };

  const changeInput = (e) => {
    const fieldname = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newformvalue = { ...addData };
    newformvalue[fieldname] = fieldValue;
    setDaata(newformvalue);
  };

  const deletBtn = (e, deletId) => {
      e.preventDefault();
      const deletdata = [...dataValue];
      const index = dataValue.findIndex((data)=>data.id);
      console.log(index);
    //   deletdata.splice(index,1);
      setDaata(deletdata);

  }
  const ids="";
console.log(ids);
  return (
    <div className="block">
      <Tabs className="p-4">
        <TabList className="flex">
          <Tab className="tabs bg-lime-500 text-white">Immunisation Alets</Tab>
          <Tab className="tabs mr-1 bg-lime-500 text-white">Lab Alets</Tab>
          <Tab className="mr-1 tabs tabs bg-lime-500 text-white">
            Immunisation Alets
          </Tab>
          <Tab className="mr-1 tabs bg-lime-500 text-white">Lab Alets</Tab>
        </TabList>
        <div className="flex">
          <div className="p-4 w-1/2 border-r-2 border-slate-300">
            <h3 className="text-lime-500 font-medium">Immunisation Alets</h3>
            <form className="mt-4">
              <label className="relative flex">
                <span className="mr-2 mt-1.5">Find</span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-3/6 border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  type="text"
                  name="search"
                />
                <button className="bg-slate-200 border-slate-400 border rounded px-4 ml-auto">
                  Delete
                </button>
              </label>
            </form>

            <TabPanel>
              <table className="mt-6 mb-6 border-collapse border border-slate-400 ...">
                <thead className="bg-lime-500 text-white">
                  <tr>
                    <th className="text-sm border border-slate-300 p-2">
                      <input type="checkbox" class="checked:bg-blue-500" />
                    </th>

                    <th className="text-sm border border-slate-300 p-2">
                      Name
                    </th>
                    <th className="text-sm border border-slate-300 p-2">
                      Description
                    </th>
                    <th className="text-sm border border-slate-300 p-2">
                      Web Reference
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataValue.map((items,index) => {
                       ids = index;
                    return (
                      <>
                        <tr key={index}>
                          <td className="text-center text-sm border border-slate-300 p-2">
                            <input id={index} 
                            
                              type="checkbox"
                              class="checked:bg-blue-500"
                            />
                          </td>

                          <td className="text-sm border border-slate-300 p-2">
                            {items.name}
                          </td>
                          <td className="text-sm border border-slate-300 p-2">
                            {items.description}
                          </td>
                          <td className="text-sm border border-slate-300 p-2">
                            {items.web}
                          </td>
                            <button onClick={deletBtn} className="bg-slate-200 border-slate-400 border rounded px-4 ml-auto">
                            Delete
                            </button>
                        </tr>
                      </>
                    );
                  })}
                
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </div>
          <div className="w-1/2 px-5">
            <form className="mt-4">
              <div className="flex">
                <div className="w-1/4">
                  <p className="py-3.5">Name</p>
                  <p className="py-3.5">Description</p>
                  <p className="py-3.5">Web Ref</p>
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
                      name="description"
                      value={addData.description}
                      onChange={changeInput}
                    />

                    <input
                      className="w-full mb-4 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      value={addData.web}
                      type="text"
                      name="web"
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
