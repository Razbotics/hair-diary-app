import "./App.css";
import Calendar from "./components/Calendar";
import NavBar from "./components/NavBar";
import AppContext from "./context/appContext";

function App() {
  return (
    <AppContext>
      <div className="App">
        <NavBar />
        <Calendar />
      </div>
    </AppContext>
  );
}

export default App;
