import Header from "./Components/Header";
import Main from "./Components/Main";
import "./style.css";

const App = () => {
  console.log("App component render");
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;