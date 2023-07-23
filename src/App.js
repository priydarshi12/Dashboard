import "./App.css";
import Chart from "./Components/Chart/Chart";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import User from "./Components/User/User";

function App() {
  return (
    <div className="App">
      <Navbar className="nav"/>
      <User />
      <Chart />
      <SideBar />
    </div>
  );
}

export default App;
