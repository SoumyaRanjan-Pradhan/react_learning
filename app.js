const container = React.createElement("div", { className: "container" }, [
  React.createElement("div", { className: "cards", key: 1 }, [
    React.createElement("div", { className: "card", key: 1 }, [
      React.createElement("h2", { key: 1 }, "Study React"),
      React.createElement("img", {
        key: 2,
        src: "https://www.curotec.com/wp-content/uploads/2024/10/top-uses-for-react-e1729004277386.jpg?w=1024",
        style: { width: 300 },
      }),
      React.createElement(
        "p",
        { key: 3 },
        "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript."
      ),
    ]),
    React.createElement("div", { className: "card", key: 2 }, [
      React.createElement("h2", { key: 1 }, "Learn React"),
      React.createElement("img", {
        key: 2,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdCxfo8H5NcKMZcGw2VK9hEEBS2-oB63XpA&s",
        style: { width: 300 },
      }),
      React.createElement(
        "p",
        { key: 3 },
        "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components."
      ),
    ]),
  ]),
  React.createElement("form", { key: 2 }, [
    React.createElement("div", { className: "user_group", key: 1 }, [
      React.createElement("label", { htmlFor: "user", key: 1 }, "Username"),
      React.createElement("input", { key: 2, id: "user" }),
    ]),
    React.createElement("div", { className: "user_group", key: 2 }, [
      React.createElement("label", { htmlFor: "pass", key: 1 }, "Password"),
      React.createElement("input", { key: 2, type: "password", id: "pass" }),
    ]),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
