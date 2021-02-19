import "./App.css";
import Calendar from "./components/Calendar";
import DayPosts from "./components/DayPosts";
import NavBar from "./components/NavBar";
import AppContext from "./context/appContext";

function App() {
  return (
    <AppContext>
      <div className="App">
        <DayPosts />
        <NavBar />
        <Calendar />
      </div>
    </AppContext>
  );
}

export default App;
