import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import Tabdata from "./tabs/tabdata";
import Findform from "./tabs/findform";
import Sideform from "./tabs/sideform";

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
  const [submit, setSubmit] = useState(false);

  //   getHeading values
  const [headingdata, setheadingdata] = useState("tab:r1:0");

  //  form validation errors
  const [errors, setErrors] = useState({});

  //  featching data from api
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
    setErrors(validated(addData));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      const newdata = {
        id: addData.id,
        name: addData.name,
        username: addData.username,
        email: addData.email,
      };

      const saveddata = [...dataValue, newdata];
      setvalue(saveddata);

      setDaata({ id: " ", name: " ", username: " ", email: " " });
    }
  }, [errors]);

  const changeInput = (e) => {
    const fieldname = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newformvalue = { ...addData };
    newformvalue[fieldname] = fieldValue;
    setDaata(newformvalue);
  };

  const validated = (values) => {
    const error = {};
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const blankspace = /^\s+$/;
    if (!values.name) {
      error.name = "please enter name";
    } else if (blankspace.test(values.name)) {
      error.name = " please enter valid Name";
    }

    if (!values.email) {
      error.email = "please enter email address";
    } else if (!regx.test(values.email)) {
      error.email = "please enter valid address";
    }

    if (!values.username) {
      error.username = "please enter Username";
    } else if (blankspace.test(values.username)) {
      error.username = " please enter valid Username";
    }
    return error;
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

  // sorte values by name
  const sortByName = () => {
  filtered.sort((a,b) => (a.name > b.name) ? 1 : -1 )
  setDaata(filtered);
  };

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
        <div className="flex d_block">
          <div className="p-4 table_data_width md:w-auto w-1/2 border-r-2 border-slate-300">
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

            <Findform
              value={searchTerm}
              onClick={deletBtn}
              onChange={handleChange}
            />

              <button onClick={sortByName}
            className="mt-6 bg-slate-200 border-slate-400 border rounded px-4 ml-auto"
          >
            Sort By Name
          </button>

            <TabPanel className="overflow-auto">
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
          <Sideform
            onClick={submmitted}
            onChange={changeInput}
            valueName={addData.name}
            valueUsername={addData.username}
            valueEmail={addData.email}
            errorName={errors.name}
            errorUsername={errors.username}
            errorEmail={errors.email}
          />
        </div>
      </Tabs>
    </div>
  );
};
export default Tabcomponent;
