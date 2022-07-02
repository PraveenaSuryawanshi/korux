import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState , useEffect} from "react";

const Tabcomponent = () => {

    const data = [
    {
      id:1,
      name: "Indiana",
      description: "demo",
      web: "Indianapolis",
    },
    {
        id:2,
      name: "abc",
      description: "demo",
      web: "Indianapolis",
    },
    {
        id:3,
      name: "vvv",
      description: "demo",
      web: "Indianapolis",
    },
    {
        id:4,
      name: "ygvggv",
      description: "demo",
      web: "Indianapolis",
    },
    {
        id:5,
      name: "bhagvg",
      description: "demo",
      web: "Indianapolis",
    },
  ];

//   checked box 
const [ischecked, setChecked] = useState([]);

// submmitted values
const [dataValue, setvalue] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
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

  const submmitted = (e) => {
    e.preventDefault();
    const newdata = {
        id:addData.id,
        name: addData.name,
        username: addData.username,
        email: addData.email,
    };
    
     const saveddata = [...dataValue,newdata];
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

    newcheck.splice(ischecked,ischecked.length);
    console.log(ischecked)
    setvalue(newcheck);
  }


  const onchangechecked = (e) => {
    const {value,checked} = e.target;
    if(checked){
        setChecked([...ischecked , value])
    } else {
        setChecked(ischecked.filter((e)=> e !== value))
    }
  }

  const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const filtered = !searchTerm
    ? dataValue
    : dataValue.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

//   useEffect(() => {
//     const results = dataValue.filter(person =>
//       person.includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

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
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button onClick={deletBtn} className="bg-slate-200 border-slate-400 border rounded px-4 ml-auto">
                  Delete
                </button>
                
              </label>
            </form>

            <TabPanel>
              <table className="mt-6 mb-6 border-collapse border border-slate-400 ...">
                <thead className="bg-lime-500 text-white">
                  <tr>
                    <th className="text-sm border border-slate-300 p-2">
                      {/* <input onChange={onchangechecked} type="checkbox" class="checked:bg-blue-500" /> */}
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
                  {filtered.map((items,index) => {
                      items.id = index;
                    return (
                      <>
                        <tr key={index}>
                          <td className="text-center text-sm border border-slate-300 p-2">
                            <input id={index}  
                              onClick={onchangechecked}
                              type="checkbox"
                            
                              class="checked:bg-blue-500"
                              value={items.id}
                            />
                          </td>
                         
                          <td className="text-sm border border-slate-300 p-2">
                            {items.name}
                          </td>
                          <td className="text-sm border border-slate-300 p-2">
                            {items.username}
                          </td>
                          <td className="text-sm border border-slate-300 p-2">
                            {items.email}
                          </td>
                         
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
