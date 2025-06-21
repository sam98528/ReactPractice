import "./App.css";
import TopHeader from "./components/topHeader/TopHeader";
import SearchBarHeader from "./components/searchBarHeader/SearchBarHeader";
import NavBar from "./components/navBar/NavBar";
import MainTop from "./components/mainTop/mainTop";

function App() {
  return (
    <div className="app">
      <TopHeader />
      <SearchBarHeader />
      <NavBar />
      <MainTop />
    </div>
  );
}

export default App;
