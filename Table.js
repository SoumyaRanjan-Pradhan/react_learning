import React, { useState } from "react";
import Registration from "./Registration";
import View from "./View";
import Search from "./Search";

const Table = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  let [info, setInfo] = useState([]);
  let [item, setItem] = useState(0);
  let [data,setData] = useState([]);
  //Add method
  const addRegister = () => {
    let next_value = [
      {
        username: username,
        email: email,
        role: role,
        date: date,
      },
    ];
    if (username != "" && email != "" && role != "" && date != "") {
      setInfo(info.concat(next_value));
      setData(info.concat(next_value));
    }
    setUsername("");
    setEmail("");
    setRole("");
    setDate("");
  };
  console.log(info);

  //Update Method
  const updateData = () => {
    console.log("yes");
    document.querySelector("#submit").style = "display:block";
    document.querySelector("#update").style = "display:none";
    let next_value = {
      username: username,
      email: email,
      role: role,
      date: date,
    };
    const arr = info.map((ele, id) => {
      if (id == item) {
        return next_value;
      } else {
        return ele;
      }
    });
    setInfo(arr);
    setData(arr);
    setUsername("");
    setEmail("");
    setRole("");
    setDate("");
  };
  //Search Functionality
  const searchData = (e) => {
    let search_value = e.target.value;
    console.log(search_value);
    console.log(typeof(search_value));
    console.log(search_value.length);
    let arr = info.map((element) => {
      let arr_value = element.username.substring(0, search_value.length);
      console.log(arr_value);
      if (search_value.toLowerCase() == arr_value.toLowerCase()) {
        return element;
      }
    });
    let filter_arr = arr.filter((element) => {
      if (element != undefined) {
        return element;
      }
    });
    console.log(filter_arr);
    setData(filter_arr);
  };

  return (
    <>
      <Registration
        setUsername={setUsername}
        setEmail={setEmail}
        setRole={setRole}
        setDate={setDate}
        input_value={{
          username: username,
          email: email,
          role: role,
          date: date,
        }}
        addRegister={addRegister}
        updateData={updateData}
      />   
        <Search searchData={searchData} data_length = {info.length} />
      <View
        data={data}
        setData = {setData}
        setInfo={setInfo}
        setItem={setItem}
        setUsername={setUsername}
        setEmail={setEmail}
        setRole={setRole}
        setDate={setDate}
      />
    </>
  );
};

export default Table;
