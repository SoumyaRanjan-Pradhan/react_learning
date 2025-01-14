const container = (
  <div className="container">
    <div className="cards">
      <div className="card">
        <h2>Study React</h2>
        <img
          src="https://www.curotec.com/wp-content/uploads/2024/10/top-uses-for-react-e1729004277386.jpg?w=1024"
          style={{ width: "300px" }}
        />
        <p>
          React is the library for web and native user interfaces. Build user
          interfaces out of individual pieces called components written in
          JavaScript.
        </p>
      </div>
      <div className="card">
        <h2>Learn React</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdCxfo8H5NcKMZcGw2VK9hEEBS2-oB63XpA&amp;s"
          style={{ width: "300px" }}
        />
        <p>
          React is a JavaScript library for building user interfaces. React is
          used to build single-page applications. React allows us to create
          reusable UI components.
        </p>
      </div>
    </div>
    <form>
      <div className="user_group">
        <label htmlFor="user">Username</label>
        <input id="user" />
      </div>
      <div className="user_group">
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" />
      </div>
    </form>
  </div>
);

var root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
