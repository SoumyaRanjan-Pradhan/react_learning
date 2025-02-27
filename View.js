import React from "react";

const View = ({
  data,
  setData,
  setInfo,
  setItem,
  setUsername,
  setEmail,
  setRole,
  setDate,
}) => {
  let i = 0;
  console.log(data);
  return (
    <>
      <table>
        {data.map(({ username, email, role, date }) => {
          if (
            username != "" &&
            email != "" &&
            role != "" &&
            date != "" &&
            i < 1
          ) {
            i++;
            return (
              <thead key="1">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Creation Date</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
            );
          }
        })}
        <tbody>
          {data.map(({ username, email, role, date }, id) => {
            return (
              <>
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{role}</td>
                  <td>{date}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => {
                        document.querySelector("input").focus();
                        document.querySelector("#submit").style.display =
                          "none";
                        document.querySelector("#update").style.display =
                          "block";
                        setItem(id);
                        setUsername(username);
                        setEmail(email);
                        setRole(role);
                        setDate(date);
                      }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => {
                        let arr = data.filter((element, ind) => {
                          console.log(id);
                          if (ind !== id) {
                            return element;
                          }
                        });
                        setInfo(arr);
                        setData(arr);
                        console.log(arr);
                      }}
                    ></i>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default View;
